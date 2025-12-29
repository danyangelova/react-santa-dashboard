export default function HomePage() {
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
               <div className="kpi-value">128</div>
            </article>

            <article className="card kpi-card">
               <h3>Pending Orders</h3>
               <div className="kpi-value">17</div>
            </article>

            <article className="card kpi-card">
               <h3>Active Elves</h3>
               <div className="kpi-value">9</div>
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
