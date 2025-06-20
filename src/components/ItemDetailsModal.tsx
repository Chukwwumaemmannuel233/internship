import { Dialog } from "@headlessui/react";
import type { Item } from "../types/Item";
import Carousel from "./Carousel";

interface Props {
  item: Item | null;
  onClose: () => void;
}

export default function ItemDetailsModal({ item, onClose }: Props) {
  if (!item) return null;

  return (
    <Dialog open={!!item} onClose={onClose} className="fixed inset-0 z-50">
      {/* backdrop */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      {/* panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white max-w-lg w-full rounded-xl p-6 space-y-4">
          <Dialog.Title className="text-xl font-bold">{item.name}</Dialog.Title>

          <p className="text-sm text-gray-500">{item.type}</p>
          <p>{item.description}</p>

          <Carousel images={[item.cover, ...item.images]} />

          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            onClick={() => alert("Enquiry sent (stub)")}
          >
            Enquire
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
