import Link from "next/link";

const NAV_LINKS = [
  { id: 1, label: "Home", link: "home" },
  { id: 2, label: "About", link: "about" },
  { id: 3, label: "Contact", link: "Contact Us" },
];

export default function Navbar() {
  return (
    <nav className="w-full text-[#171717] px-8 py-6">
      <div className="flex justify-between new-container items-center">
        {/* Logo */}
        <h1 className="text-2xl font-poppins font-extrabold">Logo</h1>
        <div className="ml-auto mr-16">
          <ul className="flex items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="text-xl font-olive font-[600]">
                <Link href={`#${link.link}`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link
            href={`/`}
            className=" border-2 border-zinc-800 font-poppins font-bold px-6 py-4 rounded-3xl hover:bg-purpleaccent transition-all duration-75 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
