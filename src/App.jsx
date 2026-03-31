import { supabase } from "./lib/supabase";
import { useEffect, useMemo, useState } from "react";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import carolina from "./assets/carolina.png";
import habanero from "./assets/habanero.png";
import pineapple from "./assets/pineapple.png";
import jalapeno from "./assets/jalapeno.png";

export default function SmallBusinessEcommerceWebsite() {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("GCash");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [showPaymentDetails, setShowPaymentDetails] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [feedbackRating, setFeedbackRating] = useState("⭐⭐⭐⭐⭐ Excellent");
  const [feedbackText, setFeedbackText] = useState("");

  const gcashNumber = "09178833790";
  const gcashName = "Arthur Cedric Michael Jacob P. Caballes";

  const products = [
    {
      id: 1,
      name: "Flaming Ass Carolina Reaper Hot Sauce",
      category: "HELLBREAKER",
      price: 350,
      badge: "BEST SELLER",
      heat: "EXTREME",
      image: carolina,
      description:
        "Pure punishment in a bottle. Made with Carolina Reaper, this hits instantly and lingers brutally. Not for casual eaters—this is for those who crave real heat.",
    },
    {
      id: 2,
      name: "Flaming Ass Habanero Hot Sauce",
      category: "INFERNO",
      price: 350,
      badge: "HOT PICK",
      heat: "HOT",
      image: habanero,
      description:
        "A fiery classic. Strong habanero punch with a smooth burn that keeps building. Perfect balance of flavor and heat that hits hard but stays enjoyable.",
    },
    {
      id: 3,
      name: "Flaming Ass Pineapple & Habanero Hot Sauce",
      category: "BLAZING HOT",
      price: 350,
      badge: "LIMITED STOCK",
      heat: "MEDIUM-HOT",
      image: pineapple,
      description:
        "Sweet meets savage. Tropical pineapple upfront, then a creeping habanero burn kicks in. A perfect mix of flavor and fire for everyday use.",
    },
    {
      id: 4,
      name: "Flaming Ass Creamy Jalapeño",
      category: "MILD",
      price: 300,
      badge: "EASY START",
      heat: "MILD",
      image: jalapeno,
      description:
        "Fresh, creamy, zesty, and easygoing. Light jalapeño heat with strong flavor—great for dipping, marinating, or daily meals without overwhelming spice.",
    },
  ];

  useEffect(() => {
    const savedCart = localStorage.getItem("flaming-ass-cart");
    const savedCustomer = localStorage.getItem("flaming-ass-customer");

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch {
        localStorage.removeItem("flaming-ass-cart");
      }
    }

    if (savedCustomer) {
      try {
        const parsed = JSON.parse(savedCustomer);
        setCustomerName(parsed.customerName || "");
        setContactNumber(parsed.contactNumber || "");
        setAddress(parsed.address || "");
        setPaymentMethod(parsed.paymentMethod || "GCash");
        setReferenceNumber(parsed.referenceNumber || "");
        setNotes(parsed.notes || "");
      } catch {
        localStorage.removeItem("flaming-ass-customer");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("flaming-ass-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem(
      "flaming-ass-customer",
      JSON.stringify({
        customerName,
        contactNumber,
        address,
        paymentMethod,
        referenceNumber,
        notes,
      })
    );
  }, [customerName, contactNumber, address, paymentMethod, referenceNumber, notes]);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const clearCart = () => {
    setCartItems([]);
    setReferenceNumber("");
    setNotes("");
  };

  const totalCartItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const totalCartPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );

  const orderId = useMemo(() => {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const d = String(now.getDate()).padStart(2, "0");
    const itemSeed = String(totalCartItems || 0).padStart(2, "0");
    const priceSeed = String(totalCartPrice || 0).slice(-3).padStart(3, "0");
    return `FA-${y}${m}${d}-${itemSeed}${priceSeed}`;
  }, [totalCartItems, totalCartPrice]);

  const orderSummary = useMemo(() => {
    if (cartItems.length === 0) return "No items selected yet.";

    return cartItems
      .map(
        (item) => `${item.quantity}x ${item.name} - ₱${item.price * item.quantity}`
      )
      .join("\n");
  }, [cartItems]);

  const orderMessage = useMemo(() => {
    return `🔥 FLAMING ASS ORDER 🔥

Order ID: ${orderId}

Items:
${orderSummary}

Total: ₱${totalCartPrice}

Customer Name: ${customerName || "-"}
Contact Number: ${contactNumber || "-"}
Address: ${address || "-"}
Payment Method: ${paymentMethod}
Reference Number: ${referenceNumber || "-"}
Notes: ${notes || "-"}`;
  }, [
    orderId,
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
      alert("Order details copied.");
    } catch {
      alert("Copy failed. Please copy the order manually from the preview.");
    }
  };

  const handleSupabaseCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    if (!customerName || !contactNumber || !address) {
      alert("Please fill in your name, contact number, and address first.");
      return;
    }

    const orderPayload = {
      order_id: orderId,
      customer_name: customerName,
      contact_number: contactNumber,
      address: address,
      payment_method: paymentMethod,
      reference_number: referenceNumber || null,
      notes: notes || null,
      items: cartItems,
      total_amount: totalCartPrice,
      status: "pending",
    };

    console.log("Saving order:", orderPayload);

    const { data, error } = await supabase
      .from("orders")
      .insert([orderPayload])
      .select();

    console.log("Supabase response:", { data, error });

    if (error) {
      alert("Order saving failed: " + error.message);
      return;
    }

    try {
      await navigator.clipboard.writeText(orderMessage);
      alert("Order saved successfully in Supabase and copied.");
    } catch {
      alert("Order saved successfully in Supabase.");
    }
  };

  const submitFeedback = () => {
    alert("Feedback form is currently local only. Admin approval can be added later.");
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
            <a
              href="#cart"
              className="inline-block rounded-2xl bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Cart ({totalCartItems})
            </a>
            <p className="mt-1 text-xs text-zinc-400">Total: ₱{totalCartPrice}</p>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-flex w-fit rounded-full border border-orange-500/20 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
                Small-batch heat for real spice lovers
              </span>

              <h2 className="max-w-xl text-4xl font-black sm:text-5xl lg:text-6xl">
                Real Heat. Real Flavor.
              </h2>

              <p className="mt-3 text-lg font-bold text-orange-400">
                Flavor up front. Fire in the backdoor.
              </p>

              <p className="mt-5 text-zinc-300">
                Premium hot sauce made for serious cravings. Clean flavor, bold heat,
                and easy ordering for direct local sales.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#shop"
                  className="w-fit rounded-2xl bg-orange-600 px-6 py-3 text-white"
                >
                  Browse Sauces
                </a>
                <a
                  href="#cart"
                  className="w-fit rounded-2xl border border-orange-500/20 px-6 py-3 text-zinc-100 hover:bg-zinc-900"
                >
                  Go to Checkout
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-orange-500/20 bg-zinc-900 p-4">
                  <p className="text-2xl font-black">4</p>
                  <p className="text-sm text-zinc-400">Flavor Variants</p>
                </div>
                <div className="rounded-2xl border border-orange-500/20 bg-zinc-900 p-4">
                  <p className="text-2xl font-black">GCash</p>
                  <p className="text-sm text-zinc-400">Fast Payment</p>
                </div>
                <div className="rounded-2xl border border-orange-500/20 bg-zinc-900 p-4">
                  <p className="text-2xl font-black">Saved</p>
                  <p className="text-sm text-zinc-400">to Supabase</p>
                </div>
              </div>
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

        <section className="mx-auto max-w-7xl px-4 pb-6">
          <div className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-6">
            <h3 className="text-2xl font-black">Contact Information</h3>

            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <p>
                <span className="font-semibold">Contact Number:</span> 09178833790
              </p>
              <p>
                <span className="font-semibold">Facebook:</span>{" "}
                www.facebook.com/flamingassbyurotskie
              </p>
              <p>
                <span className="font-semibold">Location:</span> St. Anthony&apos;s
                Village Hiway-77 Talamban Cebu City
              </p>
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-3xl font-black">🔥 Featured Hot Sauces</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Add any flavor to cart. Clicking the same item again increases its
                quantity.
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
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full rounded-xl object-contain bg-white"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-zinc-950/90 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-orange-300">
                      {product.badge}
                    </span>
                  </div>

                  <div className="mt-3 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm tracking-[0.2em] text-orange-300">
                        {product.category}
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Heat Level: {product.heat}
                      </p>
                    </div>
                    <p className="text-lg font-black">₱{product.price}</p>
                  </div>

                  <h4 className="mt-2 text-xl font-bold leading-tight">
                    {product.name}
                  </h4>
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

        <section className="mx-auto max-w-7xl px-4 pb-10">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Fast Direct Ordering",
                text: "Add to cart, fill in your details, and save the order directly to the database.",
              },
              {
                title: "GCash Ready",
                text: "Customers can pay instantly through GCash and send the reference number plus screenshot after payment.",
              },
              {
                title: "Built for Mobile",
                text: "Designed to feel simple, fast, and clean for phone users where most orders happen.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-6"
              >
                <h4 className="text-lg font-bold">{feature.title}</h4>
                <p className="mt-2 text-sm text-zinc-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10">
          <div className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-6">
            <h3 className="text-2xl font-black">Customer Feedback</h3>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-xl bg-zinc-950 p-4">
                  <p className="text-orange-300">⭐⭐⭐⭐⭐</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    “Grabe ka anghang pero lami kaayo 🔥”
                  </p>
                  <p className="text-xs text-zinc-500">– Cebu Customer</p>
                </div>

                <div className="rounded-xl bg-zinc-950 p-4">
                  <p className="text-orange-300">⭐⭐⭐⭐⭐</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    “Legit spicy. Di siya fake heat.”
                  </p>
                  <p className="text-xs text-zinc-500">– Repeat Buyer</p>
                </div>

                <div className="rounded-xl bg-zinc-950 p-4">
                  <p className="text-orange-300">⭐⭐⭐⭐⭐</p>
                  <p className="mt-2 text-sm text-zinc-300">
                    “Minimal but smooth ordering process. Easy to message and order directly.”
                  </p>
                  <p className="text-xs text-zinc-500">– Online Buyer</p>
                </div>
              </div>

              <div className="rounded-xl bg-zinc-950 p-5">
                <h4 className="font-bold">Rate Your Experience</h4>

                <div className="mt-4 space-y-3">
                  <select
                    value={feedbackRating}
                    onChange={(e) => setFeedbackRating(e.target.value)}
                    className="w-full rounded-xl border border-orange-500/20 bg-zinc-900 p-3 outline-none"
                  >
                    <option>⭐⭐⭐⭐⭐ Excellent</option>
                    <option>⭐⭐⭐⭐ Good</option>
                    <option>⭐⭐⭐ Okay</option>
                    <option>⭐⭐ Needs Improvement</option>
                  </select>

                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Your feedback..."
                    className="w-full rounded-xl border border-orange-500/20 bg-zinc-900 p-3 outline-none"
                    rows={5}
                  />

                  <button
                    onClick={submitFeedback}
                    className="w-full rounded-xl bg-orange-600 py-3 font-semibold"
                  >
                    Submit Feedback
                  </button>
                </div>

                <p className="mt-3 text-xs text-zinc-500">
                  Feedback moderation can be added later through Supabase admin tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="cart" className="mx-auto max-w-7xl px-4 pb-20">
          <div className="rounded-[2rem] border border-orange-500/20 bg-zinc-900 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-2xl font-black">Cart Summary</h4>
                <p className="text-sm text-zinc-400">
                  Adjust quantities, remove items, and save your order below.
                </p>
                <p className="mt-2 text-sm text-orange-300">Order ID: {orderId}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-sm text-zinc-400">Items: {totalCartItems}</p>
                <p className="text-2xl font-black">Total: ₱{totalCartPrice}</p>
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

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={clearCart}
                className="rounded-2xl border border-red-500/30 px-5 py-3 text-sm font-semibold text-red-300 hover:bg-red-500/10"
              >
                Clear Cart
              </button>
              <a
                href="#shop"
                className="rounded-2xl border border-orange-500/20 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-950"
              >
                Add More Items
              </a>
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
                      <p className="mt-1 text-sm text-zinc-400">
                        Account Name: {gcashName}
                      </p>
                      <p className="mt-3 text-sm text-zinc-300">
                        Send payment via GCash, then:
                        <br />• Enter your reference number
                        <br />• Keep your screenshot for admin verification
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
                    placeholder="Reference Number"
                    className="w-full rounded-2xl border border-orange-400/30 bg-zinc-900 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Notes / screenshot note"
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
                    Review before saving to Supabase.
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
                  onClick={handleSupabaseCheckout}
                  className="rounded-2xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  Save Order to Supabase
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="#cart"
        className="fixed bottom-5 right-5 z-40 rounded-full bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-2xl hover:opacity-90"
      >
        🔥 Order Now ({totalCartItems})
      </a>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-5 z-40 rounded-full border border-orange-500/20 bg-zinc-900 px-4 py-3 text-sm font-semibold text-zinc-100 shadow-2xl hover:bg-zinc-800"
        >
          ↑ Top
        </button>
      )}

      <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-orange-500/20 bg-zinc-950/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div>
            <p className="text-xs text-zinc-400">{totalCartItems} item(s)</p>
            <p className="font-black">₱{totalCartPrice}</p>
          </div>
          <a
            href="#cart"
            className="rounded-2xl bg-orange-600 px-5 py-3 text-sm font-semibold text-white"
          >
            Checkout
          </a>
        </div>
      </div>

      <footer className="py-6 pb-24 text-center text-zinc-500 md:pb-6">
        © 2026 FLAMING ASS BY UROTSKIE
      </footer>
    </div>
  );
}