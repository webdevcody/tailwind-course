/* eslint-disable @next/next/no-img-element */
import { Avatar } from "@/components/avatar";
import {
  DropDown,
  DropDownItem,
  DropDownSeparator,
} from "@/components/dropdown";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

const links = [
  {
    text: "HOME",
    href: "#home",
  },
  {
    text: "ABOUT",
    href: "#about",
  },
  {
    text: "CONTACT",
    href: "#contact",
  },
  {
    text: "PRIVACY",
    href: "#privacy",
  },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white relative">
      <div className="mx-auto container w-full text-black flex justify-between">
        <div className="flex items-center">
          <img alt="logo image" src="/logo.png" className="w-16 h-16 rounded" />
          <span className="md:text-xl font-bold">BurritoShopOnline</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.text}
              className="hover:text-orange-600"
              href={link.href}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <DropDown toggle={<Avatar src={"/me.jpeg"} />}>
            <DropDownItem>
              <a href="#">Settings</a>
            </DropDownItem>
            <DropDownSeparator />
            <DropDownItem>
              <a href="#">Logout</a>
            </DropDownItem>
          </DropDown>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 mr-2"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 bg-gray-50 w-full py-4">
          <nav className="flex flex-col items-center gap-6 text-black">
            {links.map((link) => (
              <a
                key={link.text}
                className="hover:text-orange-600"
                href={link.href}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
