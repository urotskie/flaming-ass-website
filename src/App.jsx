import { useState } from "react";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";

export default function SmallBusinessEcommerceWebsite() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      name: "Flaming Ass Carolina Reaper Hot Sauce",
      category: "HELLBREAKER",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=80",
      description:
        "Pure punishment in a bottle. Made with Carolina Reaper, this hits instantly and lingers brutally. Not for casual eaters—this is for those who crave real heat.",
    },
    {
      id: 2,
      name: "Flaming Ass Habanero Hot Sauce",
      category: "INFERNO",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80",
      description:
        "A fiery classic. Strong habanero punch with a smooth burn that keeps building. Perfect balance of flavor and heat that hits hard but stays enjoyable.",
    },
    {
      id: 3,
      name: "Flaming Ass Pineapple Habanero",
      category: "BLAZING HOT",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
      description:
        "Sweet meets savage. Tropical pineapple upfront, then a creeping habanero burn kicks in. A perfect mix of flavor and fire for everyday use.",
    },
    {
      id: 4,
      name: "Flaming Ass Green Jalapeño",
      category: "MILD",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      description:
        "Fresh, zesty, and easygoing. Light jalapeño heat with strong flavor—great for dipping, marinating, or daily meals without overwhelming spice.",
    },
  ];

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Flaming Ass logo"
                className="h-12 w-12 rounded-full object-cover border border-orange-500/30"
              />
              <div>
                <h1 className="text-xl font-black tracking-tight sm:text-2xl">
                  FLAMING ASS
                </h1>
                <p className="text-xs text-zinc-400 sm:text-sm">BY UROTSKIE</p>
              </div>
            </div>
          </div>

          <div className="text-right">
            <button className="rounded-2xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90">
              Cart ({totalCartItems})
            </button>
            <p className="mt-1 text-xs text-zinc-400">Total: ₱{totalCartPrice}</p>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <h2 className="max-w-xl text-4xl font-black sm:text-5xl lg:text-6xl">
                Real Heat. Real Flavor.
              </h2>

              <p className="mt-3 text-lg font-bold text-orange-400">
                Flavor up front. Fire in the backdoor.
              </p>

              <p className="mt-5 text-zinc-300">
                Premium small-batch hot sauce made for real spice lovers. From mild flavor to extreme heat—choose your level.
              </p>

              <a
                href="#shop"
                className="mt-6 w-fit rounded-2xl bg-orange-600 px-6 py-3 text-white"
              >
                Browse Sauces
              </a>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-4 shadow-2xl relative overflow-hidden">
                <img
                  src={banner}
                  alt="Hot sauce"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
                <img
                  src={logo}
                  alt="watermark"
                  className="absolute right-5 bottom-5 w-24 opacity-20"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-black">🔥 Featured Hot Sauces</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Add any flavor to cart. Clicking the same item again increases its quantity.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => {
              const inCart = cartItems.find((item) => item.id === product.id);

              return (
                <div
                  key={product.id}
                  className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover rounded-xl"
                  />

                  <div className="mt-3 flex items-start justify-between gap-3">
                    <p className="text-sm tracking-[0.2em] text-orange-300">{product.category}</p>
                    <p className="text-lg font-black">₱{product.price}</p>
                  </div>

                  <h4 className="mt-2 font-bold text-xl leading-tight">{product.name}</h4>
                  <p className="text-sm text-zinc-300 mt-3 min-h-[112px]">
                    {product.description}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full bg-orange-600 py-3 rounded-xl font-semibold transition hover:opacity-90"
                  >
                    {inCart ? `Add More (${inCart.quantity})` : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-14">
          <div className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-2xl font-black">Cart Summary</h4>
                <p className="text-sm text-zinc-400">
                  Quick preview of all selected sauces.
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-zinc-400">Items: {totalCartItems}</p>
                <p className="text-xl font-black">Total: ₱{totalCartPrice}</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {cartItems.length === 0 ? (
                <p className="text-zinc-400">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-orange-500/20 bg-zinc-950 px-4 py-3"
                  >
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-zinc-400">{item.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-400">Qty: {item.quantity}</p>
                      <p className="font-bold">₱{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center text-zinc-500 py-6">
        © 2026 FLAMING ASS BY UROTSKIE
      </footer>
    </div>
  );
}
