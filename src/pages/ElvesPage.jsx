import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getElves } from "../api/elves";

export default function ElvesPage() {
   const {
      data: elves,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["elves"],
      queryFn: getElves,
   });

   if (isLoading) return <main className="main-container">Loading elves...</main>;
   if (error) return <main className="main-container">Error: {error.message}</main>;

   return (
      <main className="main-container">
         <div className="header">
            <div>
               <h1>Elves</h1>
            </div>
            <span style={{ fontSize: "12px" }} className="pill">
               🧝 Energy: 0–100
            </span>
         </div>

         <table className="table" aria-label="Elves table">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Energy</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               {elves.map((elf) => (
                  <tr key={elf.id}>
                     <td>{elf.name}</td>
                     <td>{elf.role}</td>
                     <td>{elf.energy}</td>
                     <td>
                        <Link className="btn ghost" to={`/elves/${elf.id}`}>
                           Profile
                        </Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </main>
   );
}
