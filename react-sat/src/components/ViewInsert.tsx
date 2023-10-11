import { MouseEventHandler, useRef, useState } from "react";

function validateSATRef(SAT: {
  name: string, address: string, city: string, country: string, pincode: number, score: number,
}): boolean {
  if (SAT.name.length < 1 || SAT.address.length < 1 || SAT.city.length < 1 || SAT.country.length < 1 || SAT.pincode < 1
    || SAT.score < 0) {
    return false;
  } else {
    return true;
  }
}

function SubmitButton({ submitted, handleSubmit }: { submitted: number | null, handleSubmit: MouseEventHandler }) {
  if (submitted === null) {
    return (
      <button className='bg-slate-500 hover:bg-slate-400 px-2 p-1 shadow text-white mt-6' onClick={handleSubmit}>
        Submit
      </button>
    );

  } else if (submitted === 1) {
    return (
      <button className='bg-slate-400 px-2 p-1 shadow text-white mt-6' disabled>
        Submitted
      </button>
    );
  } else if (submitted === 0) {
    return (
      <button className='bg-red-400 px-2 p-1 shadow text-white mt-6' disabled>
        Server Error
      </button>
    );
  } else if (submitted === 2) {
    return (
      <button className='bg-slate-500 px-2 p-1 shadow text-white mt-6' disabled>
        Submitting
      </button>
    );
  } else {
    return (
      <button className='bg-orange-300 border-orange-400 px-2 p-1 shadow text-slate-600 mt-6' disabled>
        Error in Submitting
      </button>
    );
  }
}

export default function ViewInsert() {
  let currentSATResult = useRef<{
    name: string, address: string, city: string, country: string, pincode: number, score: number,
  }>({
    name: '', address: '', city: '', country: '', pincode: -1, score: -1
  });
  const [submitted, setSubmitted] = useState<number | null>(null);

  const handleSubmit = () => {
    if (validateSATRef(currentSATResult.current)) {
      (async () => {
        setSubmitted(2);
        let tx = await fetch(`${import.meta.env.VITE_BACKEND_URL}/results`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(currentSATResult.current)
        })
        if (tx.status === 200) {
          setSubmitted(1);
        } else {
          setSubmitted(0);
        }
        setTimeout(() => {
          setSubmitted(null);
        }, 2000);
      })();
    } else {
      setTimeout(() => {
        setSubmitted(null);
      }, 1000)
      setSubmitted(-1);
    }
  }

  return (
    <article className='flex flex-col mx-1 my-6 md:mx-28 xl:mx-80 2xl:mx-96 gap-y-2 p-4 bg-slate-100 shadow
     items-center text-lg'>
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
      <SubmitButton submitted={submitted} handleSubmit={handleSubmit} />
    </article>
  );
}