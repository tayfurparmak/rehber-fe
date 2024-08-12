import List from "./components/list";
import { useState } from "react";
import Create from "./components/create";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const addNew = async () => {
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500">
      <h1 className="text-4xl font-extrabold text-black mb-8 font-sans">
        Rehber Uygulaması
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex relative shadow-xl sm:rounded-lg">
          <div className="overflow-auto shadow-xl sm:rounded-lg">
            <table className="w-[750px] text-left text-gray-500 dark:text-gray-400">
              <List />
              <Create show={showModal} onClose={closeModal} />
            </table>
          </div>
        </div>
        <button
        onClick={() => addNew()}
        type="button"
        className="ml-4 px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Yeni Ekle
      </button>
      </div>
  
    </div>
  );
}
