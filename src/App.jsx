import { useMemo, useState } from "react";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";

export default function SmallBusinessEcommerceWebsite() {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("GCash");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [showPaymentDetails, setShowPaymentDetails] = useState(true);

  const gcashNumber = "09178833790";
  const gcashName = "Arthur Cedric Michael Jacob P. Caballes";
  const messengerLink =
    "https://m.me/flamingassbyurotskie";

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

  const increaseQuantity = (productId) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId));
  };

  const totalCartItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const totalCartPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const orderSummary = useMemo(() => {
    if (cartItems.length === 0) return "No items selected yet.";

    return cartItems
      .map(
        (item) =>
          `${item.quantity}x ${item.name} - ₱${item.price * item.quantity}`
      )
      .join("\n");
  }, [cartItems]);

  const orderMessage = useMemo(() => {
    return `🔥 FLAMING ASS ORDER 🔥\n\nItems:\n${orderSummary}\n\nTotal: ₱${totalCartPrice}\n\nCustomer Name: ${customerName || "-"}\nContact Number: ${contactNumber || "-"}\nAddress: ${address || "-"}\nPayment Method: ${paymentMethod}\nReference Number: ${referenceNumber || "-"}\nNotes: ${notes || "-"}`;
  }, [
    orderSummary,
    totalCartPrice,
    customerName,
    contactNumber,
    address,
    paymentMethod,
    referenceNumber,
    notes,
  ]);

  const copyOrderMessage = async () => {
    try {
      await navigator.clipboard.writeText(orderMessage);
      alert("Order details copied. You can now paste it in Messenger.");
    } catch (error) {
      alert("Copy failed. Please copy the message manually from the preview.");
    }
  };

  const handleMessengerCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!customerName || !contactNumber || !address) {
      alert("Please fill in your name, contact number, and address first.");
      return;
    }

    const encodedMessage = encodeURIComponent(orderMessage);
    window.open(`${messengerLink}&text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-50 border-b border-orange-500/20 bg-zinc-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Flaming Ass logo"
              className="h-12 w-12 rounded-full border border-orange-500/30 object-cover"
            />
            <div>
              <h1 className="text-xl font-black tracking-tight sm:text-2xl">
                FLAMING ASS
              </h1>
              <p className="text-xs text-zinc-400 sm:text-sm">BY UROTSKIE</p>
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
              <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-4 shadow-2xl">
                <img
                  src={banner}
                  alt="Hot sauce"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
                <img
                  src={logo}
                  alt="watermark"
                  className="absolute bottom-5 right-5 w-24 opacity-20"
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
                    className="h-64 w-full rounded-xl object-cover"
                  />

                  <div className="mt-3 flex items-start justify-between gap-3">
                    <p className="text-sm tracking-[0.2em] text-orange-300">{product.category}</p>
                    <p className="text-lg font-black">₱{product.price}</p>
                  </div>

                  <h4 className="mt-2 text-xl font-bold leading-tight">{product.name}</h4>
                  <p className="mt-3 min-h-[112px] text-sm text-zinc-300">
                    {product.description}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 w-full rounded-xl bg-orange-600 py-3 font-semibold transition hover:opacity-90"
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
                  Adjust quantities, remove items, and complete your order below.
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
                    className="rounded-xl border border-orange-500/20 bg-zinc-950 px-4 py-4"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-zinc-400">{item.category}</p>
                        <p className="mt-1 text-sm text-zinc-400">₱{item.price} each</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center overflow-hidden rounded-xl border border-orange-500/20">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="px-3 py-2 text-lg font-bold text-white hover:bg-zinc-900"
                          >
                            −
                          </button>
                          <span className="min-w-[48px] px-3 py-2 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="px-3 py-2 text-lg font-bold text-white hover:bg-zinc-900"
                          >
                            +
                          </button>
                        </div>

                        <div className="min-w-[90px] text-right">
                          <p className="font-bold">₱{item.price * item.quantity}</p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-xl border border-red-500/30 px-3 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/10"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[1.5rem] border border-orange-500/20 bg-zinc-950 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h5 className="text-lg font-bold">Payment Details</h5>
                    <p className="text-sm text-zinc-400">
                      Use GCash for payment. Bank transfer is still under construction.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowPaymentDetails((value) => !value)}
                    className="rounded-xl border border-orange-500/20 px-3 py-2 text-sm font-semibold hover:bg-zinc-900"
                  >
                    {showPaymentDetails ? "Hide" : "Show"}
                  </button>
                </div>

                {showPaymentDetails && (
                  <div className="mt-5 space-y-4">
                    <div className="rounded-xl border border-orange-500/20 bg-zinc-900 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                        GCash
                      </p>
                      <p className="mt-2 text-lg font-bold">{gcashNumber}</p>
                      <p className="mt-1 text-sm text-zinc-400">Account Name: {gcashName}</p>
                      <p className="mt-3 text-sm text-zinc-300">
                        Send payment first, then place your reference number in the form before sending your order.
                      </p>
                    </div>

                    <div className="rounded-xl border border-orange-500/20 bg-zinc-900 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                        Bank Transfer
                      </p>
                      <p className="mt-2 text-sm text-zinc-300">
                        Under construction. Available soon.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="rounded-[1.5rem] border border-orange-500/20 bg-zinc-950 p-5">
                <h5 className="text-lg font-bold">Customer Details</h5>
                <p className="mt-1 text-sm text-zinc-400">
                  Fill this out so your order can be processed correctly.
                </p>

                <div className="mt-5 space-y-4">
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full rounded-2xl border border-orange-400/30 bg-zinc-900 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                  <input
                    type="text"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="Contact Number"
                    className="w-full rounded-2xl border border-orange-400/30 bg-zinc-900 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                  <textarea
                    rows={3}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Complete Address"
                    className="w-full rounded-2xl border border-orange-400/30 bg-zinc-900 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full rounded-2xl border border-orange-400/30 bg-zinc-900 px-4 py-3 outline-none transition focus:border-orange-400"
                  >
                    <option>GCash</option>
                    <option>Bank Transfer</option>
                  </select>
                  <input
                    type="text"
                    value={referenceNumber}
                    onChange={(e) => setReferenceNumber(e.target.value)}
                    placeholder="Reference Number / Last 4 Digits"
                    className="w-full rounded-2xl border border-orange-400/30 bg-zinc-900 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes (optional)"
                    className="w-full rounded-2xl border border-orange-400/30 bg-zinc-900 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-orange-500/20 bg-zinc-950 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h5 className="text-lg font-bold">Order Preview</h5>
                  <p className="text-sm text-zinc-400">
                    Review before sending to Messenger.
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-zinc-400">Amount Due</p>
                  <p className="text-2xl font-black">₱{totalCartPrice}</p>
                </div>
              </div>

              <pre className="mt-5 whitespace-pre-wrap rounded-xl border border-orange-500/20 bg-zinc-900 p-4 text-sm text-zinc-200">
                {orderMessage}
              </pre>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={copyOrderMessage}
                  className="rounded-2xl border border-orange-500/20 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
                >
                  Copy Order Details
                </button>
                <button
                  onClick={handleMessengerCheckout}
                  className="rounded-2xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Send Order via Messenger
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-zinc-500">
        © 2026 FLAMING ASS BY UROTSKIE
      </footer>
    </div>
  );
}
