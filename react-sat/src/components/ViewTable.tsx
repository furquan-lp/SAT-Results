import { useEffect, useState } from "react";

import { Card, Typography } from "@material-tailwind/react";

export default function ViewTable() {
  const [tableData, setTableData] = useState<[{
    id: number, name: string, address: string, city: string, country: string,
    pincode: number, score: number, passed: boolean
  }] | null>(null);

  useEffect(() => {
    (async () => {
      const tx = await fetch(`${import.meta.env.VITE_BACKEND_URL}/results`);
      const data = await tx.json();
      setTableData(data);
    })();
  }, []);

  const TABLE_HEAD = ["S.No.", "Name", "Address", "City", "Country", "Pincode", "Score", "Passed"];
  const TABLE_ROWS = tableData;
  return (
    <>
      {tableData === null ? <span className='mx-1 my-2 md:mx-2 md:my-4 text-lg'>Fetching...</span> :
        <Card className="h-full overflow-scroll mx-1 md:mx-2 shadow">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-gray-200 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS!.map(({ id, name, address, city, country, pincode, score, passed }) => {
                const classes = "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={id} className="even:bg-slate-50/50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {address}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {city}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {country}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pincode}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {score + '%'}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {passed ? 'Yes' : 'No'}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>}
    </>
  );
}