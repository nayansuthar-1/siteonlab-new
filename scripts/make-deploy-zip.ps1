# Builds the source zip uploaded to Hostinger (hPanel > Node.js Apps).
# Includes everything Hostinger needs to `npm install` + `npm run build`,
# excludes local-only files. .env.local is excluded on purpose: it points at
# the local WordPress Studio; .env.production carries the live values.
#
# Usage: npm run deploy:zip  ->  hybridmonks.zip next to the project folder
# (D:\siteonlab\hybridmonks.zip), ready to upload in hPanel.

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$staging = Join-Path $env:TEMP "siteonlab-deploy-staging"
$zipPath = Join-Path (Split-Path -Parent $root) "hybridmonks.zip"

if (Test-Path $staging) { Remove-Item -Recurse -Force $staging }
New-Item -ItemType Directory -Force $staging | Out-Null

# Everything the Hostinger build needs.
$include = @(
  "src",
  "public",
  "scripts",
  "package.json",
  "package-lock.json",
  "next.config.ts",
  "tsconfig.json",
  "postcss.config.mjs",
  "eslint.config.mjs",
  ".env.production"
)

foreach ($item in $include) {
  $source = Join-Path $root $item
  if (-not (Test-Path $source)) {
    Write-Error "Missing expected file/folder: $item"
  }
  Copy-Item -Recurse -Force $source (Join-Path $staging $item)
}

if (Test-Path $zipPath) { Remove-Item -Force $zipPath }
# bsdtar (ships with Windows 10+) instead of Compress-Archive: the latter
# writes backslash entry names that extract wrongly on Hostinger's Linux.
tar.exe -a -cf $zipPath -C $staging .
if ($LASTEXITCODE -ne 0) { Write-Error "tar failed with exit code $LASTEXITCODE" }

Remove-Item -Recurse -Force $staging
$sizeMb = [math]::Round((Get-Item $zipPath).Length / 1MB, 1)
Write-Host "Created $zipPath ($sizeMb MB)"
