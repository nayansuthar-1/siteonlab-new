"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label: string;
  type: "orchestrator" | "llm" | "vector" | "agent" | "security" | "regular";
  pulse: number;
}

export default function HeroVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width || 500;
      height = rect.height || 500;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener("resize", resize);
    resize();

    // Initialize specialized node structure
    const nodes: Node[] = [
      { x: 0.5, y: 0.5, vx: 0.1, vy: -0.15, radius: 8, label: "Agentic Orchestrator", type: "orchestrator", pulse: 0 },
      { x: 0.3, y: 0.3, vx: -0.15, vy: 0.1, radius: 6, label: "Fine-Tuned LLM", type: "llm", pulse: 1.2 },
      { x: 0.7, y: 0.3, vx: 0.12, vy: 0.08, radius: 6, label: "Vector Database", type: "vector", pulse: 2.4 },
      { x: 0.25, y: 0.65, vx: -0.08, vy: -0.12, radius: 5, label: "Compliance Guard", type: "security", pulse: 3.6 },
      { x: 0.75, y: 0.65, vx: 0.14, vy: -0.06, radius: 5, label: "Pipeline Analytics", type: "agent", pulse: 4.8 },
      { x: 0.5, y: 0.2, vx: -0.1, vy: 0.1, radius: 4, label: "Semantic Router", type: "regular", pulse: 0.8 },
      { x: 0.4, y: 0.8, vx: 0.1, vy: -0.05, radius: 4, label: "Cache Layer", type: "regular", pulse: 2.0 },
      { x: 0.6, y: 0.8, vx: -0.12, vy: 0.12, radius: 4, label: "Telemetry Node", type: "regular", pulse: 3.2 },
    ];

    // Scale nodes to initial pixel positions
    const pixelNodes = nodes.map((node) => ({
      x: node.x * width,
      y: node.y * height,
      vx: node.vx,
      vy: node.vy,
      radius: node.radius,
      label: node.label,
      type: node.type,
      pulse: node.pulse,
    }));

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Find closest node
      let foundHover: string | null = null;
      let minDist = 35;
      pixelNodes.forEach((node) => {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < minDist) {
          minDist = dist;
          foundHover = node.label;
        }
      });
      setHoveredNode(foundHover);
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      setHoveredNode(null);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const drawNodeGlow = (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string) => {
      ctx.save();
      const glowGrad = ctx.createRadialGradient(x, y, radius, x, y, radius * 4);
      glowGrad.addColorStop(0, color);
      glowGrad.addColorStop(1, "rgba(9, 10, 15, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(x, y, radius * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background radial grid lines (cyber style)
      ctx.strokeStyle = "rgba(99, 102, 241, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 1; i <= 5; i++) {
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, i * (width / 10), 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw lines between nodes
      ctx.lineWidth = 1.5;
      for (let i = 0; i < pixelNodes.length; i++) {
        for (let j = i + 1; j < pixelNodes.length; j++) {
          const n1 = pixelNodes[i];
          const n2 = pixelNodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect nodes that are within certain proximity thresholds
          let limit = 160;
          if (n1.type === "orchestrator" || n2.type === "orchestrator") limit = 200;

          if (dist < limit) {
            const alpha = (1 - dist / limit) * 0.25;
            const grad = ctx.createLinearGradient(n1.x, n1.y, n2.x, n2.y);
            
            // Check if mouse is hovering close to this path
            let pathHighlighted = false;
            const mx = (n1.x + n2.x) / 2;
            const my = (n1.y + n2.y) / 2;
            const mDist = Math.sqrt((mx - mouseX) * (mx - mouseX) + (my - mouseY) * (my - mouseY));
            if (mDist < 60) pathHighlighted = true;

            const baseColor1 = n1.type === "llm" ? "147, 197, 253" : n1.type === "vector" ? "156, 163, 175" : "59, 130, 246";
            const baseColor2 = n2.type === "llm" ? "147, 197, 253" : n2.type === "vector" ? "156, 163, 175" : "59, 130, 246";

            grad.addColorStop(0, `rgba(${baseColor1}, ${pathHighlighted ? alpha * 2.5 : alpha})`);
            grad.addColorStop(1, `rgba(${baseColor2}, ${pathHighlighted ? alpha * 2.5 : alpha})`);

            ctx.strokeStyle = grad;
            ctx.lineWidth = pathHighlighted ? 2.5 : 1.2;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();

            // Animated light data packet flowing between nodes
            const time = Date.now() * 0.001;
            const progress = (time + (i + j) * 123.45) % 1.0;
            const px = n1.x + (n2.x - n1.x) * progress;
            const py = n1.y + (n2.y - n1.y) * progress;

            ctx.fillStyle = `rgba(59, 130, 246, ${pathHighlighted ? 0.9 : 0.6})`;
            ctx.beginPath();
            ctx.arc(px, py, pathHighlighted ? 3 : 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Draw and update nodes
      pixelNodes.forEach((node) => {
        // Handle physical movement limits within boundaries
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        const margin = 25;
        if (node.x < margin || node.x > width - margin) node.vx *= -1;
        if (node.y < margin || node.y > height - margin) node.vy *= -1;

        // Interactive mouse interaction (repulsion/attraction)
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const force = (100 - dist) / 100;
          node.x += (dx / dist) * force * 1.5;
          node.y += (dy / dist) * force * 1.5;
        }

        // Color and pulse mapping
        node.pulse += 0.03;
        const pulseFactor = 1 + Math.sin(node.pulse) * 0.15;
        const radius = node.radius * pulseFactor;

        let nodeColor = "rgba(59, 130, 246, 1)"; // Sophisticated Blue
        let glowColor = "rgba(59, 130, 246, 0.15)";
        if (node.type === "orchestrator") {
          nodeColor = "rgba(255, 255, 255, 1)"; // Pure White
          glowColor = "rgba(255, 255, 255, 0.25)";
        } else if (node.type === "llm") {
          nodeColor = "rgba(147, 197, 253, 1)"; // Light Blue
          glowColor = "rgba(147, 197, 253, 0.25)";
        } else if (node.type === "vector") {
          nodeColor = "rgba(156, 163, 175, 1)"; // Slate Gray
          glowColor = "rgba(156, 163, 175, 0.25)";
        } else if (node.type === "security") {
          nodeColor = "rgba(209, 213, 219, 1)"; // Silver
          glowColor = "rgba(209, 213, 219, 0.25)";
        }

        const isCurrentHovered = hoveredNode === node.label;

        // Highlight if hovered
        if (isCurrentHovered) {
          drawNodeGlow(ctx, node.x, node.y, radius * 2.5, nodeColor.replace("1)", "0.4)"));
        } else {
          drawNodeGlow(ctx, node.x, node.y, radius * 1.5, glowColor);
        }

        // Main node core
        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Inner glowing ring
        ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * 0.5, 0, Math.PI * 2);
        ctx.stroke();

        // Node label
        const fontScale = isCurrentHovered ? "bold 11px Inter, system-ui" : "10px Inter, system-ui";
        ctx.font = fontScale;
        ctx.fillStyle = isCurrentHovered ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)";
        ctx.textAlign = "center";
        ctx.fillText(node.label, node.x, node.y - radius - 8);

        // Subtitle badge for types
        if (isCurrentHovered) {
          ctx.font = "8px JetBrains Mono, monospace";
          ctx.fillStyle = "rgba(147, 197, 253, 0.9)";
          ctx.fillText(node.type.toUpperCase(), node.x, node.y - radius - 20);
        }
      });

      // Animated target ring on hovered node
      if (hoveredNode) {
        const hNode = pixelNodes.find((n) => n.label === hoveredNode);
        if (hNode) {
          ctx.strokeStyle = "rgba(147, 197, 253, 0.4)";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(hNode.x, hNode.y, hNode.radius * 2.5 + Math.sin(Date.now() * 0.008) * 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [hoveredNode]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] lg:h-[480px] rounded-sm bg-[#080808] border border-white/10 p-1 flex items-center justify-center overflow-hidden backdrop-blur-xl shadow-2xl group"
      id="hero-graphic-container"
    >
      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Decorative Radial glow */}
      <div className="absolute -left-1/4 -top-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[80px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute -right-1/4 -bottom-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[80px] pointer-events-none animate-pulse duration-[6000ms]" />

      <canvas ref={canvasRef} className="block cursor-crosshair z-10" />

      {/* Interaction prompt */}
      <div className="absolute top-4 left-4 z-20 text-[10px] font-mono tracking-widest bg-blue-900/30 text-blue-400 border border-blue-500/30 rounded-full px-2.5 py-0.5 pointer-events-none backdrop-blur-sm font-bold uppercase">
        INTERACTIVE AI ENGINE NODES
      </div>
    </div>
  );
}
