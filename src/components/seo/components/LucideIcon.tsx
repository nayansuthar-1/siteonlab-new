"use client";

import React from "react";
import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "", size = 20 }: LucideIconProps) {
  // Map some custom variations just in case
  let iconName = name;
  if (name === "BarChart") iconName = "BarChart3";
  if (name === "LineChart") iconName = "TrendingUp";
  if (name === "Briefcase") iconName = "Briefcase";

  // Resolve icon component from lucide-react exports
  const IconComponent = (Icons as any)[iconName];

  if (!IconComponent) {
    // Fallback icon if not found
    return <Icons.Sparkles className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
