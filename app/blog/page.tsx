import { BlogHero } from "@/components/blog/BlogHero";
import { BlogLatestGrid } from "@/components/blog/BlogLatestGrid";
import { BlogConditionGuides } from "@/components/blog/BlogConditionGuides";
import { BlogLifestyleGuides } from "@/components/blog/BlogLifestyleGuides";
import { BlogNewsSection } from "@/components/blog/BlogNewsSection";

export const metadata = {
    title: "Good Health — ADAM Blog",
    description:
        "Evidence-based guides on men's health, wellness, and treatments — written by doctors.",
};

export default function BlogPage() {
    return (
        <div className="flex flex-col gap-0 bg-white">
            <BlogHero />
            <BlogLatestGrid />
            <BlogConditionGuides />
            <BlogLifestyleGuides />
            <BlogNewsSection />
        </div>
    );
}
