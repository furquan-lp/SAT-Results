import { useRef } from "react";

function getButtonLabel(mode: string): string {
  switch (mode) {
    case 'delete': return 'Delete';
    case 'update': return 'Update';
    default: return 'Search';
  }
}

export default function Header({ setMode, setSearch, mode }: { setMode: Function, setSearch: Function, mode: string }) {
  let searchQuery = useRef('');
  return (
    <header className='flex justify-between bg-slate-600 text-white p-2 m-2'>
      <span className='flex items-center justify-center gap-3'>
        <span className='md:text-2xl font-mono select-none'>SAT Result</span>
        {mode === 'get' || mode === 'update' || mode === 'delete'
          ? <span className='flex gap-1 items-center'>
            <input type='text' placeholder='Type a name to search...' className='p-1 my-0.5 text-slate-700'
              onChange={(e) => searchQuery.current = e.target.value} />
            <button className='bg-slate-500 hover:bg-slate-400 px-3 h-8 text-lg'
              onClick={() => setSearch(searchQuery.current)}>{getButtonLabel(mode)}</button>
          </span> : null}

      </span>
      <select className='bg-slate-500 p-1' onChange={(e) => {
        setMode(e.target.value);
        setSearch('');
      }}>
        <option value='view'>View all data</option>
        <option value='insert'>Insert data</option>
        <option value='get'>Get rank</option>
        <option value='update'>Update score</option>
        <option value='delete'>Delete data</option>
      </select>
    </header>
  );
}