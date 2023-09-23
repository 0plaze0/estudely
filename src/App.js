import { useState } from "react";
import List from "./List";
import Data from "./data/db.json";

function App() {
  const [data, setData] = useState(Data);
  return (
    <main className="App">
      <section className="container">
        <h3>Applications</h3>
        <List data={data} />
      </section>
    </main>
  );
}

export default App;
