import { Link, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getToys } from "../api/toys";
import { createOrder } from "../api/orders";
import { useState } from "react";

export default function CreateOrderPage() {
   const [childName, setChildName] = useState("");
   const [country, setCountry] = useState("");
   const [toyId, setToyId] = useState("");
   const [priority, setPriority] = useState("Normal");
   const [errors, setErrors] = useState({});

   const navigate = useNavigate();
   const queryClient = useQueryClient();

   const {
      data: toys = [],
      isLoading,
      isError,
   } = useQuery({
      queryKey: ["toys"],
      queryFn: getToys,
   });

   const createMutation = useMutation({
      mutationFn: createOrder,
      onSuccess: async () => {
         await queryClient.invalidateQueries({ queryKey: ["orders"] });
         navigate("/orders");
      },
   });

   function validate() {
      const nextErrors = {};

      if (childName.trim().length < 2) {
         nextErrors.childName = "Child name must be at least 2 characters.";
      }

      if (country.trim().length === 0) {
         nextErrors.country = "Country is required.";
      }

      if (!toyId) {
         nextErrors.toyId = "Please select a toy.";
      }

      setErrors(nextErrors);
      return Object.keys(nextErrors).length === 0;
   }

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

            <form
               className="form"
               onSubmit={(e) => {
                  e.preventDefault();
                  const ok = validate();
                  if (!ok) return;

                  const newOrder = {
                     // id: `O-${Date.now()}`,
                     id: `O-${Math.floor(100 + Math.random() * 900)}`,
                     childName: childName.trim(),
                     country: country.trim(),
                     status: "Pending",
                     toyId,
                     priority,
                  };
                  createMutation.mutate(newOrder);
               }}
               noValidate
            >
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

                  {errors.childName && (
                     <div className="validation" aria-live="polite">
                        {errors.childName}
                     </div>
                  )}
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

                  {errors.country && (
                     <div className="validation" aria-live="polite">
                        {errors.country}
                     </div>
                  )}
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
                  {errors.toyId && (
                     <div className="validation" aria-live="polite">
                        {errors.toyId}
                     </div>
                  )}
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
                  {/* <button className="btn primary" type="submit">
                     Create Order
                  </button> */}
                  <button className="btn primary" type="submit" disabled={createMutation.isPending}>
                     {createMutation.isPending ? "Creating..." : "Create Order"}
                  </button>
                  <Link className="btn" to="/orders">
                     Cancel
                  </Link>
               </div>

               {createMutation.isError && (
                  <p className="footer-note">Error: {createMutation.error?.message || "Failed to create order."}</p>
               )}
            </form>
         </section>
      </main>
   );
}
