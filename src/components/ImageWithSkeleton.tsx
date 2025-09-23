"use client";
import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-slate-50/50 to-transparent"></div>
    </div>
  );
};

export const ImageWithSkeleton = (props: ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="relative w-full h-full">
      {isLoading && <Skeleton className="absolute inset-0" />}
      <Image {...props} onLoad={() => setIsLoading(false)} className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"} ${props.className || ""}`} />
    </div>
  );
};
