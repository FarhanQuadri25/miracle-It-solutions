import { Button } from "@/components/ui/button";
import Image from "next/image";

const Firstsection = () => {
  return (
    <section className="text-center mt-28 md:mt-14 px-4" id="home">
      <span className="text-xs sm:text-sm text-primary font-medium tracking-tight bg-greenaccent px-4 py-2 rounded-full">
        Build your next website with us
      </span>
      <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
        Miracle IT <span className="text-indigo-700">Solutions!</span>
      </h1>
      <p className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mt-4 font-light lg:text-muted-foreground tracking-tight mx-auto text-sm sm:text-base md:text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate id
        placeat illo iste, ipsum expedita labore dignissimos ad quasi officiis?
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-4 justify-center mt-6">
        <Button>Contact Me</Button>
        <Button className="bg-greenaccent hover:bg-greenaccent text-black">
          Git Hub
        </Button>
      </div>

      {/* Hero Section with Image & SVGs as Box Shadow */}
      <div className="relative w-full max-w-[1200px] py-12 mx-auto flex justify-center -z-0">
        <svg
          className="absolute -mt-[8rem] md:-mt-[16rem] blur-3xl"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#00D9B8"
            d="M69.7,-20.2C77.9,2.7,63.6,35.3,44.5,45.3C25.5,55.4,1.7,42.9,-15.4,28.7C-32.4,14.6,-42.7,-1.3,-39,-17.9C-35.3,-34.5,-17.7,-51.8,6.5,-53.9C30.7,-56,61.4,-43,69.7,-20.2Z"
            transform="translate(100 100)"
          />
          <path
            fill="#FF5733"
            d="M50,-30C58,0,50,50,30,60C10,70,-10,50,-30,30C-50,10,-58,-20,-50,-50C-42,-80,-20,-90,10,-90C40,-90,58,-60,50,-30Z"
            transform="translate(160 160)"
          />
          <path
            fill="#8A2BE2"
            d="M30,-20C40,10,60,40,50,60C40,80,10,90,-10,80C-30,70,-40,50,-50,30C-60,10,-50,-20,-30,-30C-10,-40,10,-30,30,-20Z"
            transform="translate(80 200)"
          />
          <path
            fill="#8A2BE2"
            d="M40,-25C55,5,65,40,50,60C35,80,5,85,-20,75C-45,65,-60,40,-60,20C-60,0,-45,-10,-30,-25C-15,-40,10,-50,40,-25Z"
            transform="translate(200 100)"
          />
        </svg>
        {/* Hero Image */}

        <Image
          src="/images/cover-image.png"
          width={900}
          height={900}
          alt="hero-image"
          className="relative w-full max-w-[1000px] sm:max-w-[1100px] lg:max-w-[1200px] mx-auto object-cover border rounded-lg shadow-2xl"
          priority={true}
        />
      </div>
    </section>
  );
};

export default Firstsection;
