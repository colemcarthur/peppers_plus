"use client";

import Link from "next/link";

export default function Success({ children }) {
  return (
    <div className="max-w-lg mx-auto h-[80vh] flex flex-col items-center justify-center">
      <div>
        <h1 className="bg-lime-400 rounded-lg text-sm mb-5 w-fit mx-auto px-8 py-4 text-lime-900 font-medium">
          Transaction Successful
        </h1>
        <p className="px-4 text-center">
          We have sent you a confirmation email!
        </p>
      </div>
      <div className="mt-10 text-center">
        <Link
          className="bg-red-800 text-stone-100 font-bold p-4 rounded-3xl text-sm uppercase shadow-sm shadow-black text-center"
          href="/shop"
          draggable={false}
        >
          Return To Shop
        </Link>
      </div>
    </div>
  );
}
