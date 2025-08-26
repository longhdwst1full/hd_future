// components/WorkflowSection.tsx
import Image from "next/image";

export default function WorkflowSection() {
  const workflowSteps = [
    {
      year: "2025",
      title: "Future Vision",
      description: "Planning next-generation solutions",
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Implementing cutting-edge technology",
    },
    {
      year: "2023",
      title: "Foundation",
      description: "Building robust infrastructure",
    },
    { year: "2022", title: "Launch", description: "Beginning our journey" },
  ];

  return (
    <section
      id="workflow"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Take a look at Our Workflow About Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div key={step.year} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.year}
                  </h3>
                  <h4 className="text-lg font-medium text-blue-600 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/iphone16.png"
                alt="iPhone 16 - Mobile Development Showcase"
                width={300}
                height={600}
                className="h-auto max-w-full drop-shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
