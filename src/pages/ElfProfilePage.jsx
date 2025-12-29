import { Link, Outlet } from "react-router-dom";

export default function ElfProfilePage() {
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
               <h2>Jingle</h2>
               <div>Role: Lead Toymaker</div>
               <div>
                  <span>Energy: </span>
                  <strong>58</strong>
               </div>
            </div>

            <div style={{ marginTop: "14px" }}>
               <button className="btn primary" type="button">
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
