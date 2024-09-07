import Image from "next/image";

export default function FeaturesList() {
  const features = [
    {
      title: "Quality Results",
      description:
        "Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum fermentum ac eu eros. Aliquam erat volutpat.",
      image: "/images/quality-results.png",
      alt: "Quality Results",
    },
    {
      title: "Analytics",
      description:
        "Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum fermentum ac eu eros. Aliquam erat volutpat.",
      image: "/images/analytics.png",
      alt: "Analytics",
    },
    {
      title: "Affordable Pricing",
      description:
        "Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum fermentum ac eu eros. Aliquam erat volutpat.",
      image: "/images/affordable-pricing.png",
      alt: "Affordable Pricing",
    },
    {
      title: "Easy To Use",
      description:
        "Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum fermentum ac eu eros. Aliquam erat volutpat.",
      image: "/images/easy-to-use.png",
      alt: "Easy To Use",
    },
    {
      title: "Free Support",
      description:
        "Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum fermentum ac eu eros. Aliquam erat volutpat.",
      image: "/images/free-support.png",
      alt: "Free Support",
    },
    {
      title: "Effectively Increase",
      description:
        "Aliquam a nisl pulvinar, hendrerit arcu sed, dapibus velit. Duis ac quam id sapien vestibulum fermentum ac eu eros. Aliquam erat volutpat.",
      image: "/images/effectively-increase.png",
      alt: "Effectively Increase",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-white rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 flex-shrink-0 mr-4">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h5 className="text-lg font-semibold mb-2">{feature.title}</h5>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
