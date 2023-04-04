import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import BootstrapTable from "react-bootstrap-table-next";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios("https://jsonplaceholder.typicode.com/posts/1/comments").then((res) => setData(res.data))

  };

  const columns = [
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "postId",
      text: "ProductId",
    },
  ];

  return (
    <div className="App">
      <BootstrapTable keyField="id" data={data} columns={columns}/>
    </div>
  );
}

export default App;
