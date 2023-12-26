/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { HTMLAttributes, ImgHTMLAttributes } from "react";

export function Card({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="bg-gray-50 rounded p-4 text-gray-900 space-y-2 flex flex-col justify-between"
    >
      {children}
    </div>
  );
}

export function CardImage(props: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className="h-40 w-full object-cover rounded" {...props} />;
}

export function CardTitle({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <h2 {...props} className="font-semibold text-2xl">
      {children}
    </h2>
  );
}

export function CardBody({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}

export function CardContent({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="space-y-1" {...props}>
      {children}
    </div>
  );
}

export function CardActions({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div {...props}>{children}</div>;
}
