import { Code, Globe, Layout, School } from "lucide-react";

type Feature = {
  name: string;
  description: string;
  icon: React.ElementType;
};

const FEATURES: Feature[] = [
  {
    name: "School Management Software",
    description:
      "Streamline attendance, grading, and administration with our efficient school software solutions.",
    icon: School,
  },
  {
    name: "Landing Page Development",
    description:
      "We create high-converting, responsive landing pages tailored to your business needs.",
    icon: Layout,
  },
  {
    name: "Full-Stack Development",
    description:
      "End-to-end development for web applications, from frontend to backend and databases.",
    icon: Code,
  },
  {
    name: "SEO & Performance Optimization",
    description:
      "We optimize your websites for speed, SEO, and scalability for better search engine rankings.",
    icon: Globe,
  },
];

const About = () => {
  return (
    <section className="py-20 sm:py-32" id="about">
      <div className="max-w-5xl md:mx-auto mx-[1rem] lg:text-center">
        <p className="font-semibold leading-7 text-3xl underline text-purpleaccent">
          Our Services
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          We Develop customize Software Applications
        </h1>
        <p className="mt-6 text-xl leading-snug text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
          repellat architecto corrupti magnam cupiditate velit!
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl">
        <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {FEATURES.map(({ name, description, icon: Icon }, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center"
            >
              <Icon size={48} className="text-indigo-600" />
              <h3 className="text-xl font-semibold mt-4">{name}</h3>
              <p className="text-gray-600 text-center mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
