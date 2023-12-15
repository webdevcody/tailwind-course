"use client";

import { Avatar } from "@/components/avatar";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      {/* <Button
        onClick={() => {
          console.log("clicked");
        }}
        disabled={true}
        loading={true}
      >
        Click Me
      </Button> */}
      <Avatar src={"/me.jpeg"} />
    </main>
  );
}
