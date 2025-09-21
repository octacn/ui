import PricingCard from "@/registry/blocks/pricing-01";

export function PricingDemo() {
  const pricingPlans = [
    {
      id: "startup",
      name: "Startup",
      prices: {
        INR: "₹25,000/-",
        USD: "$299",
      },
      features: [
        "15–20s Animation (1-2 SKUs)",
        "Basic storyboard design",
        "Delivered in 2 weeks",
        "Standard quality rendering",
        "1 revision included",
        "Email support",
      ],
      deliveryTime: "2 weeks",
      description:
        "Perfect for small businesses starting their video marketing journey",
      checkoutUrl: "/checkout?plan=startup",
    },
    {
      id: "pro",
      name: "Professional",
      prices: {
        INR: "₹55,000/-",
        USD: "$699",
      },
      features: [
        "20–30s Animation (up to 3 SKUs)",
        "Professional storyboard + design",
        "Delivered in 3 weeks",
        "High-quality rendering",
        "Up to 2 revisions",
        "Priority email support",
        "Custom transitions",
      ],
      deliveryTime: "3 weeks",
      description:
        "Ideal for growing businesses that need professional quality",
      isPopular: true,
      checkoutUrl: "/checkout?plan=pro",
    },
    {
      id: "premium",
      name: "Premium",
      prices: {
        INR: "₹1,70,500/-",
        USD: "$2,049",
      },
      features: [
        "30–40s Animation (up to 5 SKUs)",
        "Advanced storyboard + shot design",
        "Delivered in 4 weeks",
        "Lighting, Camera Animation, Depth effects",
        "Up to 3 structured revisions",
        "3D Modelling - Included",
        "Dedicated project manager",
        "Priority support with video calls",
      ],
      deliveryTime: "4 weeks",
      description:
        "Enterprise-grade solution with premium features and dedicated support",
      showSaveText: true,
      checkoutUrl: "/checkout?plan=premium",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 px-8 py-10">
      {pricingPlans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          showSaveText={plan.id === "premium"}
          className={plan.isPopular ? "ring-2 ring-yellow-500/50" : ""}
        />
      ))}
    </div>
  );
}
