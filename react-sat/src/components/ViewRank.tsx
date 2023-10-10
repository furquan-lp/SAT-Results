import { useEffect, useState } from "react";

export default function ViewRank({ term }: { term: string }) {
  if (term === null || term.length < 1) {
    return <></>;
  } else {
    const [currentResult, setCurrentResult] = useState<{
      id: number, name: string, address: string, city: string, country: string,
      pincode: number, score: number, passed: boolean
    } | null>(null);

    useEffect(() => {
      (async () => {
        let tx = await fetch(`http://localhost:8080/results/${term}`);
        if (tx.status === 200) {
          let data = await tx.json();
          setCurrentResult(data);
        } else {
          setCurrentResult(null);
        }
      })();
    }, [term]);

    if (currentResult === null) {
      return <div className='mx-2 my-6 text-slate-400'>No results found.</div>;
    } else {
      return (
        <article className='flex flex-col mx-2 bg-slate-200 p-1 rounded-md text-lg'>
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