/* eslint-disable @next/next/no-img-element */
import { Avatar } from "@/components/avatar";
import {
  DropDown,
  DropDownItem,
  DropDownSeparator,
} from "@/components/dropdown";

export function Navbar() {
  return (
    <header className="bg-white">
      <div className="mx-auto container w-full  text-black flex justify-between">
        <div className="flex items-center">
          <img alt="logo image" src="/logo.png" className="w-16 h-16 rounded" />
          <span className="text-xl font-bold">BurritoShopOnline</span>
        </div>

        <nav className="flex items-center gap-6">
          <a className="hover:text-orange-600" href="#">
            HOME
          </a>
          <a className="hover:text-orange-600" href="#">
            ABOUT
          </a>
          <a className="hover:text-orange-600" href="#">
            CONTACT
          </a>
          <a className="hover:text-orange-600" href="#">
            PRICING
          </a>
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
        </div>
      </div>
    </header>
  );
}
