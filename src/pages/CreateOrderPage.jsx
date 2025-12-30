import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getToys } from "../api/toys";
import { useState } from "react";

export default function CreateOrderPage() {
   const [childName, setChildName] = useState("");
   const [country, setCountry] = useState("");
   const [toyId, setToyId] = useState("");
   const [priority, setPriority] = useState("Normal");

   const {
      data: toys = [],
      isLoading,
      isError,
   } = useQuery({
      queryKey: ["toys"],
      queryFn: getToys,
   });

   return (
      <main className="main-container">
         <div className="header">
            <div>
               <h1>Create Order</h1>
               <p className="sub">Static form layout + example validation messages (UI-only).</p>
            </div>
            <Link className="btn" to="/orders">
               ← Back to Orders
            </Link>
         </div>

         <section className="card">
            <h3>Create New Order</h3>

            <form className="form" method="get">
               <div className="field">
                  <label htmlFor="childName">Child Name (min 2 chars) *</label>
                  <input
                     id="childName"
                     name="childName"
                     type="text"
                     minLength="2"
                     required
                     value={childName}
                     onChange={(e) => setChildName(e.target.value)}
                  />
                  {/* Example validation block (static mock) */}
                  <div className="validation" aria-live="polite">
                     Example: “Child name must be at least 2 characters.”
                  </div>
               </div>

               <div className="field">
                  <label htmlFor="country">Country *</label>
                  <input
                     id="country"
                     name="country"
                     type="text"
                     required
                     value={country}
                     onChange={(e) => setCountry(e.target.value)}
                  />
               </div>

               <div className="field">
                  <label htmlFor="toyId">Toy *</label>
                  <select id="toyId" name="toyId" required value={toyId} onChange={(e) => setToyId(e.target.value)}>
                     <option value="">{isLoading ? "Loading toys..." : "Select a toy..."}</option>
                     {!isError &&
                        toys.map((toy) => (
                           <option key={toy.id} value={toy.id}>
                              {toy.name}
                           </option>
                        ))}
                  </select>
                  <div className="help">Toy options will come from the Toys module in React.</div>
               </div>

               <div className="field">
                  <label htmlFor="priority">Priority</label>
                  <select
                     id="priority"
                     name="priority"
                     required
                     value={priority}
                     onChange={(e) => setPriority(e.target.value)}
                  >
                     <option value="Low">Low</option>
                     <option value="Normal">Normal</option>
                     <option value="High">High</option>
                  </select>
               </div>

               <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button className="btn primary" type="submit">
                     Create Order
                  </button>
                  <Link className="btn" to="/orders">
                     Cancel
                  </Link>
               </div>

               <p className="footer-note">
                  In React: form state + validation + on submit create order and redirect to /orders.
               </p>
            </form>
         </section>
      </main>
   );
}
