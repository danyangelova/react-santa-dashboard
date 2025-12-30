import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../api/orders";
import { useState } from "react";

export default function OrdersPage() {
   const [activeStatus, setActiveStatus] = useState("All");

   const {
      data: orders = [],
      isLoading,
      isError,
      error,
   } = useQuery({
      queryKey: ["orders"],
      queryFn: getOrders,
   });

   const visibleOrders = activeStatus === "All" ? orders : orders.filter((order) => order.status === activeStatus);

   return (
      <main className="main-container">
         <div className="header">
            <div>
               <h1>Orders</h1>
               <p className="sub">Filter by status using tabs (UI-only).</p>
            </div>
            <div className="tabs" role="tablist" aria-label="Order status tabs">
               {["All", "Pending", "Packed", "Shipped"].map((status) => (
                  <button
                     key={status}
                     className={`tab ${activeStatus === status ? "active" : ""}`}
                     type="button"
                     onClick={() => setActiveStatus(status)}
                  >
                     {status}
                  </button>
               ))}
            </div>
         </div>

         {isLoading && <p className="footer-note">Loading orders…</p>}
         {isError && <p className="footer-note">Error: {error?.message || "Failed to load orders."}</p>}

         <table className="table" aria-label="Orders table">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>Child Name</th>
                  <th>Country</th>
                  <th>Status</th>
               </tr>
            </thead>
            <tbody>
               {visibleOrders.map((order) => (
                  <tr key={order.id}>
                     <td>#{order.id}</td>
                     <td>{order.childName}</td>
                     <td>{order.country}</td>
                     <td>
                        <span
                           className={`badge ${
                              order.status === "Pending" ? "medium" : order.status === "Packed" ? "easy" : "hard"
                           }`}
                        >
                           {order.status}
                        </span>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         <div className="actions">
            <Link style={{ marginTop: "12px" }} to="/orders/new" className="btn primary">
               ＋ New Order
            </Link>
         </div>

         <p className="footer-note">In React: tabs will control state + React Query will load filtered data.</p>
      </main>
   );
}
