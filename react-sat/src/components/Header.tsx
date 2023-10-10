export default function Header() {
  return (
    <header className='flex justify-between bg-slate-600 text-white p-2 m-2'>
      <span className='md:text-2xl font-mono select-none'>SAT_Result</span>
      <select className='bg-slate-500 p-1'>
        <option value='view'>View all data</option>
        <option value='insert'>Insert data</option>
        <option value='get'>Get rank</option>
        <option value='update'>Update score</option>
        <option value='delete'>Delete data</option>
      </select>
    </header>
  );
}