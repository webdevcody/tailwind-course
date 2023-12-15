/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { User } from "lucide-react";
import { useLayoutEffect, useState } from "react";

export function Avatar({ src }: { src: string }) {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsLoading(false);
    };
    image.src = src;
  }, [src]);

  return (
    <>
      <div
        className={clsx(
          "flex justify-center items-center bg-gray-50 rounded-full p-2 w-12 h-12 text-black",
          {
            hidden: !isLoading,
          }
        )}
      >
        <User />
      </div>
      <img
        className={clsx("text-black w-12 h-12 rounded-full", {
          hidden: isLoading,
        })}
        src={src}
        alt="an avatar image"
      />
    </>
  );
}
