import { Link } from "react-router-dom";

export default function ToyDetailsPage() {
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
            <h2>Snowy Bear</h2>
            <div className="meta">
               <div className="row">
                  <span>ID</span>
                  <strong>#T-101</strong>
               </div>
               <div className="row">
                  <span>Category</span>
                  <strong>Plush</strong>
               </div>
               <div className="row">
                  <span>Difficulty</span>
                  <strong>
                     <span className="badge easy">Easy</span>
                  </strong>
               </div>
               <div className="row">
                  <span>In Stock</span>
                  <strong id="stockText">
                     <span className="badge stock">Yes</span>
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
               <button id="toggleBtn" className="btn primary" type="button">
                  Toggle Stock
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
