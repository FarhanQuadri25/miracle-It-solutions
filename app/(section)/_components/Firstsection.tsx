import Image from "next/image";

const Firstsection = () => {
  return (
    <section className="min-h-[80vh] flex justify-center items-center bg-gray-400 border-b-2 border-t-2 mt-[3rem] md:mt-0 border-[#171717]">
      <div className="flex flex-col space-y-10 sm:flex-row items-center justify-center md:space-x-10 new-container-2">
        <div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-olive">
              <span className="text-yellowaccent">Miracle</span> It{" "}
              <span>Solutions</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl font-inter font-semibold text-pretty">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus similique architecto error quasi, dolor ducimus
              tempora nulla quidem maiores aspernatur sequi quo adipisci aliquam
              vero, libero nesciunt illo iure! Doloribus!
            </p>
          </div>
        </div>
        <div>
          <Image
            src={`/images/it.jpg`}
            width={800}
            height={800}
            alt="it"
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Firstsection;
