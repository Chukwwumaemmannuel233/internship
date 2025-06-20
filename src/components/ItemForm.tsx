import { useState } from 'react';
import type { Item } from '../types/Item';

interface Props {
  onSave: (item: Omit<Item, 'id'>) => void;
}

export default function ItemForm({ onSave }: Props) {
  const [item, setItem] = useState<Omit<Item, 'id'>>({
    name: '',
    type: '',
    description: '',
    cover: '',
    images: [],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleCover = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setItem((p) => ({ ...p, cover: URL.createObjectURL(file) }));
  };

  const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const urls = Array.from(e.target.files).map((f) =>
        URL.createObjectURL(f)
      );
      setItem((p) => ({ ...p, images: urls }));
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(item);
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <input
        name="name"
        placeholder="Item Name"
        required
        className="w-full border px-4 py-2 rounded"
        value={item.name}
        onChange={handleChange}
      />
      <select
        name="type"
        required
        className="w-full border px-4 py-2 rounded"
        value={item.type}
        onChange={handleChange}
      >
        <option value="">Select Item Type</option>
        <option>Shirt</option>
        <option>Pant</option>
        <option>Shoes</option>
        <option>Sports Gear</option>
      </select>
      <textarea
        name="description"
        placeholder="Item Description"
        required
        className="w-full border px-4 py-2 rounded"
        value={item.description}
        onChange={handleChange}
      />

      <div>
        <label className="block mb-1">Item Cover Image</label>
        <input type="file" accept="image/*" required onChange={handleCover} />
      </div>

      <div>
        <label className="block mb-1">Additional Images</label>
        <input type="file" accept="image/*" multiple onChange={handleImages} />
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Add Item
      </button>
    </form>
  );
}
