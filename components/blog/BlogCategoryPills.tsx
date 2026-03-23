"use client";

import { useState } from "react";

interface BlogCategoryPillsProps {
    categories: string[];
    onSelect?: (category: string) => void;
    variant?: "default" | "accent";
}

export function BlogCategoryPills({
    categories,
    onSelect,
    variant = "default",
}: BlogCategoryPillsProps) {
    const [active, setActive] = useState(categories[0] || "");

    const handleClick = (cat: string) => {
        setActive(cat);
        onSelect?.(cat);
    };

    return (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap">
            {categories.map((cat) => {
                const isActive = active === cat;

                const baseClasses =
                    "whitespace-nowrap px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex-shrink-0 select-none";

                const colorClasses =
                    variant === "accent"
                        ? isActive
                            ? "bg-black text-white shadow-md"
                            : "bg-white border border-gray-200 text-black hover:bg-gray-50"
                        : isActive
                            ? "bg-black text-white shadow-md"
                            : "bg-[#F5F5F5] text-muted-foreground hover:bg-gray-200";

                return (
                    <button
                        key={cat}
                        onClick={() => handleClick(cat)}
                        className={`${baseClasses} ${colorClasses}`}
                    >
                        {cat}
                    </button>
                );
            })}
        </div>
    );
}
