import Firstsection from "./_components/Firstsection";
import FloatedNavbar from "./_components/FloatedNavbar";
import Third from "./_components/Third";

export default function HomePage() {
  return (
    <>
      <header>
        {/* <div className="hidden md:block">
          <Navbar />
        </div> */}
        {/* <div className="block md:hidden">
          <Sidebar />
        </div> */}
        <FloatedNavbar />
      </header>
      <main>
        <Firstsection />

        <Third />
      </main>
    </>
  );
}
