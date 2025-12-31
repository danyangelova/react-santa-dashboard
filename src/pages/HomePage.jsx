import { useQuery } from "@tanstack/react-query";
import { getToys } from "../api/toys";
import { getOrders } from "../api/orders";
import { getElves } from "../api/elves";

export default function HomePage() {
   const toysQuery = useQuery({
      queryKey: ["toys"],
      queryFn: getToys,
   });
   const ordersQuery = useQuery({
      queryKey: ["orders"],
      queryFn: getOrders,
   });
   const elvesQuery = useQuery({
      queryKey: ["elves"],
      queryFn: getElves,
   });

   const isLoading = toysQuery.isLoading || ordersQuery.isLoading || elvesQuery.isLoading;
   const error = toysQuery.error || ordersQuery.error || elvesQuery.error;

   const totalToys = toysQuery.data?.length ?? 0;

   const pendingOrders = ordersQuery.data?.filter((o) => o.status === "Pending").length ?? 0;

   const activeElves = elvesQuery.data?.length ?? 0;

   if (isLoading) {
      return (
         <main className="main-container">
               <h1>Christmas Status</h1>
               <div className="footer-note">Loading dashboard…</div>
         </main>
      );
   }

   if (error) {
      return (
         <main className="main-container">
               <h1>Christmas Status</h1>
               <div className="footer-note">Error: {error.message}</div>
         </main>
      );
   }
   return (
      <main className="main-container">
         <div className="header">
            <h1>Christmas Status</h1>

            <div className="pill">
               ⏳ Countdown: <strong>—</strong>
            </div>
         </div>

         <section className="kpi-row" aria-label="Summary cards">
            <article className="card kpi-card">
               <h3>Total Toys</h3>
               <div className="kpi-value">{totalToys}</div>
            </article>

            <article className="card kpi-card">
               <h3>Pending Orders</h3>
               <div className="kpi-value">{pendingOrders}</div>
            </article>

            <article className="card kpi-card">
               <h3>Active Elves</h3>
               <div className="kpi-value">{activeElves}</div>
            </article>
         </section>

         <section className="card notice-board">
            <h3>Workshop Notice Board</h3>

            <div className="notices">
               <div className="notice">
                  <span className="dot"></span>
                  <p>Notice</p>
               </div>
               <div className="notice">
                  <span className="dot"></span>
                  <p>Notice 2</p>
               </div>
            </div>
         </section>

         <p className="footer-note">Static UI only. In React, data will be loaded with React Query.</p>
      </main>
   );
}
