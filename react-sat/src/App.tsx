import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [viewMode, setViewMode] = useState<string>('view');
  console.log(viewMode)
  return (
    <main>
      <Header setMode={setViewMode} />
    </main>
  );
}

export default App;
