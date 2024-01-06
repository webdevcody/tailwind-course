import { InfoIcon } from "lucide-react";
import { PropsWithChildren } from "react";

export function ToolTip({ children }: PropsWithChildren) {
  return (
    <div className="relative">
      <InfoIcon className="peer cursor-help hover:text-gray-500" />
      <div className="left-7 top-1 absolute peer-hover:block hidden bg-white p-4 rounded border shadow-md">
        {children}
      </div>
    </div>
  );
}
