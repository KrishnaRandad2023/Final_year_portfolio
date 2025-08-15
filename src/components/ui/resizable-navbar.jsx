"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("sticky inset-x-0 top-4 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible
          ? "blur(16px) saturate(180%)"
          : "blur(8px) saturate(120%)",
        boxShadow: visible
          ? [
              "0 0 32px rgba(59, 130, 246, 0.15)", // Blue glow
              "0 8px 32px rgba(0, 0, 0, 0.12)", // Main shadow
              "inset 0 1px 0 rgba(255, 255, 255, 0.2)", // Top highlight
              "inset 0 -1px 0 rgba(255, 255, 255, 0.1)", // Bottom highlight
              "0 0 0 1px rgba(255, 255, 255, 0.05)", // Border glow
            ].join(", ")
          : [
              "0 0 16px rgba(59, 130, 246, 0.08)", // Subtle blue glow
              "0 4px 16px rgba(0, 0, 0, 0.08)", // Light shadow
              "inset 0 1px 0 rgba(255, 255, 255, 0.1)", // Subtle top highlight
              "0 0 0 1px rgba(255, 255, 255, 0.03)", // Very subtle border
            ].join(", "),
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex",
        "border border-white/10 dark:border-white/5",
        className
      )}
    >
      {/* Liquid glass reflection effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/2 to-transparent rounded-full blur-sm" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-purple-400/1 to-transparent rounded-full blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full items-center justify-between">
        {children}
      </div>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => {
            onItemClick();
            if (item.link.startsWith('#')) {
              e.preventDefault();
              const element = document.querySelector(item.link);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }
          }}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-blue-500/15 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/15 backdrop-blur-sm border border-white/15 dark:border-white/10"
              style={{
                boxShadow:
                  "0 2px 8px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible
          ? "blur(16px) saturate(180%)"
          : "blur(8px) saturate(120%)",
        boxShadow: visible
          ? [
              "0 0 24px rgba(59, 130, 246, 0.12)", // Blue glow
              "0 8px 24px rgba(0, 0, 0, 0.15)", // Main shadow
              "inset 0 1px 0 rgba(255, 255, 255, 0.15)", // Top highlight
              "0 0 0 1px rgba(255, 255, 255, 0.08)", // Border glow
            ].join(", ")
          : [
              "0 0 12px rgba(59, 130, 246, 0.06)", // Subtle blue glow
              "0 4px 12px rgba(0, 0, 0, 0.1)", // Light shadow
              "inset 0 1px 0 rgba(255, 255, 255, 0.08)", // Subtle top highlight
              "0 0 0 1px rgba(255, 255, 255, 0.05)", // Very subtle border
            ].join(", "),
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "16px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{}}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        "border border-white/10 dark:border-white/5",
        className
      )}
    >
      {/* Liquid glass reflection effect */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-400/1 to-transparent rounded-full blur-sm" />
        <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-gradient-to-tl from-purple-400/1 to-transparent rounded-full blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            boxShadow: [
              "0 0 32px rgba(59, 130, 246, 0.15)", // Blue glow
              "0 20px 40px rgba(0, 0, 0, 0.15)", // Deep shadow
              "inset 0 1px 0 rgba(255, 255, 255, 0.1)", // Top highlight
              "inset 0 -1px 0 rgba(255, 255, 255, 0.05)", // Bottom highlight
              "0 0 0 1px rgba(255, 255, 255, 0.08)", // Border glow
            ].join(", "),
          }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-2xl px-4 py-8",
            "backdrop-blur-md border border-white/15 dark:border-white/10",
            "relative overflow-hidden",
            className
          )}
        >
          {/* Liquid glass reflection effects */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/3 w-2/3 h-1/2 bg-gradient-to-br from-blue-400/2 to-transparent rounded-full blur-lg" />
            <div className="absolute bottom-0 right-1/3 w-1/2 h-1/3 bg-gradient-to-tl from-purple-400/1 to-transparent rounded-full blur-lg" />
            <div className="absolute top-1/4 right-0 w-1/4 h-1/4 bg-gradient-to-l from-cyan-400/1 to-transparent rounded-full blur-md" />
          </div>

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col gap-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative p-2 rounded-lg backdrop-blur-sm border border-white/20 dark:border-white/10 transition-all duration-200 hover:border-white/30 dark:hover:border-white/20"
      style={{
        boxShadow:
          "0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {isOpen ? (
        <IconX className="text-black dark:text-white w-5 h-5" />
      ) : (
        <IconMenu2 className="text-black dark:text-white w-5 h-5" />
      )}
    </motion.button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-3 py-2 rounded-xl backdrop-blur-sm border border-white/10 dark:border-white/5 text-sm font-normal transition-all duration-300 hover:border-white/20 dark:hover:border-white/10 hover:scale-105"
      style={{
        boxShadow:
          "0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-sm shadow-lg">
        <span className="relative">
          K
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
        </span>
      </div>
      <span className="font-medium text-black dark:text-white">Krishna</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-xl text-sm font-medium relative cursor-pointer transition-all duration-300 inline-block text-center backdrop-blur-sm border";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:scale-105 hover:-translate-y-0.5",
    secondary:
      "backdrop-blur-md text-foreground border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]",
    dark: "bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] hover:scale-105",
    gradient:
      "bg-gradient-to-r from-blue-500/90 to-blue-700/90 text-white border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-105",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
