// IRONPULSE ATHLETICS — site content data
// All copy is real, brand-specific content (no Lorem Ipsum).

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "New" | "Sale" | "Bestseller" | "Limited";
  blurb: string;
  description: string;
  materials: string;
  dimensions: string;
  care: string;
  origin: string;
  sku: string;
  inStock: boolean;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  itemCount: number;
  image: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorBio: string;
  image: string;
};

const IMG = {
  menHero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80",
  womenHero: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=1600&q=80",
  // Men's products
  apexTee: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  forgeHoodie: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  // Women's products
  sculptLeggings: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/20328b08b526.jpg",
  contourLeggings: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/8dd0846638e7.jpg",
  // Equipment
  hexDumbbell: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=800&q=80",
  dumbbellSet: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e68b8b9dbaf5.jpg",
  kettlebell: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
  // Accessories
  speedRope: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80",
  gripGloves: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
  transitDuffel: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800&q=80",
  emberRunner: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  // Categories
  menCat: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
  womenCat: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80",
  equipCat: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
  accCat: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
  saleCat: "https://images.unsplash.com/photo-1574680535051-304b4a4e4b45?auto=format&fit=crop&w=800&q=80",
  homeGymCat: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
  // Journal
  trainingGuide: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  gymMinutes: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80",
  fatLoss: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  // Brand
  about: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  brooklyn: "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80",
};

export const heroImages = {
  men: IMG.menHero,
  women: IMG.womenHero,
  equipment: IMG.equipCat,
};

export const aboutImage = IMG.brooklyn;

export const categories: Category[] = [
  {
    slug: "men",
    name: "Men",
    tagline: "Tees, shorts and layers engineered for lifters",
    description:
      "Heavyweight cottons, honest fits, zero distractions. Built for the first set and the last — gear that works as hard as the rep you're grinding through. Designed in Brooklyn, tested on gym floors since 2018.",
    itemCount: 64,
    image: IMG.menCat,
  },
  {
    slug: "women",
    name: "Women",
    tagline: "Seamless support that never quits mid-set",
    description:
      "Squats, sprints and stretches — in colors that refuse to fade into the background. High-rise waistbands that stay put, fabrics that breathe, and fits that move with you through every set.",
    itemCount: 58,
    image: IMG.womenCat,
  },
  {
    slug: "equipment",
    name: "Equipment",
    tagline: "Dumbbells, kettlebells and rack-grade iron",
    description:
      "Cast iron, hex-shaped heads, knurled handles. Built for the home gym and the commercial rack — engineered to be dropped, dropped again, and still be there for the next rep.",
    itemCount: 47,
    image: IMG.equipCat,
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "Gloves, belts, shakers, bags and ropes",
    description:
      "The small things that make the big things work. Lifting straps that grip, belts that brace, shakers that don't leak, bags that haul your kit across the borough and back.",
    itemCount: 39,
    image: IMG.accCat,
  },
  {
    slug: "sale",
    name: "Sale",
    tagline: "Up to 40% off — while the clock runs",
    description:
      "Last-chance gear at clearance prices. When the timer hits zero, prices return to full. No rainchecks, no extensions — just the kit you've been waiting on, at the price you've been waiting for.",
    itemCount: 24,
    image: IMG.saleCat,
  },
  {
    slug: "home-gym",
    name: "Home Gym Setup",
    tagline: "Build the rack you've been dreaming of",
    description:
      "Bundles, racks, benches and plates — everything you need to turn the spare bedroom into the gym that's actually open when you are. Free shipping on home gym orders over $500.",
    itemCount: 18,
    image: IMG.homeGymCat,
  },
];

function makeProduct(p: Omit<Product, "slug" | "categorySlug">): Product {
  return {
    ...p,
    slug: p.id,
    categorySlug: categories.find((c) => c.name === p.category)?.slug ?? "shop",
  };
}

