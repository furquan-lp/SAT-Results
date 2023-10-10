import { useEffect, useState } from "react";

function Message({ updated, searchTerm, score }: { updated: boolean | null, searchTerm: string, score: number | null }) {
  if (searchTerm.length < 1) return <></>;

  if (updated === null) {
    return (
      <div className='text-slate-600'>Updating.</div>
    );
  } else if (updated) {
    return (
      <div className='text-slate-700'>Successfully updated score for '{searchTerm}' to {score}.</div>
    );
  } else {
    return (
      <div className='text-slate-500'>Not found.</div>
    );
  }
}

export default function ViewUpdate({ searchTerm }: { searchTerm: string }) {
  const [updated, setUpdated] = useState<boolean | null>(null);
  const [newScore, setNewScore] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      let tx = await fetch(`http://localhost:8080/results/${searchTerm}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ score: newScore })
      })
      if (tx.status === 200) {
        setUpdated(true);
      } else {
        setUpdated(false);
      }
    })();
  }, [searchTerm]);

  return (
    <article className='flex flex-col mx-2 my-6 gap-2'>
      <span>
        Enter the new percentage score: <input className='p-1 bg-blue-50 w-10' placeholder="90" onChange={(e) =>
          setNewScore(Number(e.target.value))} />%
      </span>
      <Message updated={updated} searchTerm={searchTerm} score={newScore} />
    </article>
  )
}