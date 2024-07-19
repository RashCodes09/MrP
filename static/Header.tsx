"use client";

import Link from "next/link";
import React from "react";
import { MdDoorbell, MdNotifications, MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const Header = () => {
  // contextAPI useContext createContext REDUX
  const cart = useSelector((state: any) => state.reducer.cart);

  // const cart: number[] = [];

  return (
    <main className="flex justify-center w-full h-[50px] border-b">
      <div className="w-[90%] h-full flex items-center justify-between ">
        <div className="flex items-center gap-6">
          <Link href="/">
            <p>Logo</p>
          </Link>
          <section>3</section>
        </div>
        <Link href="/cart">
          <section className="relative">
            {cart?.length > 0 && (
              <p className="absolute -top-2 left-2 text-white text-[8px] uppercase font-bold rounded-full bg-red-600 w-4 h-4 flex items-center justify-center">
                {cart?.length}
              </p>
            )}
            <MdShoppingCart />
          </section>
        </Link>
      </div>
    </main>
  );
};

export default Header;
