"use client";

import { useState } from "react";
import { BLOG_ARTICLES, CONDITION_CATEGORIES } from "@/lib/blog-data";
import { BlogArticleCard } from "./BlogArticleCard";
import { BlogCategoryPills } from "./BlogCategoryPills";

export function BlogConditionGuides() {
    const [selectedCategory, setSelectedCategory] = useState(
        CONDITION_CATEGORIES[0]
    );

    // For mock, show a mix of articles — in production, filter by condition sub-category
    const conditionArticles = BLOG_ARTICLES.filter(
        (a) =>
            a.category === "hair-loss" ||
            a.category === "sexual-health" ||
            a.category === "skin-care"
    ).slice(0, 6);

    return (
        <section className="py-12 md:py-16 bg-[#FAFAFA]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section heading */}
                <div className="mb-6 md:mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        <span className="relative inline-block">
                            Condition Guides
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-black rounded-full" />
                        </span>
                    </h2>
                </div>

                {/* Category pills */}
                <div className="mb-8 md:mb-10">
                    <BlogCategoryPills
                        categories={CONDITION_CATEGORIES}
                        variant="accent"
                        onSelect={setSelectedCategory}
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-10">
                    {conditionArticles.map((article) => (
                        <BlogArticleCard
                            key={article.slug}
                            article={article}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
