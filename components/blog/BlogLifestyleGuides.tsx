import { getArticlesByCategory } from "@/lib/blog-data";
import { BlogArticleCard } from "./BlogArticleCard";

export function BlogLifestyleGuides() {
    const lifestyleArticles = getArticlesByCategory("lifestyle").slice(0, 6);

    return (
        <section className="py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Section heading */}
                <div className="mb-8 md:mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold">
                        <span className="relative inline-block">
                            Lifestyle Guides
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-black rounded-full" />
                        </span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-10">
                    {lifestyleArticles.map((article) => (
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
