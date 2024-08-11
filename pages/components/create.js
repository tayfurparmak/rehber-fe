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
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Ad
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setAd(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Soyad
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setSoyad(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  GSM
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setGsm(e.target.value)}
                />
              </div>

              <div className="flex justify-between">
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
          </div>
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
