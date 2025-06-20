// import React from "react";
import type  { Item } from "../types/Item";

interface Props {
  item: Item;
  onClick: () => void;
}

export default function ItemCard({ item, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded shadow hover:shadow-lg transition flex flex-col"
    >
      <img
        src={item.cover}
        alt={item.name}
        className="h-40 w-full object-cover rounded-t"
      />
      <div className="p-3 text-left">
        <h3 className="font-semibold">{item.name}</h3>
      </div>
    </button>
  );
}
