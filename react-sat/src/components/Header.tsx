import { MouseEventHandler, useRef } from "react";
import { FiSearch, FiDelete, FiCheck, FiGithub } from 'react-icons/fi';

function getPlaceholder(mode: string): string {
  switch (mode) {
    case 'delete': return 'Type a name to delete...';
    case 'update': return 'Type a name to update...';
    default: return 'Type a name to search...';
  }
}

function SearchButton({ mode, onClick }: { mode: string, onClick: MouseEventHandler }) {
  switch (mode) {
    case 'delete': return <button className='flex items-center p-2 bg-amber-600 hover:bg-amber-500'
      onClick={onClick}><FiDelete /></button>;
    case 'update': return <button className='flex items-center p-2 bg-teal-500 hover:bg-teal-400'
      onClick={onClick}><FiCheck /></button>;
    default: return <button className='flex items-center p-2 bg-slate-500 hover:bg-slate-400' onClick={onClick}>
      <FiSearch />
    </button>;
  }
}

export default function Header({ setMode, setSearch, mode }: { setMode: Function, setSearch: Function, mode: string }) {
  let searchQuery = useRef('');
  return (
    <header className='flex justify-between bg-slate-600 text-white p-2 m-1 md:m-2'>
      <span className='flex items-center justify-center gap-3'>
        <span className='hidden md:block md:text-2xl font-mono select-none'>SAT Result</span>
        {mode === 'get' || mode === 'update' || mode === 'delete'
          ? <span className='flex gap-1 items-center'>
            <input type='text' placeholder={getPlaceholder(mode)} className='p-1 my-0.5 text-slate-700'
              onChange={(e) => searchQuery.current = e.target.value} />
            <SearchButton mode={mode} onClick={() => setSearch(searchQuery.current)} />
          </span> : null}

      </span>
      <span className='flex md:gap-x-1'>
        <select className='bg-slate-500 px-1 md:py-1' onChange={(e) => {
          setMode(e.target.value);
          setSearch('');
        }}>
          <option value='view'>View all data</option>
          <option value='insert'>Insert data</option>
          <option value='get'>Get rank</option>
          <option value='update'>Update score</option>
          <option value='delete'>Delete data</option>
        </select>
        <a className='hidden md:flex items-center p-2 bg-slate-700 hover:bg-slate-500'
          href='https://github.com/furquan-lp/SAT-Results'><FiGithub /></a>
      </span>
    </header>
  );
}