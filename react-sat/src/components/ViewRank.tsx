import { useEffect, useState } from "react";

async function computeRank(name: string): Promise<number> {
  let data: any[] = [];
  const tx = await fetch(`${import.meta.env.VITE_BACKEND_URL}/results`);
  if (tx.status === 200) {
    data = await tx.json();
    data.sort((e1, e2) => {
      return e1.score > e2.score ? -1 : 1;
    });
    const index = data.indexOf(data.find(e => e.name === name));
    console.log('i was', index)
    return index >= 0 ? index + 1 : -1;
  } else {
    return -1;
  }
}

export default function ViewRank({ term }: { term: string }) {
  if (term === null || term.length < 1) {
    return <></>;
  } else {
    const [currentResult, setCurrentResult] = useState<{
      id: number, name: string, address: string, city: string, country: string,
      pincode: number, score: number, passed: boolean
    } | null>(null);
    const [rank, setRank] = useState<number | null>(null);

    useEffect(() => {
      (async () => {
        const tx = await fetch(`${import.meta.env.VITE_BACKEND_URL}/results/${term}`);
        if (tx.status === 200) {
          const data = await tx.json();
          setCurrentResult(data);
          const r = await computeRank(term);
          setRank(r);
        } else {
          setCurrentResult(null);
        }
      })();
    }, [term]);

    if (currentResult === null) {
      return <div className='mx-2 my-6 text-slate-400'>No results found.</div>;
    } else {
      return (
        <article className='flex flex-col mx-2 md:my-6 md:mx-96 bg-slate-100 shadow p-4 text-lg'>
          <span className='text-center text-xl bg-white rounded-md p-1 mb-2'>Rank: {rank}</span>
          <span>Name: {currentResult.name}</span>
          <span>Address: {currentResult.address}</span>
          <span>City: {currentResult.city}</span>
          <span>Country: {currentResult.country}</span>
          <span>Pincode: {currentResult.pincode}</span>
          <span>Score: {currentResult.score}%</span>
          <span>Passed: {currentResult.passed ? 'Yes' : 'No'}</span>
        </article>
      );
    }
  }
}