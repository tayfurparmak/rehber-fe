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
    <div className="flex justify-between p-3 m-4  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-800">
      <div>{props.data.ad}</div>
      <div>{props.data.soyad}</div>
      <div>{props.data.gsm}</div>
      <div>
        <button
          onClick={() => rem(props.data.id)}
          type="button"
          className="px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Sil
        </button>
      </div>
    </div>
  );
}
