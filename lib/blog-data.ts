// ============================================================
// Blog Mock Data — replace with Convex queries later
// ============================================================

export interface BlogArticle {
    slug: string;
    title: string;
    excerpt: string;
    category: BlogCategorySlug;
    image: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
}

export type BlogCategorySlug =
    | "hair-loss"
    | "sexual-health"
    | "lifestyle"
    | "news"
    | "skin-care"
    | "mental-health";

export interface BlogCategory {
    slug: BlogCategorySlug;
    label: string;
}

// ── Categories ──────────────────────────────────────────────
export const BLOG_CATEGORIES: BlogCategory[] = [
    { slug: "hair-loss", label: "Hair Loss" },
    { slug: "sexual-health", label: "Sexual Health" },
    { slug: "lifestyle", label: "Lifestyle" },
    { slug: "skin-care", label: "Skin Care" },
    { slug: "mental-health", label: "Mental Health" },
    { slug: "news", label: "News" },
];

// ── Condition Guide Sub-categories ──────────────────────────
export const CONDITION_CATEGORIES = [
    "Dry Skin",
    "Hormones & Testosterone",
    "Hair Thinning",
    "Erectile Dysfunction",
    "Sleep & Recovery",
    "Stress Management",
];

// ── Articles ────────────────────────────────────────────────
export const BLOG_ARTICLES: BlogArticle[] = [
    // FEATURED
    {
        slug: "how-long-does-minoxidil-take-to-work",
        title: "How Long Does Minoxidil Take to Work?",
        excerpt:
            "A detailed guide on what to expect when starting minoxidil treatment, including timelines, results, and tips for maximizing effectiveness.",
        category: "hair-loss",
        image: "https://images.unsplash.com/photo-1585747860019-8795dbcedcab?w=800&q=80",
        author: "Dr. Ruwan Silva",
        date: "Feb 18, 2026",
        readTime: "8 min read",
        featured: true,
    },
    {
        slug: "is-a-full-recovery-possible",
        title: "Is a Full Hair Recovery Possible? What Science Says",
        excerpt:
            "Current research on hair regrowth treatments and what full recovery really looks like for men experiencing pattern baldness.",
        category: "hair-loss",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
        author: "Dr. Kasun Perera",
        date: "Feb 15, 2026",
        readTime: "6 min read",
        featured: true,
    },

    // HAIR LOSS
    {
        slug: "finasteride-vs-minoxidil",
        title: "Finasteride vs Minoxidil: Which Treatment Is Right for You?",
        excerpt:
            "Comparing the two most popular hair loss treatments — their mechanisms, side effects, and how to choose.",
        category: "hair-loss",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
        author: "Dr. Ruwan Silva",
        date: "Feb 14, 2026",
        readTime: "7 min read",
    },
    {
        slug: "best-hair-loss-vitamins",
        title: "Best Vitamins & Supplements for Hair Loss Prevention",
        excerpt:
            "A breakdown of the vitamins and minerals that support hair growth and how to incorporate them.",
        category: "hair-loss",
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
        author: "Dr. Amali Fernando",
        date: "Feb 12, 2026",
        readTime: "5 min read",
    },
    {
        slug: "early-signs-of-hair-loss",
        title: "Early Signs of Hair Loss Every Man Should Know",
        excerpt:
            "Recognizing the early warning signs of male pattern baldness and when to start treatment.",
        category: "hair-loss",
        image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
        author: "Dr. Kasun Perera",
        date: "Feb 10, 2026",
        readTime: "4 min read",
    },
    {
        slug: "does-stress-cause-hair-loss",
        title: "Does Stress Really Cause Hair Loss? The Science Explained",
        excerpt:
            "Understanding telogen effluvium and how chronic stress impacts your hair growth cycle.",
        category: "hair-loss",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80",
        author: "Dr. Ruwan Silva",
        date: "Feb 8, 2026",
        readTime: "6 min read",
    },

    // SEXUAL HEALTH
    {
        slug: "understanding-ed-causes",
        title: "Understanding Erectile Dysfunction: Causes & Modern Treatments",
        excerpt:
            "A comprehensive look at what causes ED, who it affects, and the latest treatment approaches.",
        category: "sexual-health",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
        author: "Dr. Kasun Perera",
        date: "Feb 16, 2026",
        readTime: "9 min read",
    },
    {
        slug: "testosterone-and-mens-health",
        title: "Testosterone & Men's Health: What Every Man Should Know",
        excerpt:
            "How testosterone levels affect energy, mood, muscle mass, and sexual health — and when to get tested.",
        category: "sexual-health",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
        author: "Dr. Amali Fernando",
        date: "Feb 13, 2026",
        readTime: "7 min read",
    },
    {
        slug: "premature-ejaculation-guide",
        title: "A Complete Guide to Managing Premature Ejaculation",
        excerpt:
            "Evidence-based strategies and treatment options for men dealing with premature ejaculation.",
        category: "sexual-health",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
        author: "Dr. Ruwan Silva",
        date: "Feb 9, 2026",
        readTime: "8 min read",
    },

    // LIFESTYLE
    {
        slug: "morning-routine-for-men",
        title: "The Ultimate Morning Routine for Men's Health & Productivity",
        excerpt:
            "Science-backed habits to start your day right — from cold showers to protein-rich breakfasts.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        author: "Dr. Amali Fernando",
        date: "Feb 17, 2026",
        readTime: "6 min read",
    },
    {
        slug: "exercise-guide-for-hair-growth",
        title: "How Exercise Can Boost Hair Growth: A Complete Guide",
        excerpt:
            "The link between regular physical activity and healthier hair, plus the best exercises.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        author: "Dr. Kasun Perera",
        date: "Feb 11, 2026",
        readTime: "5 min read",
    },
    {
        slug: "sleep-and-hormone-health",
        title: "Sleep & Hormone Health: Why 7+ Hours Matters",
        excerpt:
            "How sleep quality directly impacts testosterone, cortisol, and overall men's wellness.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
        author: "Dr. Ruwan Silva",
        date: "Feb 7, 2026",
        readTime: "5 min read",
    },
    {
        slug: "nutrition-for-mens-wellness",
        title: "Nutrition Essentials: Foods That Fuel Men's Wellness",
        excerpt:
            "The best foods for hormonal balance, energy, skin, and hair — backed by science.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        author: "Dr. Amali Fernando",
        date: "Feb 5, 2026",
        readTime: "6 min read",
    },
    {
        slug: "cold-showers-benefits",
        title: "Cold Showers & Men's Health: Hype or Real Benefits?",
        excerpt:
            "Examining the claims around cold exposure therapy and what the research actually shows.",
        category: "lifestyle",
        image: "https://images.unsplash.com/photo-1540206395-68808572332f?w=800&q=80",
        author: "Dr. Kasun Perera",
        date: "Feb 3, 2026",
        readTime: "4 min read",
    },
    {
        slug: "mental-health-stigma-men",
        title: "Breaking the Stigma: Why Men Need to Talk About Mental Health",
        excerpt:
            "Addressing the mental health gap in men and the importance of seeking professional help.",
        category: "mental-health",
        image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80",
        author: "Dr. Ruwan Silva",
        date: "Feb 6, 2026",
        readTime: "7 min read",
    },

    // NEWS
    {
        slug: "telehealth-growth-sri-lanka",
        title: "Telehealth in Sri Lanka: Why More Men Are Going Digital",
        excerpt:
            "How the telehealth revolution is making men's healthcare more accessible in Sri Lanka.",
        category: "news",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        author: "ADAM Editorial",
        date: "Feb 19, 2026",
        readTime: "5 min read",
    },
    {
        slug: "fda-approves-new-hair-treatment",
        title: "New Breakthrough Treatment for Hair Loss Shows Promising Results",
        excerpt:
            "Recent clinical trials demonstrate a novel approach to hair regrowth with significantly higher efficacy.",
        category: "news",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
        author: "ADAM Editorial",
        date: "Feb 20, 2026",
        readTime: "4 min read",
    },
    {
        slug: "mens-health-awareness-month",
        title: "Men's Health Awareness: Initiatives Making a Difference",
        excerpt:
            "Spotlighting organizations and campaigns that are improving men's health outcomes globally.",
        category: "news",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
        author: "ADAM Editorial",
        date: "Feb 4, 2026",
        readTime: "5 min read",
    },
];

