interface HeroPaginationProps {
  count: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const HeroPagination = ({
  count,
  activeIndex,
  onSelect,
}: HeroPaginationProps) => (
  <div className="flex justify-center gap-3 mt-8">
    {Array.from({ length: count }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        className={`
          h-1.5 rounded-full transition-all duration-500
          ${
            i === activeIndex
              ? "w-12 bg-linear-to-r from-primary to-purple-400"
              : "w-2 bg-white/10 hover:bg-white/30"
          }
        `}
      />
    ))}
  </div>
);
