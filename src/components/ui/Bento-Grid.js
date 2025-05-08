import React from "react";
import { cn } from "@/lib/Utils";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3", className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input grid grid-rows-[70%_30%] rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      <div className="header w-full h-full">{header}</div>
      <div className="content transition duration-200 group-hover/bento:translate-x-2 p-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">{title}</div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">{description}</div>
      </div>
    </div>
  )
}