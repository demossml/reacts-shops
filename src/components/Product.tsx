import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct; // Исправлено название свойства на "product"
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400";
  const btnClass = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <p className="font-bold"> {product.price} </p>
      <button
        className={btnClass.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p>
            Rate:{" "}
            <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
}
