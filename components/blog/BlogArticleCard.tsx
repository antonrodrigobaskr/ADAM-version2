import Image from "next/image";
import Link from "next/link";
import type { BlogArticle } from "@/lib/blog-data";

interface BlogArticleCardProps {
    article: BlogArticle;
    variant?: "default" | "horizontal" | "compact";
    priority?: boolean;
}

export function BlogArticleCard({
    article,
    variant = "default",
    priority = false,
}: BlogArticleCardProps) {
    const categoryColors: Record<string, string> = {
        "hair-loss": "bg-gray-100 text-gray-800",
        "sexual-health": "bg-gray-100 text-gray-800",
        lifestyle: "bg-gray-100 text-gray-800",
        "skin-care": "bg-gray-100 text-gray-800",
        "mental-health": "bg-gray-100 text-gray-800",
        news: "bg-gray-100 text-gray-800",
    };

    const colorClass =
        categoryColors[article.category] || "bg-gray-100 text-gray-800";

    if (variant === "horizontal") {
        return (
            <Link
                href={`/blog/${article.slug}`}
                className="group flex gap-4 items-start"
            >
                <div className="relative w-28 h-20 md:w-32 md:h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="128px"
                        priority={priority}
                    />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                    <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full w-fit ${colorClass}`}
                    >
                        {article.category.replace("-", " ")}
                    </span>
                    <h3 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                        {article.readTime}
                    </span>
                </div>
            </Link>
        );
    }

    if (variant === "compact") {
        return (
            <Link
                href={`/blog/${article.slug}`}
                className="group flex flex-col gap-3"
            >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority={priority}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                        {article.readTime}
                    </span>
                </div>
            </Link>
        );
    }

    // default variant
    return (
        <Link
            href={`/blog/${article.slug}`}
            className="group flex flex-col gap-3"
        >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={priority}
                />
            </div>
            <div className="flex flex-col gap-1.5 px-0.5">
                <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full w-fit uppercase tracking-wide ${colorClass}`}
                >
                    {article.category.replace("-", " ")}
                </span>
                <h3 className="text-base md:text-lg font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed hidden md:block">
                    {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                </div>
            </div>
        </Link>
    );
}
