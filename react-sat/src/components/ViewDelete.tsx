import { useEffect, useState } from "react";

export default function ViewDelete({ searchTerm }: { searchTerm: string }) {
  const [deleted, setDeleted] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const tx = await fetch(`${import.meta.env.VITE_BACKEND_URL}/results/${searchTerm}`, {
        method: "DELETE"
      });
      if (tx.status === 200) {
        setDeleted(true);
      } else {
        setDeleted(false);
      }
    })();
  }, [searchTerm]);

  if (searchTerm.length < 1) return <></>;

  if (deleted === null) {
    return (
      <div className='mx-2 my-6 text-slate-600'>Deleting.</div>
    );
  } else if (deleted) {
    return (
      <div className='mx-2 my-6 text-slate-700'>Successfully Deleted '{searchTerm}'.</div>
    );
  } else {
    return (
      <div className='mx-2 my-6 text-slate-500'>Not found.</div>
    );
  }
}