import Link from "next/link";

const NAV_LINKS = [
  { id: 1, label: "Home", link: "home" },
  { id: 2, label: "About", link: "about" },
  
];

export default function Navbar() {
  return (
    <nav className="w-full text-[#171717] px-8 py-6">
      <div className="flex justify-between new-container items-center">
        {/* Logo */}
        {/* <h1 className="text-2xl font-extrabold">Logo</h1> */}
        <div className="ml-auto mr-16">
          <ul className="flex items-center justify-center gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="text-xl font-extrabold">
                <Link href={`#${link.link}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            href={`/`}
            className=" border-2 border-zinc-800 font-bold px-6 py-2 rounded-3xl hover:bg-purpleaccent transition-all duration-75 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
