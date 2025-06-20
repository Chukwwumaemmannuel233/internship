import { Routes, Route, Link } from "react-router-dom";
import AddItem from "./pages/AddItem";
import ViewItems from "./pages/ViewItems";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">🧥 Items Inventory</h1>
        <div className="space-x-4">
          <Link to="/">View Items</Link>
          <Link to="/add">Add Item</Link>
        </div>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </div>
  );
}
