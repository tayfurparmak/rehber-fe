import { useState, useEffect } from "react";
import { useDirectoryStore } from "../states/rehber";
import { add, get } from "../api/rehber";

export default function Create({ show, onClose }) {
  const setDirectorys = useDirectoryStore((s) => s.setDirectorys);
  const [ad, setAd] = useState("");
  const [soyad, setSoyad] = useState("");
  const [gsm, setGsm] = useState("");

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [show]);

  if (!show) return null;

  const save = async () => {
    const result = await add({ ad, soyad , gsm });
    setDirectorys(await get());
    onClose();
  };
  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200" for="username">Ad</label>
                <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                   onChange={(e) => setAd(e.target.value)}/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="soyad">Soyad</label>
                <input id="soyad" type="text"
                 className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                 onChange={(e) => setSoyad(e.target.value)}/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" for="number">GSM</label>
                <input id="number" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  onChange={(e) => setGsm(e.target.value)}/>
            </div>

         
        </div>
        </form>
        <div className="flex justify-between mt-5">
                <button
                  onClick={onClose}
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  İptal
                </button>
                <button
                  onClick={() => save()}
                  type="button"
                  className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Kaydet
                </button>
              </div>
      </div>
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .close-button {
          background: none;
          border: none;
          font-size: 1.2rem;
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
