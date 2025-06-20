import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import ItemDetailsModal from "../components/ItemDetailsModal";
import type { Item } from "../types/Item";

export default function ViewItems() {
  const [items, setItems] = useState<Item[]>([]);
  const [selected, setSelected] = useState<Item | null>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("items") || "[]") as Item[];
    setItems(stored);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Items</h2>

      {items.length === 0 ? (
        <p className="text-gray-600">No items yet. Add one!</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((it) => (
            <ItemCard key={it.id} item={it} onClick={() => setSelected(it)} />
          ))}
        </div>
      )}

      <ItemDetailsModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
