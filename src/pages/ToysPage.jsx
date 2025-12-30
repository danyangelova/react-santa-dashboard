import { Link } from "react-router-dom";
import { getToys } from "../api/toys";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function difficultyRank(difficulty) {
   if (difficulty === "Easy") return 1;
   if (difficulty === "Medium") return 2;
   if (difficulty === "Hard") return 3;
   return 999;
}

export default function ToysPage() {
   //local state
   const [category, setCategory] = useState("All");
   const [inStockOnly, setInStockOnly] = useState(false);
   const [sortBy, setSortBy] = useState("name");

   const {
      data: toys = [],
      isLoading,
      isError,
      error,
   } = useQuery({
      queryKey: ["toys"],
      queryFn: getToys,
   });

   let visibleToys = [...toys];

   if (category !== "All") {
      visibleToys = visibleToys.filter((toy) => toy.category === category);
   }
   if (inStockOnly) {
      visibleToys = visibleToys.filter((toy) => toy.inStock === true);
   }
   visibleToys.sort((a, b) => {
      if (sortBy === "difficulty") {
         return difficultyRank(a.difficulty) - difficultyRank(b.difficulty);
      }
      return a.name.localeCompare(b.name);
   });

   return (
      <main className="main-container">
         <div className="header">
            <h1>Toys</h1>
         </div>

         <div className="toolbar">
            <div className="controls">
               <div className="control">
                  <label htmlFor="cat">Category</label>
                  <select id="cat" value={category} onChange={(e) => setCategory(e.target.value)}>
                     <option>All</option>
                     <option>Plush</option>
                     <option>Tech</option>
                     <option>Puzzles</option>
                     <option>Outdoor</option>
                  </select>
               </div>

               <div className="control">
                  <label htmlFor="stock">In Stock</label>
                  <input
                     id="stock"
                     type="checkbox"
                     checked={inStockOnly}
                     onChange={(e) => setInStockOnly(e.target.checked)}
                  />
               </div>

               <div className="control">
                  <label htmlFor="sort">Sort</label>
                  <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                     <option value="name">By name</option>
                     <option value="difficulty">By difficulty</option>
                  </select>
               </div>
            </div>
         </div>

         {isLoading && <p className="footer-note">Loading toys...</p>}
         {isError && <p className="footer-note">Error: {error.message || "Failed to load toys."}</p>}

         {!isLoading && !isError && (
            <table className="table" aria-label="Toys table">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                     <th>Category</th>
                     <th>Difficulty</th>
                     <th>In Stock</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {visibleToys.map((toy) => (
                     <tr key={toy.id}>
                        <td>{toy.id}</td>
                        <td>{toy.name}</td>
                        <td>{toy.category}</td>
                        <td>
                           <span className={`badge ${toy.difficulty?.toLowerCase()}`}>{toy.difficulty}</span>
                        </td>
                        <td>
                           <span className="badge stock">{toy.inStock ? "Yes" : "No"}</span>
                        </td>
                        <td>
                           <Link className="btn ghost" to={`/toys/${toy.id}`}>
                              Details
                           </Link>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         )}

         <p className="footer-note">Static filtering/sorting UI only. In React, filter/sort will be state-driven.</p>
      </main>
   );
}
