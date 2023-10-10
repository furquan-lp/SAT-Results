import { useState } from "react";

import Header from "./components/Header";
import ViewTable from "./components/ViewTable";
import ViewRank from "./components/ViewRank";
import ViewDelete from "./components/ViewDelete";
import ViewUpdate from "./components/ViewUpdate";

function SwitchViews({ mode, searchTerm }: { mode: string, searchTerm: string }) {
  switch (mode) {
    case 'view': return <ViewTable />;
    case 'get': return <ViewRank term={searchTerm} />;
    case 'update': return <ViewUpdate searchTerm={searchTerm} />
    case 'delete': return <ViewDelete searchTerm={searchTerm} />
    default: return <h1 className='m-2 text-lg'>Unknown view: {mode}</h1>;
  }
}

function App() {
  const [viewMode, setViewMode] = useState<string>('view');
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <main>
      <Header setMode={setViewMode} mode={viewMode} setSearch={setSearchTerm} />
      <SwitchViews mode={viewMode} searchTerm={searchTerm} />
    </main>
  );
}

export default App;
