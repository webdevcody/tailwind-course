"use client";

import { Avatar } from "@/components/avatar";
import {
  DropDown,
  DropDownItem,
  DropDownSeparator,
} from "@/components/dropdown";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <DropDown toggle={<Avatar src={"/me.jpeg"} />}>
        <DropDownItem>
          <a href="#">Settings</a>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <a href="#">Logout</a>
        </DropDownItem>
      </DropDown>
    </main>
  );
}
