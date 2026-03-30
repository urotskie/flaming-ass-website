import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
export default function SmallBusinessEcommerceWebsite() {
  const products = [
    {
      id: 1,
      name: "Flaming Ass Carolina Repear Hotsauce",
      category: "HELLBREAKER",
      price: "₱350",
      image:
        "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=80",
      description: "Maximum pain. This isn’t food—it’s a challenge. One drop and your soul leaves your body. Only for hardcore chili heads.",
    },
    {
      id: 2,
      name: "Flaming Ass Habanero Hotsauce",
      category: "INFERNO",
      price: "₱350",
      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
      description: "Blazing heat that builds and doesn’t stop. Tears, sweat, and regret guaranteed.",
    },
    {
      id: 3,
      name: "Flaming Ass Pineapple Habanero Hotsauce",
      category: "BLAZING HOT",
      price: "₱350",
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
      description: "Strong kick with a steady burn. Hot enough to feel, but still enjoyable.",
    },
    {
      id: 4,
      name: "Flaming Ass Green Jalapeño Hotsauce",
      category: "MILD",
      price: "₱300",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      description: "Very light heat. Focus on flavor with just a hint of spice.",
    },
  ];

  const categories = ["All", "Original", "Garlic", "Smoky", "Extreme"];

  const features = [
    {
      title: "Mobile-friendly",
      text: "Designed to look clean on phones, tablets, and desktop screens.",
    },
    {
      title: "Easy to customize",
      text: "Replace the text, products, prices, and contact details with your own.",
    },
    {
      title: "Ready for small business",
      text: "Perfect for food, clothing, accessories, gadgets, beauty, or local products.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
  <img src={logo} className="absolute right-5 bottom-5 w-24 opacity-20" />
  <h1 className="text-xl font-black tracking-tight sm:text-2xl">
    FLAMING ASS
  </h1>
</div>
            <p className="text-xs text-zinc-400 sm:text-sm">Flavor up front. Fire in the backdoor.</p>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#shop" className="text-sm font-medium hover:text-zinc-300">Shop</a>
            <a href="#about" className="text-sm font-medium hover:text-zinc-300">About</a>
            <a href="#features" className="text-sm font-medium hover:text-zinc-300">Features</a>
            <a href="#contact" className="text-sm font-medium hover:text-zinc-300">Contact</a>
          </nav>

          <button className="rounded-2xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
            View Cart (0)
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full border border-orange-400/30 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                Simple spicy store
              </span>
              <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Simple, dark, and fiery design for your hot sauce brand.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg">
                This template is customized for your hot sauce brand. You can edit product names, prices, bottle photos, promos, and contact details anytime.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#shop"
                  className="rounded-2xl bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
                >
                  Shop Now
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-orange-400/30 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-zinc-800"
                >
                  Contact Us
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 rounded-3xl border border-orange-500/20 bg-zinc-900 p-5 shadow-sm">
                <div>
                  <p className="text-2xl font-black">100%</p>
                  <p className="text-sm text-zinc-400">Customizable</p>
                </div>
                <div>
                  <p className="text-2xl font-black">24/7</p>
                  <p className="text-sm text-zinc-400">Online presence</p>
                </div>
                <div>
                  <p className="text-2xl font-black">Free</p>
                  <p className="text-sm text-zinc-400">Starter code</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-4 shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom,rgba(251,146,60,0.18),transparent_45%)] before:pointer-events-none">
                <img
  src={banner}
  alt="Flaming Ass Hot Sauce"
  className="h-[420px] w-full rounded-[1.5rem] object-cover"
/>
              </div>
              <div className="absolute -bottom-6 -left-3 rounded-3xl border border-orange-500/20 bg-zinc-900/95 p-4 shadow-xl sm:left-6">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Featured</p>
                <p className="mt-1 text-lg font-bold">Fast, clean, and ready to edit</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-orange-500/20 bg-zinc-900 p-6 shadow-sm">
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Shop</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Featured Hot Sauces</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="rounded-full border border-orange-400/30 bg-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group overflow-hidden rounded-[2rem] border border-orange-500/20 bg-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                        {product.category}
                      </p>
                      <h4 className="mt-2 text-lg font-bold">{product.name}</h4>
                    </div>
                    <p className="text-lg font-black">{product.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{product.description}</p>
                  <button className="mt-5 w-full rounded-2xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-8 shadow-sm lg:grid-cols-[1.2fr_0.8fr] lg:p-10 relative overflow-hidden before:absolute before:top-0 before:right-0 before:h-40 before:w-40 before:bg-[radial-gradient(circle,rgba(251,146,60,0.14),transparent_65%)] before:pointer-events-none">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">About your business</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight">Tell customers why your sauce stands out.</h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                Replace this section with your hot sauce story, ingredients, delivery areas, payment methods, and what makes each bottle special. This section helps build trust and gives your brand more personality.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-zinc-800/80 p-6">
              <h4 className="text-lg font-bold">Suggested details to add</h4>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-200">
                <li>• GCash / bank transfer / COD availability</li>
                <li>• Delivery schedule and service areas</li>
                <li>• Facebook, Instagram, TikTok, or Shopee links</li>
                <li>• Product sizes, variants, and stock information</li>
                <li>• Customer reviews and FAQs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] bg-zinc-900 px-6 py-10 text-white shadow-2xl sm:px-10 border border-orange-500/20 relative overflow-hidden before:absolute before:left-0 before:bottom-0 before:h-48 before:w-48 before:bg-[radial-gradient(circle,rgba(249,115,22,0.18),transparent_65%)] before:pointer-events-none">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100/70">Promo section</p>
                <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Run discounts, bundles, and seasonal offers.</h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-orange-50/80 sm:text-base">
                  Use this block for free shipping, limited-time promos, preorder reminders, or announcement banners.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-zinc-900 p-5 text-zinc-100">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Example offer</p>
                <h4 className="mt-2 text-2xl font-black">Light the Flame Bundle</h4>
                <p className="mt-3 text-sm leading-6 text-zinc-300">Perfect for sampler bundles, launch promos, reseller packs, or payday sales.</p>
                <button className="mt-5 rounded-2xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white">
                  View Promo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Contact</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight">Let customers reach you easily.</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-300">
                Update the contact details below with your real business information. You can also connect this
                section to Messenger, WhatsApp, email, or a checkout form later.
              </p>

              <div className="mt-6 space-y-3 text-sm text-zinc-200">
                <p><span className="font-semibold">Phone:</span> 09XX-XXX-XXXX</p>
                <p><span className="font-semibold">Email:</span> flamingass@email.com</p>
                <p><span className="font-semibold">Address:</span> Your town or city here</p>
                <p><span className="font-semibold">Facebook:</span> fb.com/flamingassbyurotskie</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-6 shadow-sm">
              <h4 className="text-xl font-bold">Quick Inquiry</h4>
              <div className="mt-5 space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-orange-400/30 px-4 py-3 outline-none transition focus:border-neutral-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-2xl border border-orange-400/30 px-4 py-3 outline-none transition focus:border-neutral-500"
                />
                <textarea
                  rows={5}
                  placeholder="Your message"
                  className="w-full rounded-2xl border border-orange-400/30 px-4 py-3 outline-none transition focus:border-neutral-500"
                />
                <button className="w-full rounded-2xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-orange-500/20 bg-zinc-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-zinc-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 FLAMING ASS BY UROTSKIE. All rights reserved.</p>
          <p>Built as a free starter template for a hot sauce e-commerce site.</p>
        </div>
      </footer>
    </div>
  );
}
