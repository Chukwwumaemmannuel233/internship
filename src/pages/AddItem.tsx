import ItemForm from '../components/ItemForm';
import { useNavigate } from 'react-router-dom';
import type { Item } from '../types/Item';
import { useState } from 'react';

export default function AddItem() {
  const nav = useNavigate();
  const [success, setSuccess] = useState(false);

  const save = (data: Omit<Item, 'id'>) => {
    const stored = JSON.parse(localStorage.getItem('items') || '[]') as Item[];
    localStorage.setItem(
      'items',
      JSON.stringify([...stored, { ...data, id: Date.now() }])
    );
    setSuccess(true);
    setTimeout(() => nav('/'), 1500);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      {success && (
        <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">
          ✅ Item successfully added!
        </div>
      )}
      <ItemForm onSave={save} />
    </div>
  );
}
