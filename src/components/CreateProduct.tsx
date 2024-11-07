import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productDate: IProduct = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    // const formData = new FormData(event.currentTarget);
    productDate.title = value;

    if (value.trim().length === 0) {
      setError("Please enter valid title.");
      return;
    }

    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productDate),
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    const data: IProduct = await response.json();

    onCreate(data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage error={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}
