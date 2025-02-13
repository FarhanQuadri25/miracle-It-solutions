import About from "./_components/About";
import Firstsection from "./_components/Firstsection";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

export default function HomePage() {
  return (
    <>
      <header>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="block md:hidden">
          <Sidebar />
        </div>
      </header>
      <main>
        <Firstsection />
        <About />
      </main>
    </>
  );
}
