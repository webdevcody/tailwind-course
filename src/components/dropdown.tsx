import React, { HTMLAttributes, ReactNode, useContext, useState } from "react";
import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export function DropDownItem({ children }: HTMLAttributes<HTMLDivElement>) {
  const setIsOpen = useContext(IsOpenContext);
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="hover:bg-gray-200 rounded p-2"
    >
      {children}
    </div>
  );
}

export function DropDownSeparator() {
  return <hr className="my-2" />;
}

const IsOpenContext = React.createContext((v: boolean) => undefined);

export function DropDown({
  children,
  toggle,
}: HTMLAttributes<HTMLDivElement> & { toggle: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  const handleClickInside = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <IsOpenContext.Provider
      value={(v) => {
        setIsOpen(v);
      }}
    >
      <div ref={ref} className="relative">
        <button onClick={handleClickInside}>{toggle}</button>

        {isOpen && (
          <div className="absolute top-14 left-0 bg-white rounded text-black p-4 shadow-sm shadow-gray-300">
            {children}
          </div>
        )}
      </div>
    </IsOpenContext.Provider>
  );
}
