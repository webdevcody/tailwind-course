import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function Button({
  children,
  className,
  loading,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) {
  return (
    <button
      className={twMerge(
        "bg-cyan-600 px-4 py-2 text-white rounded hover:bg-cyan-700 disabled:bg-gray-400 disabled:text-gray-600",
        className
      )}
      {...props}
    >
      {loading && (
        <div
          className="mr-1 inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
      {children}
    </button>
  );
}
