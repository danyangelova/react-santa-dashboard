import { Link } from "react-router-dom";

export default function OrdersPage() {
    return (
        <main className="main-container">
         <div className="header">
            <div>
               <h1>Orders</h1>
               <p className="sub">Filter by status using tabs (UI-only).</p>
            </div>
            <div className="tabs" role="tablist" aria-label="Order status tabs">
               <button className="tab active" type="button">All</button>
               <button className="tab" type="button">Pending</button>
               <button className="tab" type="button">Packed</button>
               <button className="tab" type="button">Shipped</button>
            </div>
         </div>

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
               <tr>
                  <td>#O-901</td>
                  <td>Mila</td>
                  <td>Bulgaria</td>
                  <td><span className="badge medium">Pending</span></td>
               </tr>
               <tr>
                  <td>#O-902</td>
                  <td>Noah</td>
                  <td>Germany</td>
                  <td><span className="badge easy">Packed</span></td>
               </tr>
               <tr>
                  <td>#O-903</td>
                  <td>Sofia</td>
                  <td>Spain</td>
                  <td><span className="badge hard">Shipped</span></td>
               </tr>
            </tbody>
         </table>

         <div className="actions">
            <Link style={{marginTop: "12px"}} to="/orders/new" className="btn primary">＋ New Order</Link>
         </div>

         <p className="footer-note">In React: tabs will control state + React Query will load filtered data.</p>
      </main>
    )
}