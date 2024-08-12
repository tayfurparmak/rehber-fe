import { remove } from "../api/rehber";
import { useDirectoryStore } from "../states/rehber";
import { get } from "../api/rehber";

export default function Item(props) {
  const setDirectorys = useDirectoryStore((s) => s.setDirectorys);

  const rem = async (id) => {
    if (confirm("Emin misiniz? ")) {
      await remove(id);
      setDirectorys(await get());
    }
  };

  return (
    <div className="flex justify-between p-4 m-4 bg-gradient-to-r from-gray-500 via-purple-600 to-gray-700 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="text-white font-semibold">{props.data.ad}</div>
      <div className="text-white font-semibold">{props.data.soyad}</div>
      <div className="text-white font-semibold">{props.data.gsm}</div>
      <div>
        <button
          onClick={() => rem(props.data.id)}
          type="button"
          className="px-4 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700"
        >
          Sil
        </button>
      </div>
    </div>
  );
}
