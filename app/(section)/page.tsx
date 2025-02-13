import Firstsection from "./_components/Firstsection";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";
import Third from "./_components/Third";

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

        <Third />
      </main>
    </>
  );
}
