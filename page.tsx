"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addProductToCart } from "./global/redux";

const page = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.reducer.products);
  const url = "https://669a637b9ba098ed61ff7589.mockapi.io/estore";

  const readStore = async () => {
    return await fetch(url, {
      method: "GET",
      cache: "no-cache",
    }).then((res) => {
      return res.json();
    });
  };

  // console.log("hmm: ", readData);

  useEffect(() => {
    readStore().then((res) => {
      // console.log("show: ", res);
      dispatch(addProduct(res));
    });
  }, []);

  // const data = Array.from({ length: 10 });
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
      {data?.map((items: any, i: number) => (
        <div key={i} className="border rounded-md p-1 flex flex-col">
          <Image
            src={items.image}
            alt="My Image"
            width={100}
            height={100}
            className="h-[200px] w-full object-cover rounded-md"
          />

          <div className="flex text-[12px] justify-between mt-2 px-2 ">
            <div className="flex flex-col">
              <h1 className="font-bold ">{items.title}</h1>
              <p className="flex-1">{items.description}</p>
              <p className="font-semibold mt-2 text-[15px]">₦{items.price}</p>
            </div>
            <div className="flex flex-col">
              <Button
                className="text-[12px] mb-2"
                onClick={() => {
                  dispatch(addProductToCart(items));
                }}
              >
                Add To Cart
              </Button>
              <Button variant={"destructive"} className="text-[12px] mb-2">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default page;
