import { useRef, useState } from "react";

export default function ViewInsert() {
  let currentSATResult = useRef<{
    name: string, address: string, city: string, country: string, pincode: number, score: number,
  }>({
    name: '', address: '', city: '', country: '', pincode: -1, score: -1
  });
  const [SATResult, setSATResult] = useState<{
    name: string, address: string, city: string, country: string, pincode: number, score: number
  } | null>(null);

  const handleSubmit = () => {
    console.log('submitted', currentSATResult.current)
  }

  return (
    <article className='flex flex-col mx-2 my-6 md:mx-60 xl:mx-80 2xl:mx-96 gap-y-2 p-4 bg-slate-100 rounded shadow items-center text-lg'>
      <h1 className='text-xl font-bold mb-2'>Enter Candidate Details</h1>
      <span className='flex gap-x-5 w-full items-center'>Name:<input className='p-1 w-full border'
        onChange={(e) => currentSATResult.current.name = e.target.value} />
      </span>
      <span className='flex gap-x-1 w-full'>Address:<textarea className='p-1 w-full h-28 border'
        onChange={(e) => currentSATResult.current.address = e.target.value} />
      </span>
      <span className='flex gap-x-10 w-full items-center'>City:<input className='p-1 w-1/2 border'
        onChange={(e) => currentSATResult.current.city = e.target.value} />
      </span>
      <span className='flex gap-x-1 w-full items-center'>Country:<input className='p-1 w-1/2 border'
        onChange={(e) => currentSATResult.current.country = e.target.value} />
      </span>
      <span className='flex gap-x-1 w-full items-center'>Pincode:<input className='p-1 w-1/2 border'
        onChange={(e) => currentSATResult.current.pincode = Number(e.target.value)} />
      </span>
      <span className='flex gap-x-6 w-full items-center'>Score:<input className='p-1 w-1/3 border'
        onChange={(e) => currentSATResult.current.score = Number(e.target.value)} />&#37;
      </span>
      <button className='bg-slate-500 hover:bg-slate-400 px-2 p-1 shadow text-white mt-6' onClick={handleSubmit}>Submit</button>
    </article>
  );
}