// ── Helper functions ────────────────────────────────────────
export function getFeaturedArticles(): BlogArticle[] {
    return BLOG_ARTICLES.filter((a) => a.featured);
}

export function getArticlesByCategory(
    category: BlogCategorySlug
): BlogArticle[] {
    return BLOG_ARTICLES.filter((a) => a.category === category);
}

export function getLatestArticles(count = 6): BlogArticle[] {
    return BLOG_ARTICLES.slice(0, count);
}

// ── Article Detail Types ────────────────────────────────────
export type ArticleContentBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; level: 2 | 3; text: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | {
        type: "product-cta";
        title: string;
        description: string;
        image: string;
        price: string;
        href: string;
        label: string;
    }
    | {
        type: "product-banner";
        title: string;
        subtitle: string;
        image: string;
        href: string;
        label: string;
    }
    | { type: "list"; items: string[]; ordered?: boolean }
    | { type: "quote"; text: string; author?: string }
    | { type: "divider" };

export interface BlogArticleDetail extends BlogArticle {
    heroImage: string;
    content: ArticleContentBlock[];
    reviewedBy?: string;
    lastUpdated?: string;
}

// ── Mock Article Detail ─────────────────────────────────────
export const ARTICLE_DETAILS: Record<string, BlogArticleDetail> = {
    "how-long-does-minoxidil-take-to-work": {
        slug: "how-long-does-minoxidil-take-to-work",
        title: "How Long Does Minoxidil Take to Work?",
        excerpt:
            "A detailed guide on what to expect when starting minoxidil treatment, including timelines, results, and tips for maximizing effectiveness.",
        category: "hair-loss",
        image: "https://images.unsplash.com/photo-1585747860019-8795dbcedcab?w=800&q=80",
        heroImage:
            "https://images.unsplash.com/photo-1585747860019-8795dbcedcab?w=1200&q=80",
        author: "Dr. Ruwan Silva",
        date: "Feb 18, 2026",
        readTime: "8 min read",
        featured: true,
        reviewedBy: "Dr. Kasun Perera, MD",
        lastUpdated: "Feb 20, 2026",
        content: [
            {
                type: "paragraph",
                text: "If you've recently started minoxidil or you're considering it, you're probably wondering: how long does minoxidil take to work? It's one of the most common questions we hear — and the answer depends on a few key factors.",
            },
            {
                type: "paragraph",
                text: "In this guide, we'll break down the expected timeline, explain what happens during each phase of treatment, and share tips to help you get the best possible results.",
            },
            {
                type: "heading",
                level: 2,
                text: "What is Minoxidil?",
            },
            {
                type: "paragraph",
                text: "Minoxidil is an FDA-approved topical treatment for hair loss. Originally developed as a blood pressure medication, it was found to stimulate hair growth as a side effect. Today, it's one of the most widely used treatments for androgenetic alopecia (male pattern baldness).",
            },
            {
                type: "paragraph",
                text: "It works by widening blood vessels in the scalp, increasing blood flow to hair follicles and extending the growth phase of the hair cycle. The result? Thicker, denser hair over time.",
            },
            {
                type: "product-cta",
                title: "Minoxidil 5% & Finasteride 0.25% Spray",
                description:
                    "Our prescription-strength 2-in-1 formula combines minoxidil and finasteride in a convenient topical spray for maximum results.",
                image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767485457/ADAM_18_sfh6y5.jpg",
                price: "Rs 5,960",
                href: "/products/hair-regrowth-spray",
                label: "Shop Hair Regrowth",
            },
            {
                type: "heading",
                level: 2,
                text: "The Minoxidil Timeline: What to Expect",
            },
            {
                type: "paragraph",
                text: "Every person responds differently to minoxidil, but here's a general timeline of what most men can expect:",
            },
            {
                type: "heading",
                level: 3,
                text: "Weeks 1–4: Initial Shedding Phase",
            },
            {
                type: "paragraph",
                text: "During the first few weeks, you may notice increased hair shedding. Don't panic — this is actually a positive sign. Minoxidil pushes old, weakened hairs out of the follicle to make room for new, healthier growth. This phase is temporary and typically lasts 2–4 weeks.",
            },
            {
                type: "heading",
                level: 3,
                text: "Months 2–3: Early Growth Begins",
            },
            {
                type: "paragraph",
                text: "Around the 2-month mark, you may start to notice fine, vellus hairs appearing in thinning areas. These are light, thin hairs that will gradually thicken over time. It's important to stay consistent with your application during this period.",
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
                alt: "Hair growth progress",
                caption:
                    "Early vellus hairs typically appear around months 2–3 of consistent minoxidil use.",
            },
            {
                type: "heading",
                level: 3,
                text: "Months 4–6: Visible Results",
            },
            {
                type: "paragraph",
                text: "By months 4 to 6, most men see noticeable improvements in hair density and coverage. The vellus hairs from earlier months begin to mature into thicker, terminal hairs. This is when the results really start to show.",
            },
            {
                type: "quote",
                text: "Most clinical studies show that minoxidil reaches peak effectiveness between 6–12 months of consistent, daily use.",
                author: "Journal of Dermatological Treatment",
            },
            {
                type: "heading",
                level: 3,
                text: "Months 6–12: Peak Results",
            },
            {
                type: "paragraph",
                text: "Between 6 and 12 months, you'll typically see the full benefits of minoxidil treatment. Hair will appear thicker, fuller, and healthier. Continue your routine to maintain these results — stopping treatment can lead to gradual reversal of gains.",
            },
            {
                type: "product-banner",
                title: "Ready to start your hair regrowth journey?",
                subtitle:
                    "Get a personalized prescription from an ADAM-certified doctor — delivered discreetly to your door.",
                image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767485457/ADAM_18_sfh6y5.jpg",
                href: "/products/hair-regrowth-spray",
                label: "Get Started — Free Consultation",
            },
            {
                type: "heading",
                level: 2,
                text: "Tips for Maximizing Your Results",
            },
            {
                type: "paragraph",
                text: "While minoxidil is highly effective on its own, there are several things you can do to improve your outcomes:",
            },
            {
                type: "list",
                items: [
                    "Apply consistently: Use minoxidil at the same time every day. Skipping applications reduces effectiveness.",
                    "Apply to a clean, dry scalp: This ensures optimal absorption of the active ingredients.",
                    "Be patient: Results take time. Don't stop treatment just because you don't see immediate results.",
                    "Consider combination therapy: Combining minoxidil with finasteride has been shown to produce significantly better results than either treatment alone.",
                    "Maintain a healthy lifestyle: Good nutrition, regular exercise, and stress management all support healthy hair growth.",
                ],
            },
            {
                type: "heading",
                level: 2,
                text: "Minoxidil vs. Finasteride: Should You Use Both?",
            },
            {
                type: "paragraph",
                text: "While minoxidil stimulates hair growth from the outside, finasteride works from the inside by blocking DHT — the hormone primarily responsible for male pattern baldness. Using both together creates a powerful combination that addresses hair loss from multiple angles.",
            },
            {
                type: "paragraph",
                text: "Studies have shown that men who use both minoxidil and finasteride together see significantly better results than those using either treatment alone. Our compounded spray combines both in a single, convenient formulation.",
            },
            {
                type: "product-cta",
                title: "Why Choose a Combination Treatment?",
                description:
                    "ADAM's compounded spray delivers both minoxidil (growth stimulation) and finasteride (DHT blocking) in one easy application. Clinically proven to be more effective than monotherapy.",
                image: "https://res.cloudinary.com/ddzotdvev/image/upload/v1767485457/ADAM_18_sfh6y5.jpg",
                price: "Rs 4,960/quarter",
                href: "/products/hair-regrowth-spray",
                label: "Learn More",
            },
            {
                type: "heading",
                level: 2,
                text: "Common Side Effects of Minoxidil",
            },
            {
                type: "paragraph",
                text: "Minoxidil is generally well-tolerated, but like any medication, it can cause side effects in some people. Common side effects include:",
            },
            {
                type: "list",
                items: [
                    "Scalp dryness or irritation",
                    "Temporary increased shedding (see above)",
                    "Unwanted facial hair growth (rare, usually from accidental transfer)",
                    "Dizziness or lightheadedness (uncommon)",
                ],
            },
            {
                type: "paragraph",
                text: "If you experience any persistent side effects, consult your healthcare provider. Most side effects are mild and resolve on their own.",
            },
            {
                type: "heading",
                level: 2,
                text: "The Bottom Line",
            },
            {
                type: "paragraph",
                text: "Minoxidil is a proven, effective treatment for hair loss — but it requires patience and consistency. Most men start seeing results between 2–4 months, with peak effectiveness at 6–12 months. For the best results, consider a combination approach with finasteride and maintain healthy lifestyle habits.",
            },
            {
                type: "paragraph",
                text: "Ready to take the first step? ADAM offers personalized treatment plans prescribed by licensed doctors, with discreet delivery to your door. Start your free consultation today.",
            },
            { type: "divider" },
            {
                type: "paragraph",
                text: "This article is for informational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before starting any new treatment.",
            },
        ],
    },
};

export function getArticleDetail(
    slug: string
): BlogArticleDetail | undefined {
    return ARTICLE_DETAILS[slug];
}

export function getRelatedArticles(
    currentSlug: string,
    category: BlogCategorySlug,
    count = 4
): BlogArticle[] {
    return BLOG_ARTICLES.filter(
        (a) => a.slug !== currentSlug && a.category === category
    ).slice(0, count);
}

