import { get } from "../api/rehber";
import { useEffect } from "react";
import Item from "./item";
import { useDirectoryStore } from "../states/rehber";

export default function List() {
  const directorys = useDirectoryStore((s) => s.directorys);
  const setDirectorys = useDirectoryStore((s) => s.setDirectorys);

  useEffect(() => {
    (async () => {
      setDirectorys(await get());
    })();

    return () => {};
  }, [setDirectorys]);
  return (
    <div>
      {directorys.map((item, i) => (
        <Item key={i} data={item} />
      ))}
    </div>
  );
}