export const allProducts: Product[] = [
  makeProduct({
    id: "apex-oversized-tee",
    name: "Apex Oversized Training Tee",
    category: "Men",
    price: 42,
    compareAtPrice: 56,
    rating: 4.8,
    reviews: 412,
    image: IMG.apexTee,
    badge: "Sale",
    blurb: "Heavyweight 240gsm cotton. Boxed shoulders. Built to layer.",
    description:
      "A heavyweight 240gsm cotton tee with an oversized, dropped-shoulder fit engineered for lifters. Boxed shoulders give you room to move through overhead presses, and the longer back hem stays tucked through cleans and squats. Pre-shrunk, garment-dyed, and built to outlast the season.",
    materials: "100% combed ring-spun cotton, 240 gsm",
    dimensions: "Oversized fit. Size down for a regular fit. Body length 28 in (size M).",
    care: "Machine wash cold, tumble dry low. Pre-shrunk — minimal shrinkage.",
    origin: "Cut and sewn in Los Angeles, CA",
    sku: "IPA-MEN-001",
    inStock: true,
  }),
  makeProduct({
    id: "forge-pullover-hoodie",
    name: "Forge Pullover Hoodie",
    category: "Men",
    price: 78,
    rating: 4.9,
    reviews: 287,
    image: IMG.forgeHoodie,
    badge: "Bestseller",
    blurb: "Heavyweight French terry. Kangaroo pocket. For the walk to the gym and back.",
    description:
      "A 450gsm French terry pullover hoodie built heavy on purpose. The kangaroo pocket holds your phone and keys, the hood stays up when you want it to, and the ribbed cuffs and hem hold their shape wash after wash. Lined hood, drawcord with metal tips. This is the hoodie you reach for at 5am.",
    materials: "100% cotton French terry, 450 gsm. Metal-tipped drawcord.",
    dimensions: "Regular fit. Body length 27 in (size M).",
    care: "Machine wash cold inside out, tumble dry low.",
    origin: "Cut and sewn in Los Angeles, CA",
    sku: "IPA-MEN-002",
    inStock: true,
  }),
  makeProduct({
    id: "sculpt-seamless-leggings",
    name: "Sculpt Seamless Leggings",
    category: "Women",
    price: 68,
    rating: 4.8,
    reviews: 521,
    image: IMG.sculptLeggings,
    badge: "Bestseller",
    blurb: "7/8 length. High-rise waistband. Squat-proof, second-skin compression.",
    description:
      "7/8 length seamless leggings with a contoured high-rise waistband that stays put through squats, sprints and stretches. The seamless knit construction eliminates chafe points, and the compression-grade fabric holds you in without restricting movement. Squat-proof, sweat-wicking, built for the hardest session of the week.",
    materials: "62% nylon, 38% elastane. Seamless knit. Moisture-wicking finish.",
    dimensions: "7/8 length. Inseam 25 in (size S). High-rise waist.",
    care: "Machine wash cold, hang dry. Do not bleach or iron.",
    origin: "Knitted in Turkey",
    sku: "IPA-WMN-003",
    inStock: true,
  }),
  makeProduct({
    id: "contour-high-rise-leggings",
    name: "Contour High-Rise Leggings",
    category: "Women",
    price: 72,
    compareAtPrice: 88,
    rating: 4.7,
    reviews: 198,
    image: IMG.contourLeggings,
    badge: "Sale",
    blurb: "Full length. Contoured seams for shape. Side pocket for your phone.",
    description:
      "Full-length leggings with contoured seam lines that hug your shape and a 25-inch inseam that hits right at the ankle. The high-rise waistband has a hidden interior pocket for a key or card, and there's a side phone pocket on the right thigh. Built from a four-way stretch compression fabric that holds up through years of training.",
    materials: "75% polyester, 25% elastane. Four-way stretch. Sweat-wicking.",
    dimensions: "Full length. Inseam 25 in (size S). High-rise waist.",
    care: "Machine wash cold, hang dry.",
    origin: "Knitted in Turkey",
    sku: "IPA-WMN-004",
    inStock: true,
  }),
  makeProduct({
    id: "hex-dumbbell-pair-8kg",
    name: "Hex Dumbbell Pair — 8 kg",
    category: "Equipment",
    price: 124,
    rating: 4.9,
    reviews: 184,
    image: IMG.hexDumbbell,
    badge: "Bestseller",
    blurb: "Cast iron, hex heads, knurled handles. Sold as a pair.",
    description:
      "A pair of 8 kg cast iron dumbbells with hex-shaped heads that won't roll away between sets. The handles are deeply knurled for a positive grip — even with chalked hands — and the entire dumbbell is finished in a matte black powder coat that resists rust and scratches. Built to be dropped on rubber flooring, not on each other.",
    materials: "Solid cast iron, matte black powder coat finish",
    dimensions: "8 kg each (16 kg pair). Handle 32 mm diameter. Head 18 cm long.",
    care: "Wipe down with a dry cloth. Store on a rack or rubber mat. Avoid dropping on concrete.",
    origin: "Cast in Pennsylvania, USA",
    sku: "IPA-EQP-005",
    inStock: true,
  }),
  makeProduct({
    id: "pro-hex-dumbbell-set",
    name: "Pro Hex Dumbbell Set — 2–12 kg",
    category: "Equipment",
    price: 685,
    compareAtPrice: 820,
    rating: 4.8,
    reviews: 73,
    image: IMG.dumbbellSet,
    badge: "Sale",
    blurb: "Six pairs (2, 4, 6, 8, 10, 12 kg). Vertical rack included.",
    description:
      "A complete home-gym dumbbell set: six hex pairs from 2 kg up to 12 kg, with a compact vertical storage rack included. The rack is powder-coated steel with a small footprint (60×60 cm), and each dumbbell is solid cast iron with knurled handles. The set ships in three boxes; rack assembles in 15 minutes with the included hardware.",
    materials: "Cast iron dumbbells, powder-coated steel rack",
    dimensions: "Six pairs: 2, 4, 6, 8, 10, 12 kg. Rack 60×60×80 cm.",
    care: "Wipe down with a dry cloth. Rack: tighten bolts annually.",
    origin: "Cast in Pennsylvania, USA",
    sku: "IPA-EQP-006",
    inStock: true,
  }),
  makeProduct({
    id: "core-kettlebell-12kg",
    name: "Core Cast-Iron Kettlebell — 12 kg",
    category: "Equipment",
    price: 89,
    rating: 4.9,
    reviews: 256,
    image: IMG.kettlebell,
    badge: "Bestseller",
    blurb: "Single-cast iron. Wide handle. Color-coded by weight.",
    description:
      "A 12 kg single-cast iron kettlebell with a wide, smooth handle that accommodates two-handed swings. The flat base is stable for renegade rows and floor presses. The handle is finished smooth (no burrs) and the entire bell is powder-coated for grip and rust resistance. Color-coded ring on the handle indicates weight class.",
    materials: "Single-cast iron, powder-coat finish",
    dimensions: "12 kg. Handle 35 mm diameter. Overall height 28 cm.",
    care: "Wipe down with a dry cloth. Re-coat handle with chalk as needed.",
    origin: "Cast in Pennsylvania, USA",
    sku: "IPA-EQP-007",
    inStock: true,
  }),
  makeProduct({
    id: "speed-rope-x",
    name: "Speed Rope X",
    category: "Accessories",
    price: 24,
    rating: 4.7,
    reviews: 312,
    image: IMG.speedRope,
    blurb: "Ball-bearing handles. Adjustable cable. For double-unders and triple-unders.",
    description:
      "A speed jump rope with ball-bearing handles for friction-free rotation. The 2.5mm coated steel cable is adjustable from 9 to 10 feet. Handles are knurled aluminum with a foam grip. Hits double-unders on day one and triples once you've put in the work. Includes a carrying pouch and spare cable.",
    materials: "Aluminum handles, coated steel cable, ball bearings",
    dimensions: "Cable 2.75 m (adjustable). Handle length 16 cm.",
    care: "Wipe cable with a dry cloth. Avoid using on concrete — use on rubber or wood flooring.",
    origin: "Assembled in Brooklyn, NY",
    sku: "IPA-ACC-008",
    inStock: true,
  }),
  makeProduct({
    id: "grip-training-gloves",
    name: "Grip Training Gloves",
    category: "Accessories",
    price: 36,
    rating: 4.6,
    reviews: 189,
    image: IMG.gripGloves,
    blurb: "Full-finger. Silicon palm. Built for heavy pulls and rope climbs.",
    description:
      "Full-finger training gloves with a silicon-printed palm for grip on barbells, dumbbells, pull-up bars and ropes. The back is a breathable mesh that keeps your hands cool through heavy sessions. Reinforced thumb saddle and a pull-tab for easy removal. Machine washable.",
    materials: "Goatskin leather palm, breathable mesh back, silicon print",
    dimensions: "Sizes XS–XL. Measure around knuckles for size.",
    care: "Machine wash cold, hang dry. Air out between sessions.",
    origin: "Made in Pakistan",
    sku: "IPA-ACC-009",
    inStock: true,
  }),
  makeProduct({
    id: "transit-duffel-35l",
    name: "Transit Duffel — 35 L",
    category: "Accessories",
    price: 88,
    rating: 4.8,
    reviews: 156,
    image: IMG.transitDuffel,
    badge: "New",
    blurb: "35L capacity. Shoe compartment. Laptop sleeve. Built for the commute.",
    description:
      "A 35-liter duffel built for the gym-to-office commute. Separate ventilated shoe compartment fits up to size 13. Padded laptop sleeve fits up to 15 inches. Water-resistant 900D polyester exterior, with a removable shoulder strap and padded handles. Built to live in the back of your car or on your shoulder.",
    materials: "900D water-resistant polyester, YKK zippers, padded shoulder strap",
    dimensions: "35 L capacity. 55 × 28 × 28 cm.",
    care: "Spot clean with damp cloth. Air dry. Do not machine wash.",
    origin: "Designed in Brooklyn, NY. Manufactured in Vietnam.",
    sku: "IPA-ACC-010",
    inStock: true,
  }),
  makeProduct({
    id: "ember-runner",
    name: "Ember Runner",
    category: "Men",
    price: 132,
    rating: 4.7,
    reviews: 89,
    image: IMG.emberRunner,
    badge: "New",
    blurb: "Road-to-trail hybrid. 8mm drop. Recycled-knit upper.",
    description:
      "A road-to-trail hybrid running shoe with an 8mm drop and a recycled-knit upper that breathes through hot miles. The outsole is a grippy 4mm lug pattern that handles packed dirt and pavement equally well. Rock plate in the midfoot protects against stones on technical terrain. Weighs 9.2 oz (men's size 9).",
    materials: "Recycled-knit upper, EVA midsole, rubber outsole",
    dimensions: "8mm drop. Weights 9.2 oz (US M9). Sizes 7–13.",
    care: "Hand wash with cold water. Air dry away from direct heat.",
    origin: "Manufactured in Vietnam",
    sku: "IPA-MEN-011",
    inStock: true,
  }),
];

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return allProducts
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, count);
}

