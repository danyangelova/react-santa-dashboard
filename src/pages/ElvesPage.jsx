import { Link } from "react-router-dom";

export default function ElvesPage() {
   return (
      <main className="main-container">
         <div className="header">
            <div>
               <h1>Elves</h1>
               <p className="sub">Click an elf name to open the profile page (static link).</p>
            </div>
            <span style={{ fontSize: "12px" }} className="pill">
               🧝 Energy: 0–100
            </span>
         </div>

         <table className="table" aria-label="Elves table">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Energy</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Jingle</td>
                  <td>Lead Toymaker</td>
                  <td>58</td>
                  <td>
                     <Link className="btn ghost" to="/elves/jingle">
                        Profile
                     </Link>
                  </td>
               </tr>
               <tr>
                  <td>Spruce</td>
                  <td>Quality Control</td>
                  <td>72</td>
                  <td>
                     <Link className="btn ghost" to="/elves/spruce">
                        Profile
                     </Link>
                  </td>
               </tr>
               <tr>
                  <td>Robert</td>
                  <td>Route Planner</td>
                  <td>63</td>
                  <td>
                     <Link className="btn ghost" to="/elves/robert">
                        Profile
                     </Link>
                  </td>
               </tr>
            </tbody>
         </table>

         <p className="footer-note">In React: clicking opens /elves/:elfId and nested /tasks route.</p>
      </main>
   );
}
