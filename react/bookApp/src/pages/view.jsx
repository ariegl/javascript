import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState(null);

  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return (
      <Layout>
        <div>Item not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div>
        <h1>{item?.title}</h1>
        <div>
          {item?.cover ? (
            <img src={item.cover} alt={item.title} width="300" />
          ) : (
            ""
          )}
        </div>
        <div>{item?.author}</div>
        <div>{item?.intro}</div>
        <div>{item?.completed ? "leido" : "sin leer"}</div>
        <div>{item?.review}</div>
      </div>
    </Layout>
  );
}
