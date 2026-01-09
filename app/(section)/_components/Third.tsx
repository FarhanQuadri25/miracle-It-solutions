import Image from "next/image";
import { Code, Globe, Layout, School, Brush, Settings } from "lucide-react";

type Feature = {
  name: string;
  description: string;
  icon: React.ElementType;
};

const NEW_FEATURES: Feature[] = [
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
  {
    name: "UI/UX Design",
    description:
      "Create visually appealing, user-friendly interfaces with a focus on experience and accessibility.",
    icon: Brush,
  },
  {
    name: "Custom Web Applications",
    description:
      "Develop tailored web applications to meet unique business requirements with modern technologies.",
    icon: Settings,
  },
];

const Third = () => {
  return (
    <section className="min-h-screen bg-[rgb(17,17,17)]" id="about">
      <div className="max-w-4xl pt-[4rem] px-[1rem] mx-auto">
        <h2 className="text-white text-2xl font-medium leading-tight tracking-tight lg:text-6xl md:text-5xl sm:text-3xl">
          Miracle IT Solutions Build Your New Website With Us.
        </h2>
        <p className="leading-snug tracking-tight text-muted-foreground mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod
          eveniet aliquid atque velit iste.
        </p>
      </div>
      <div className={`relative mx-[1rem] mt-[5rem] mb-[5rem]`}>
        <Image
          src={`/images/new-cover.png`}
          width={900}
          height={800}
          alt="cover-image"
          className="border rounded-2xl shadow-2xl relative mx-auto"
        />
      </div>

      <div className="new-container px-[1rem] pb-[4rem]">
        <div className="grid mt-16 gird-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-y-12 pb-[4rem] sm:mt-12 text-white">
          {NEW_FEATURES.map(({ name, description, icon: Icon }, index) => (
            <div className="flex flex-col p-4 gap-4" key={index}>
              {/* <div className="text-indigo-700">{<Icon size={40} />}</div> */}
              <h2 className="font-bold text-2xl ">{name}</h2>
              <p className="text-muted-foreground leading-snug">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Third;
