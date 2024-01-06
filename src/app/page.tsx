"use client";

import { Button } from "@/components/button";
import {
  Card,
  CardActions,
  CardBody,
  CardContent,
  CardImage,
  CardTitle,
} from "@/components/card";
import { Navbar } from "@/components/navbar";
import { ToolTip } from "@/components/tool-tip";

const items = [
  {
    name: "Burrito Supreme",
    cost: "9.99",
    image: "/burrito.jpeg",
    description:
      "a yummy burrito with tons of cheese and beef, it will clog your arteries",
  },
  {
    name: "Taco",
    image: "/taco.jpeg",
    cost: "4.99",
    description: "a yummy taco",
  },
  {
    name: "Burrito Supreme",
    cost: "9.99",
    image: "/burrito.jpeg",
    description:
      "a yummy burrito with tons of cheese and beef, it will clog your arteries",
  },
  {
    name: "Burrito Supreme",
    cost: "9.99",
    image: "/burrito.jpeg",
    description:
      "a yummy burrito with tons of cheese and beef, it will clog your arteries",
  },
  {
    name: "Burrito Supreme",
    cost: "9.99",
    image: "/burrito.jpeg",
    description:
      "a yummy burrito with tons of cheese and beef, it will clog your arteries",
  },
];

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Navbar />

      <div className="container mx-auto pt-24">
        <ul className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <Card key={idx}>
              <CardContent>
                <CardImage src={item.image} />
                <CardTitle>{item.name}</CardTitle>
                <CardBody>
                  {item.description}
                  <br />${item.cost}
                  <ToolTip>Allergy info: contains Dairy and Eggs</ToolTip>
                </CardBody>
              </CardContent>
              <CardActions>
                <Button className="w-full">Buy</Button>
              </CardActions>
            </Card>
          ))}
        </ul>
      </div>
    </main>
  );
}
