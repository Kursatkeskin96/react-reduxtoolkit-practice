"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement} from '../lib/counterSlice'

export default function Products() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="text-center">
        <Image
          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
          width={200}
          height={200}
          alt="top"
          className="mx-auto"
        />
        <div className="mt-4">Mens Casual Premium Slim Fit T-Shirts</div>
        <div className="mt-2 text-sm text-gray-600">12£</div>
        <div className="flex justify-center gap-6 mt-2 items-center">

          <button
            onClick={() => dispatch(decrement())}
            className="bg-gray-600 text-white w-16 rounded-lg"
          >
            -
          </button>
          <div>{count}</div>
          <button
            onClick={() => dispatch(increment())}
            className="bg-gray-600 text-white w-16 rounded-lg"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
