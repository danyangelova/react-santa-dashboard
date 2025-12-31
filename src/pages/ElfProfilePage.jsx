import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getElfDetails } from "../api/elves";
import { useEffect, useState } from "react";

export default function ElfProfilePage() {
   const { elfId } = useParams();

   const {
      data: elf,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["elves", elfId],
      queryFn: () => getElfDetails(elfId),
   });

   const [energy, setEnergy] = useState(0);

   useEffect(() => {
      if (elf) setEnergy(elf.energy);
   }, [elf]);

   if (isLoading) return <main className="main-container">Loading profile...</main>;
   if (error) return <main className="main-container">Error: {error.message}</main>;

   return (
      <main className="main-container">
         <div className="header">
            <div></div>
            <Link className="btn" to="/elves">
               ← Back to Elves
            </Link>
         </div>

         <section className="card">
            <div className="meta">
               <h2>{elf.name}</h2>
               <div>Role: {elf.role}</div>
               <div>
                  <span>Energy: </span>
                  <strong>{energy}</strong>
               </div>
            </div>

            <div style={{ marginTop: "14px" }}>
               <button
                  className="btn primary"
                  type="button"
                  onClick={() => setEnergy((energy) => Math.min(100, energy + 10))}
               >
                  Boost Energy +10
               </button>
               <span className="pill">Max 100</span>
            </div>

            {/* Tabs */}
            <div className="tabs" style={{ marginTop: "20px" }}>
               <Link className="tab active" to="">
                  Profile
               </Link>
               <Link className="tab" to="tasks">
                  Tasks
               </Link>
            </div>

            {/* ElfTasksPage renders in here*/}
            <Outlet />
         </section>
      </main>
   );
}
