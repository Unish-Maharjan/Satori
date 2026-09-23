import React from "react";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Paragraph({
  children,
  className = "",
}: ParagraphProps) {
  return (
    <p className={`font-display leading-relaxed ${className}`}>
      {children}
    </p>
  );
}