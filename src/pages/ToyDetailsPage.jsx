import { Link, useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getToyById, toggleToyStock } from "../api/toys";

export default function ToyDetailsPage() {
   const { toyId } = useParams();
   const queryClient = useQueryClient();

   const {
      data: toy,
      isLoading,
      isError,
      error,
   } = useQuery({
      queryKey: ["toy", toyId],
      queryFn: () => getToyById(toyId),
   });

   const toggleMutation = useMutation({
      mutationFn: async () => {
         if (!toy) {
            throw new Error("Toy not loaded");
         }

         const nextInStock = !toy.inStock;
         return toggleToyStock(toyId, nextInStock);
      },

      onMutate: async () => {
         await queryClient.cancelQueries({ queryKey: ["toy", toyId] }); //izchakai vs tekushti zaqvki za toys da sprat, predi da pipame kesha
         const previousToy = queryClient.getQueryData(["toy", toyId]); //vzimame stoinost ot kesha
         //promenqne kesha
         queryClient.setQueryData(["toy", toyId], (old) => {
            if (!old) return old;
            return { ...old, inStock: !old.inStock };
         });
         return { previousToy };
      },

      // onError: () => {
      //    //rollback optimistic update by restoring the previous cached toy state
      // },
      onSettled: () => {
         queryClient.invalidateQueries({ queryKey: ["toy", toyId] });
      },
   });
   //PATCH /toys/:id

   if (isLoading) {
      return (
         <main className="main-container">
            <p className="footer-note">Loading toy...</p>
         </main>
      );
   }

   if (isError) {
      return (
         <main className="main-container">
            <p className="footer-note">Error: {error?.message || "Failed to load toy."}</p>
            <Link className="btn" to="/toys">
               ← Back to Toys
            </Link>
         </main>
      );
   }

   return (
      <main className="main-container">
         <div className="header">
            <div>
               <p className="sub">UI-only “Toggle Stock”. In React you'll do optimistic UI updates here.</p>
            </div>
            <Link className="btn" to="/toys">
               ← Back to Toys
            </Link>
         </div>

         <section className="card">
            <h2>{toy.name}</h2>
            <div className="meta">
               <div className="row">
                  <span>ID</span>
                  <strong>{toy.id}</strong>
               </div>
               <div className="row">
                  <span>Category</span>
                  <strong>{toy.category}</strong>
               </div>
               <div className="row">
                  <span>Difficulty</span>
                  <strong>
                     <span className={`badge ${toy.difficulty?.toLowerCase()}`}>{toy.difficulty}</span>
                  </strong>
               </div>
               <div className="row">
                  <span>In Stock</span>
                  <strong id="stockText">
                     <span className="badge stock">{toy.inStock ? "Yes" : "No"}</span>
                  </strong>
               </div>
            </div>

            <div
               style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "14px",
                  flexWrap: "wrap",
               }}
            >
               <button
                  className="btn primary"
                  type="button"
                  onClick={() => toggleMutation.mutate()}
                  disabled={toggleMutation.isPending}
               >
                  {toggleMutation.isPending ? "Toggling..." : "Toggle Stock"}
               </button>
            </div>

            <p className="footer-note">
               This is a static mock. In React: this button updates UI immediately (optimistic update) and then syncs to
               the server.
            </p>
         </section>
      </main>
   );
}
