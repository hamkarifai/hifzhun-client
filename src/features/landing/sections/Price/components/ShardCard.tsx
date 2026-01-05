import type { LucideIcon } from "lucide-react";
import React from "react";

interface ShardCardProps {
  color: "green" | "blue" | "purple";
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  placeholder: string;
  onClick: () => void;
}

export const ShardCard: React.FC<ShardCardProps> = ({
  color,
  icon: Icon,
  label,
  title,
  description,
  placeholder,
  onClick,
}) => {
  // Determine color classes based on the prop
  let variantClass = "shard-green";
  let iconClass = "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
  let textClass = "group-hover:text-emerald-300";
  let labelClass = "text-emerald-500/70";
  let inputStyle = { "--text-color": "#34d399" } as React.CSSProperties;

  if (color === "blue") {
    variantClass = "shard-blue";
    iconClass = "text-blue-400 bg-blue-500/10 border-blue-500/30";
    textClass = "group-hover:text-blue-300";
    labelClass = "text-blue-500/70";
    inputStyle = { "--text-color": "#60a5fa" } as React.CSSProperties;
  } else if (color === "purple") {
    variantClass = "shard-purple";
    iconClass = "text-purple-400 bg-purple-500/10 border-purple-500/30";
    textClass = "group-hover:text-purple-300";
    labelClass = "text-purple-500/70";
    inputStyle = { "--text-color": "#c084fc" } as React.CSSProperties;
  }

  return (
    <div className={`shard-card ${variantClass} group`} onClick={onClick}>
      <div className="flex justify-between items-start mb-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center border ${iconClass}`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span
          className={`font-mono text-[10px] uppercase tracking-widest ${labelClass}`}
        >
          {label}
        </span>
      </div>
      <h4
        className={`font-serif text-xl text-white mb-2 transition-colors ${textClass}`}
      >
        {title}
      </h4>
      <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
        {description}
      </p>
      <div className="relative">
        <input
          type="number"
          className="clean-input"
          placeholder={placeholder}
          style={inputStyle}
          // Prevent click propagation if typing in the input directly?
          // Actually the HTML implies typing in here is possible, but clicking the card triggers fillAmount.
          // We'll let the click propagate to the card for now as per HTML behavior.
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
