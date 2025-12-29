import { NavLink } from "react-router-dom";

export default function Navbar() {
   return (
      <header className="nav">
         <div className="nav-container">
            <NavLink className="brand" to="/">
               <span className="logo">🎄</span>
               <span>Santa&apos;s Workshop Dashboard</span>
            </NavLink>

            <nav className="nav-links" aria-label="Primary navigation">
               <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
                  Home
               </NavLink>
               <NavLink to="/toys" className={({ isActive }) => (isActive ? "active" : undefined)}>
                  Toys
               </NavLink>
               <NavLink to="/orders" className={({ isActive }) => (isActive ? "active" : undefined)}>
                  Orders
               </NavLink>
               <NavLink to="/elves" className={({ isActive }) => (isActive ? "active" : undefined)}>
                  Elves
               </NavLink>
            </nav>

            <div className="actions">
               {/* theme logic later */}
               <button className="btn" type="button" aria-label="Toggle theme" disabled title="Theme toggle comes next">
                  🌓 Theme
               </button>
            </div>
         </div>
      </header>
   );
}
