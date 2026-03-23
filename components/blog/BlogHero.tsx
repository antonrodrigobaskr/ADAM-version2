"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOG_ARTICLES, BLOG_CATEGORIES } from "@/lib/blog-data";
import { BlogCategoryPills } from "./BlogCategoryPills";

export function BlogHero() {
    const featured = BLOG_ARTICLES.filter((a) => a.featured);
    const nonFeatured = BLOG_ARTICLES.filter((a) => !a.featured);
    const primary = featured[0];
    const secondary = featured[1];
    const smallCards = nonFeatured.slice(0, 2);

    return (
        <section className="pt-24 md:pt-32 pb-12 md:pb-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mb-8 md:mb-10">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-2">
                        Good Health
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg max-w-xl">
                        Evidence-based guides on men&apos;s health, wellness, and
                        treatments — written by doctors.
                    </p>
                </div>

                {/* Category pills */}
                <div className="mb-8 md:mb-10">
                    <BlogCategoryPills
                        categories={BLOG_CATEGORIES.map((c) => c.label)}
                    />
                </div>

                {/* Hero grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Primary featured */}
                    {primary && (
                        <Link
                            href={`/blog/${primary.slug}`}
                            className="group relative block rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px]"
                        >
                            <Image
                                src={primary.image}
                                alt={primary.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3 uppercase tracking-wide">
                                    {primary.category.replace("-", " ")}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                                    {primary.title}
                                </h2>
                                <p className="text-white/80 text-sm md:text-base line-clamp-2 max-w-lg">
                                    {primary.excerpt}
                                </p>
                            </div>
                        </Link>
                    )}

                    {/* Right side: secondary + small cards */}
                    <div className="flex flex-col gap-6">
                        {secondary && (
                            <Link
                                href={`/blog/${secondary.slug}`}
                                className="group flex gap-4 md:gap-6 items-start"
                            >
                                <div className="relative w-36 h-28 md:w-48 md:h-36 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={secondary.image}
                                        alt={secondary.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="200px"
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5 pt-1">
                                    <span className="text-[11px] font-semibold text-black uppercase tracking-wide">
                                        {secondary.category.replace("-", " ")}
                                    </span>
                                    <h3 className="text-lg md:text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                                        {secondary.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 hidden md:block">
                                        {secondary.excerpt}
                                    </p>
                                    <span className="text-xs text-muted-foreground mt-1">
                                        {secondary.readTime}
                                    </span>
                                </div>
                            </Link>
                        )}

                        {/* Small cards grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {smallCards.map((article) => (
                                <Link
                                    key={article.slug}
                                    href={`/blog/${article.slug}`}
                                    className="group flex flex-col gap-2"
                                >
                                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                    <h4 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
