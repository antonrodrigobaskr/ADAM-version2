"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
    getArticleDetail,
    getRelatedArticles,
    BLOG_ARTICLES,
    type ArticleContentBlock,
} from "@/lib/blog-data";
import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import { Button } from "@/components/ui/button";

// ── Content Block Renderers ──────────────────────────────────

function ParagraphBlock({ text }: { text: string }) {
    return (
        <p className="text-[16px] md:text-[17px] leading-[1.8] text-gray-600 mb-6">
            {text}
        </p>
    );
}

function HeadingBlock({
    level,
    text,
    id,
}: {
    level: 2 | 3;
    text: string;
    id: string;
}) {
    if (level === 2) {
        return (
            <h2
                id={id}
                className="text-[22px] md:text-[26px] font-bold text-black mt-12 mb-5 scroll-mt-28"
            >
                {text}
            </h2>
        );
    }
    return (
        <h3
            id={id}
            className="text-[18px] md:text-[20px] font-semibold text-black mt-9 mb-4 scroll-mt-28"
        >
            {text}
        </h3>
    );
}

function ImageBlock({
    src,
    alt,
    caption,
}: {
    src: string;
    alt: string;
    caption?: string;
}) {
    return (
        <figure className="my-10">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 680px"
                />
            </div>
            {caption && (
                <figcaption className="text-sm text-gray-400 mt-3 text-center">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}

function ProductCtaBlock({
    title,
    description,
    image,
    price,
    href,
    label,
}: {
    title: string;
    description: string;
    image: string;
    price: string;
    href: string;
    label: string;
}) {
    return (
        <div className="my-10 border border-gray-200 rounded-2xl overflow-hidden bg-[#FAFAFA]">
            <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-40 md:w-48 aspect-square sm:aspect-auto flex-shrink-0 bg-gray-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="200px"
                    />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-between gap-3">
                    <div>
                        <h4 className="font-bold text-black text-base mb-1.5">
                            {title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 mt-2">
                        <span className="font-bold text-black">{price}</span>
                        <Link href={href}>
                            <Button
                                variant="default"
                                className="bg-black hover:bg-gray-900 text-white rounded-full px-6 h-10 text-sm font-semibold"
                            >
                                {label}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductBannerBlock({
    title,
    subtitle,
    image,
    href,
    label,
}: {
    title: string;
    subtitle: string;
    image: string;
    href: string;
    label: string;
}) {
    return (
        <div className="my-12 -mx-4 md:mx-0 md:rounded-2xl overflow-hidden bg-black text-white">
            <div className="flex flex-col md:flex-row">
                <div className="p-8 md:p-10 flex flex-col justify-center gap-4 flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                        {title}
                    </h3>
                    <p className="text-white/60 text-sm md:text-base leading-relaxed">
                        {subtitle}
                    </p>
                    <Link href={href}>
                        <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 h-12 font-bold text-sm mt-2 w-fit">
                            {label}
                        </Button>
                    </Link>
                </div>
                <div className="relative w-full md:w-64 lg:w-72 aspect-square md:aspect-auto flex-shrink-0">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 288px"
                    />
                </div>
            </div>
        </div>
    );
}

function ListBlock({
    items,
    ordered,
}: {
    items: string[];
    ordered?: boolean;
}) {
    const Tag = ordered ? "ol" : "ul";
    return (
        <Tag
            className={`my-6 space-y-3 pl-6 ${ordered ? "list-decimal" : "list-disc"} marker:text-gray-400`}
        >
            {items.map((item, i) => (
                <li
                    key={i}
                    className="text-[16px] md:text-[17px] leading-[1.8] text-gray-600 pl-1"
                >
                    {item}
                </li>
            ))}
        </Tag>
    );
}

function QuoteBlock({ text, author }: { text: string; author?: string }) {
    return (
        <blockquote className="my-10 border-l-[3px] border-black pl-6 py-1">
            <p className="text-[17px] md:text-[19px] font-medium text-gray-800 italic leading-relaxed">
                &ldquo;{text}&rdquo;
            </p>
            {author && (
                <cite className="text-sm text-gray-400 mt-3 block not-italic">
                    — {author}
                </cite>
            )}
        </blockquote>
    );
}

function DividerBlock() {
    return <hr className="my-12 border-gray-200" />;
}

// ── Heading ID helper ────────────────────────────────────────

function toId(text: string) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

// ── Content Renderer ─────────────────────────────────────────

function renderBlock(block: ArticleContentBlock, index: number) {
    switch (block.type) {
        case "paragraph":
            return <ParagraphBlock key={index} text={block.text} />;
        case "heading":
            return (
                <HeadingBlock
                    key={index}
                    level={block.level}
                    text={block.text}
                    id={toId(block.text)}
                />
            );
        case "image":
            return (
                <ImageBlock
                    key={index}
                    src={block.src}
                    alt={block.alt}
                    caption={block.caption}
                />
            );
        case "product-cta":
            return (
                <ProductCtaBlock
                    key={index}
                    title={block.title}
                    description={block.description}
                    image={block.image}
                    price={block.price}
                    href={block.href}
                    label={block.label}
                />
            );
        case "product-banner":
            return (
                <ProductBannerBlock
                    key={index}
                    title={block.title}
                    subtitle={block.subtitle}
                    image={block.image}
                    href={block.href}
                    label={block.label}
                />
            );
        case "list":
            return (
                <ListBlock
                    key={index}
                    items={block.items}
                    ordered={block.ordered}
                />
            );
        case "quote":
            return (
                <QuoteBlock
                    key={index}
                    text={block.text}
                    author={block.author}
                />
            );
        case "divider":
            return <DividerBlock key={index} />;
        default:
            return null;
    }
}

// ── Table of Contents Sidebar ────────────────────────────────

function TableOfContents({
    headings,
}: {
    headings: { id: string; text: string; level: 2 | 3 }[];
}) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the heading closest to the top that is visible
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top
                    );
                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: "-100px 0px -70% 0px", threshold: 0.1 }
        );

        headings.forEach((h) => {
            const el = document.getElementById(h.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [headings]);

    return (
        <nav className="space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-3">
                In this article
            </p>
            {headings.map((h) => (
                <a
                    key={h.id}
                    href={`#${h.id}`}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(h.id)?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }}
                    className={`block text-[13px] leading-snug py-1.5 transition-colors duration-150 border-l-2 ${h.level === 3 ? "pl-5" : "pl-3"
                        } ${activeId === h.id
                            ? "border-black text-black font-medium"
                            : "border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300"
                        }`}
                >
                    {h.text}
                </a>
            ))}
        </nav>
    );
}

// ── Main Page Component ──────────────────────────────────────

export default function BlogArticlePage() {
    const params = useParams();
    const slug = params.slug as string;

    const article = getArticleDetail(slug);
    const related = article
        ? getRelatedArticles(slug, article.category)
        : BLOG_ARTICLES.slice(0, 4);

    // Extract headings for TOC
    const headings = useMemo(() => {
        if (!article) return [];
        return article.content
            .filter(
                (b): b is { type: "heading"; level: 2 | 3; text: string } =>
                    b.type === "heading"
            )
            .map((b) => ({
                id: toId(b.text),
                text: b.text,
                level: b.level,
            }));
    }, [article]);

    if (!article) {
        // Fallback for slugs without a detail entry
        const basicArticle = BLOG_ARTICLES.find((a) => a.slug === slug);
        return (
            <div className="min-h-screen bg-white pt-24 md:pt-32">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                        <Link
                            href="/blog"
                            className="hover:text-black transition-colors flex items-center gap-1"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Blog
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-gray-400 truncate">
                            {basicArticle?.title || "Article"}
                        </span>
                    </nav>

                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                        {basicArticle?.title || "Article Not Found"}
                    </h1>

                    {basicArticle && (
                        <>
                            <div className="flex items-center gap-3 text-sm text-gray-400 mb-10">
                                <span className="text-black font-medium">
                                    {basicArticle.author}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                <span>{basicArticle.date}</span>
                                <span className="w-1 h-1 rounded-full bg-gray-300" />
                                <span>{basicArticle.readTime}</span>
                            </div>

                            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
                                <Image
                                    src={basicArticle.image}
                                    alt={basicArticle.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 680px"
                                    priority
                                />
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {basicArticle.excerpt}
                            </p>

                            <p className="text-gray-400 text-base leading-relaxed">
                                Full article content coming soon. Check back for
                                the complete guide.
                            </p>
                        </>
                    )}

                    {/* Related articles */}
                    <section className="mt-16 mb-16 border-t pt-12">
                        <h2 className="text-2xl font-bold mb-8">
                            More Articles
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {BLOG_ARTICLES.filter((a) => a.slug !== slug)
                                .slice(0, 4)
                                .map((a) => (
                                    <BlogArticleCard
                                        key={a.slug}
                                        article={a}
                                    />
                                ))}
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-white"
        >
            {/* ── Article Header (full width) ── */}
            <header className="pt-24 md:pt-32 pb-0 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-[1120px]">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link
                            href="/blog"
                            className="hover:text-black transition-colors flex items-center gap-1 text-gray-500"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" />
                            Blog
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="capitalize">
                            {article.category.replace("-", " ")}
                        </span>
                    </nav>

                    {/* Category pill */}
                    <span className="inline-block text-[11px] font-medium uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1 rounded-full mb-4">
                        {article.category.replace("-", " ")}
                    </span>

                    {/* Title */}
                    <h1 className="text-3xl md:text-[44px] md:leading-[1.15] font-bold text-black mb-4 max-w-3xl">
                        {article.title}
                    </h1>

                    {/* Excerpt */}
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-2xl">
                        {article.excerpt}
                    </p>

                    {/* Author / Metadata */}
                    <div className="pb-8 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            {/* Avatar */}
                            <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 flex-shrink-0">
                                {article.author
                                    .split(" ")
                                    .map((w) => w[0])
                                    .join("")
                                    .slice(0, 2)}
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold text-black leading-none mb-1">
                                    {article.author}
                                </p>
                                <p className="text-[12px] text-gray-400 leading-none">
                                    {article.date}
                                    <span className="mx-1.5">·</span>
                                    {article.readTime}
                                </p>
                            </div>
                        </div>
                        {article.reviewedBy && (
                            <div className="mt-3 ml-12">
                                <span className="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                                    Reviewed by {article.reviewedBy}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* ── Two-column layout: Article + Sticky Sidebar ── */}
            <div className="container mx-auto px-4 md:px-6 max-w-[1120px]">
                <div className="flex gap-12 lg:gap-16 relative">
                    {/* Main column */}
                    <div className="flex-1 min-w-0 max-w-3xl py-10">
                        {/* Hero Image */}
                        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10">
                            <Image
                                src={article.heroImage}
                                alt={article.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 720px"
                                priority
                            />
                        </div>

                        {/* Article content */}
                        <article>
                            {article.content.map((block, i) =>
                                renderBlock(block, i)
                            )}
                        </article>

                        {/* Back to Blog */}
                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-500 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to all articles
                            </Link>
                        </div>
                    </div>

                    {/* Sticky sidebar — desktop only */}
                    <aside className="hidden lg:block w-56 xl:w-64 flex-shrink-0">
                        <div className="sticky top-28 pt-10">
                            <TableOfContents headings={headings} />

                            {/* Sidebar CTA */}
                            <div className="mt-10 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-[13px] font-semibold text-black mb-1.5">
                                    Hair loss treatment
                                </p>
                                <p className="text-[12px] text-gray-400 leading-relaxed mb-4">
                                    Prescription-strength spray delivered to
                                    your door.
                                </p>
                                <Link href="/products/hair-regrowth-spray">
                                    <Button className="w-full bg-black hover:bg-gray-900 text-white rounded-full h-9 text-[12px] font-semibold">
                                        Shop Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* ── Related Articles ── */}
            <section className="border-t border-gray-100 bg-[#FAFAFA]">
                <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8">
                        Related Articles
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {related.map((a) => (
                            <BlogArticleCard key={a.slug} article={a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Sticky Mobile CTA ── */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-gray-200 z-40 md:hidden">
                <Link href="/products/hair-regrowth-spray">
                    <Button className="w-full bg-black hover:bg-gray-900 text-white rounded-full h-12 font-bold text-sm relative overflow-hidden">
                        <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full" />
                        <span className="relative z-20">
                            Start Free Consultation
                        </span>
                    </Button>
                </Link>
            </div>
        </motion.div>
    );
}
