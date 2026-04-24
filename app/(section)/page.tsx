// import Firstsection from "./_components/Firstsection";
// import FloatedNavbar from "./_components/FloatedNavbar";
// import Third from "./_components/Third";

// export default function HomePage() {
//   return (
//     <>
//       <header>
//         {/* <div className="hidden md:block">
//           <Navbar />
//         </div> */}
//         {/* <div className="block md:hidden">
//           <Sidebar />
//         </div> */}
//         <FloatedNavbar />
//       </header>
//       <main>
//         <Firstsection />

//         <Third />
//       </main>
//     </>
//   );
// }

// import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
// import About from "@/components/about";
import FeaturesSection from "@/components/features";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import VisitorTracker from "@/components/vistior-tracker";

export default function Home() {
  return (
    <main className="min-h-screen">
      <VisitorTracker />
      {/* <Navbar /> */}
      <Hero />
      <FeaturesSection />
      {/* <About /> */}
      <ContactForm />
      <Footer />
    </main>
  );
}