export const staffPicks = allProducts.filter((p) =>
  [
    "apex-oversized-tee",
    "forge-pullover-hoodie",
    "sculpt-seamless-leggings",
    "contour-high-rise-leggings",
    "hex-dumbbell-pair-8kg",
    "pro-hex-dumbbell-set",
    "core-kettlebell-12kg",
    "speed-rope-x",
    "grip-training-gloves",
    "transit-duffel-35l",
    "ember-runner",
  ].includes(p.id)
);

export const onSaleProducts = allProducts.filter((p) => p.compareAtPrice);

export const blogPosts: BlogPost[] = [
  {
    id: "train-effectively-quality-beats-quantity",
    slug: "train-effectively-quality-beats-quantity",
    title: "How to Train Effectively: Quality Beats Quantity",
    excerpt:
      "Two focused hours beat four distracted ones, every time. Here's the framework our coaches use to make every session count — from warm-up to walk-out.",
    category: "Training",
    date: "March 14, 2026",
    readTime: "8 min read",
    author: "Marcus Hale",
    authorBio:
      "Marcus is IRONPULSE's head strength coach. He's trained everyone from first-time lifters to nationally ranked powerlifters over 15 years on the platform.",
    image: IMG.trainingGuide,
    body: [
      "Most people train too long and recover too little. The result is a workout that looks like two hours of effort but delivers about thirty minutes of actual stimulus. If you want to get stronger, leaner, or more conditioned — you have to make every minute of every session count. That means fewer exercises done harder, not more exercises done easier.",
      "The framework is simple: warm up specifically, hit your primary lift heavy, do one or two accessory movements, finish with conditioning if you have anything left. Total time under the bar: 45 to 60 minutes. Total time in the gym including warm-up and mobility: 75 to 90 minutes. If you're going past 90 minutes regularly, you're resting too long, talking too much, or doing too many exercises.",
      "Specific warm-up means warming up the movement you're about to train. If you're squatting, warm up with the empty bar, then add weight in 10-20% jumps until you hit your working weight. Static stretching before lifting has been shown to reduce force production — save it for after the session.",
      "Primary lift is the centerpiece. One heavy compound movement per session: squat, deadlift, press, or row. Five working sets of three to five reps. If you can't add weight every week or two, you're not recovering enough — eat more, sleep more, train less.",
      "Accessory work supports the primary lift. Two or three movements, three sets of eight to twelve reps. If you squatted, you might do split squats, RDLs, and hanging leg raises. If you benched, you might do close-grip incline presses, pull-ups, and lateral raises. Each accessory should make the primary lift stronger next week.",
      "Conditioning at the end if you have anything left. Ten minutes, hard. Sled pushes, rowing intervals, assault bike. This is where you build the engine that lets you train harder next session. If you're gassed after the accessory work, skip conditioning and walk out. Recovery is also training.",
    ],
  },
  {
    id: "how-many-minutes-in-the-gym-actually-enough",
    slug: "how-many-minutes-in-the-gym-actually-enough",
    title: "How Many Minutes in the Gym Are Actually Enough?",
    excerpt:
      "Less than you think. The research is clear — for most people, three 45-minute sessions a week beats five 90-minute ones. Here's why.",
    category: "Training",
    date: "March 7, 2026",
    readTime: "6 min read",
    author: "Marcus Hale",
    authorBio:
      "Marcus is IRONPULSE's head strength coach. He's trained everyone from first-time lifters to nationally ranked powerlifters over 15 years on the platform.",
    image: IMG.gymMinutes,
    body: [
      "There's a sweet spot for training volume. Below it, you don't stimulate adaptation. Above it, you accumulate fatigue faster than you can recover from it. Most people who think they're undertraining are actually overtraining — they just don't realize it because they're not seeing results.",
      "For strength, the sweet spot is around 10 to 20 working sets per muscle group per week, distributed across 2 to 4 sessions. For most lifters, that's three sessions of 45 to 60 minutes each. Adding a fourth session doesn't help if your recovery can't keep up.",
      "For cardiovascular fitness, the World Health Organization recommends 150 minutes of moderate or 75 minutes of vigorous activity per week. That's three 25-minute hard intervals or five 30-minute easy runs. You don't need to live on the treadmill — you need to be consistent.",
      "The progression that works for most people: start with three 45-minute strength sessions per week. Add one 20-minute conditioning session after two weeks. Add a fifth session only if you've been training consistently for six months and your recovery is dialed in — sleep, protein, stress management.",
      "What kills progress isn't lack of training time — it's lack of consistency. Three sessions a week for a year beats six sessions a week for two months, every time. If you can't see yourself training for the next twelve months at the volume you're training now, you're training too much.",
      "Bottom line: 45 to 60 minutes, three times a week, with progressive overload and decent recovery, is enough to transform your body composition and strength. Anything more is a choice, not a necessity.",
    ],
  },
  {
    id: "eating-for-fat-loss-science-backed-guide-for-women",
    slug: "eating-for-fat-loss-science-backed-guide-for-women",
    title: "Eating for Fat Loss: A Science-Backed Guide for Women",
    excerpt:
      "Cutting calories without losing muscle is the whole game. Here's how to set protein, manage hunger, and avoid the rebound that undoes six months of progress in six weeks.",
    category: "Nutrition",
    date: "February 28, 2026",
    readTime: "10 min read",
    author: "Dr. Lena Okafor",
    authorBio:
      "Dr. Okafor is a registered dietitian and IRONPULSE's nutrition advisor. She specializes in body composition and women's health, and has worked with everyone from new moms to elite endurance athletes.",
    image: IMG.fatLoss,
    body: [
      "Fat loss comes down to a sustained calorie deficit. Not a fad, not a cleanse, not a 30-day challenge — a small, sustainable calorie deficit maintained over months. The science is unambiguous: if you consume fewer calories than you expend, you lose weight. The art is doing that without losing muscle,without rebounding, and without making yourself miserable.",
      "Step one: set protein. Aim for 1.6 to 2.2 grams of protein per kilogram of body weight per day. For a 70 kg woman, that's 112 to 154 grams of protein daily. Protein is the most satiating macronutrient, it preserves lean mass during a deficit, and it has the highest thermic effect of food (you burn more calories digesting it).",
      "Step two: set the deficit. A deficit of 300 to 500 calories per day produces 0.3 to 0.5 kg of fat loss per week — fast enough to see progress, slow enough to preserve muscle and avoid metabolic adaptation. Crash diets with 1000+ calorie deficits work in the short term and fail in the long term.",
      "Step three: manage hunger. High-volume, low-calorie foods are your friend. Vegetables, fruit, lean protein, broth-based soups. Ultra-processed foods are engineered to be overconsumed — they don't trigger satiety the way whole foods do. Cooking at home is the single biggest lever for most people.",
      "Step four: lift. Resistance training during a deficit is what tells your body to keep muscle and burn fat. Without it, you'll lose both. Three sessions a week of heavy compound lifts is enough. Cardio helps with the deficit but doesn't replace the muscle-preserving signal of lifting.",
      "Step five: plan the rebound. The deficit ends, eventually. The mistake most people make is going straight from deficit to maintenance or surplus overnight. Reverse diet: add 100 calories per week back in until you reach maintenance. This gives your metabolism time to adjust and prevents the rapid regain that undoes six months of progress in six weeks.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  return blogPosts.filter((p) => p.id !== post.id).slice(0, count);
}

export const navCategories = [
  {
    label: "All Products",
    href: "/shop",
    children: categories.map((c) => ({ label: c.name, href: `/shop/${c.slug}`, note: c.tagline })),
  },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const faqs = [
  {
    category: "Orders & Shipping",
    items: [
      { q: "How long does shipping take?", a: "Standard shipping is 3–5 business days within the US. Orders placed before 2pm ET ship the same business day from Brooklyn. Expedited options (1–2 day) are available at checkout." },
      { q: "Do you offer free shipping?", a: "Yes — free standard shipping on orders over $75 within the contiguous US. Orders under $75 ship for a flat $7.95. Home gym equipment orders over $500 ship free, including freight." },
      { q: "Do you ship internationally?", a: "We ship to over 40 countries with duties and taxes calculated at checkout. International orders typically arrive in 7–14 business days." },
      { q: "How do I track my order?", a: "You'll get a tracking number by email within 24 hours of your order shipping. You can also log in to your account to track current and past orders." },
    ],
  },
  {
    category: "Returns & Exchanges",
    items: [
      { q: "What's your return policy?", a: "30-day returns on unworn apparel and unused accessories, with original tags and packaging. Equipment returns must be uncrated and unused. Free return shipping on US orders over $75." },
      { q: "How do I start a return?", a: "Log in to your account, find the order, and click 'Start a return.' Or email returns@ironpulseathletics.com with your order number. We'll send a prepaid return label within one business day." },
      { q: "Can I exchange for a different size?", a: "Yes — exchanges are free. Start an exchange the same way as a return, select the size you want, and we'll ship it as soon as we receive your return." },
      { q: "What if my item arrived damaged?", a: "Take a photo and email returns@ironpulseathletics.com within 7 days of delivery. We'll send a replacement immediately — no need to wait for the return." },
    ],
  },
  {
    category: "Products & Sizing",
    items: [
      { q: "How do your shirts fit?", a: "Our Apex tees are oversized — size down for a regular fit. Forge hoodies are regular fit. Check the size chart on each product page for measurements, and reach out to chat if you're between sizes." },
      { q: "Are your leggings squat-proof?", a: "Yes — every legging we sell is tested for squat-proofness in our Brooklyn studio before it goes into production. If you ever have an issue, email us and we'll make it right." },
      { q: "What weight dumbbell should I start with?", a: "For most beginners, a pair of 4–8 kg dumbbells is a good starting point. Our Pro Hex Set (2–12 kg) covers most home gym needs for years. Email chat for personalized recommendations." },
      { q: "Do you offer warranties?", a: "Apparel: 1-year warranty against manufacturing defects. Equipment: lifetime warranty against manufacturing defects on cast iron. Returns within 30 days for any reason." },
    ],
  },
  {
    category: "Training & Support",
    items: [
      { q: "Do you offer training programs?", a: "We publish free training programs on the Journal. For personalized programming, our coaches offer 1:1 consults — email training@ironpulseathletics.com for details." },
      { q: "Can I visit your Brooklyn showroom?", a: "Yes — our Brooklyn showroom at 18 Furnace Street is open Tue–Sat, 10am–6pm ET. Most of the catalog is on display. Drop in." },
      { q: "Do you offer a trade discount?", a: "Yes — personal trainers, gym owners, and hospitality buyers qualify for 15–25% off. Apply via the contact form with your credentials." },
      { q: "How do I become a wholesale partner?", a: "We work with select independent retailers. Email wholesale@ironpulseathletics.com with your store details and current brand list. We respond within two weeks." },
    ],
  },
];
