import { Link } from "react-router-dom";

export default function ToysPage() {
    return (
        <main className="main-container">
    <div className="header">
        <h1>Toys</h1>
    </div>

    <div className="toolbar">
      <div className="controls">
        <div className="control">
          <label htmlFor="cat">Category</label>
          <select id="cat" name="cat">
            <option>All</option>
            <option>Plush</option>
            <option>Tech</option>
            <option>Puzzles</option>
            <option>Outdoor</option>
          </select>
        </div>

        <div className="control">
          <label htmlFor="stock">In Stock</label>
          <input id="stock" type="checkbox" />
        </div>

        <div className="control">
          <label htmlFor="sort">Sort</label>
          <select id="sort" name="sort">
            <option value="name">By name</option>
            <option value="difficulty">By difficulty</option>
          </select>
        </div>
      </div>

    </div>

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
        <tr>
          <td>#T-101</td>
          <td>Snowy Bear</td>
          <td>Plush</td>
          <td><span className="badge easy">Easy</span></td>
          <td><span className="badge stock">Yes</span></td>
          <td><Link className="btn ghost" to="/toys/T-101">Details</Link></td>
        </tr>
        <tr>
          <td>#T-102</td>
          <td>Robo Reindeer</td>
          <td>Tech</td>
          <td><span className="badge hard">Hard</span></td>
          <td><span className="badge stock">No</span></td>
          <td><Link className="btn ghost" to="/toys/T-102">Details</Link></td>
        </tr>
        <tr>
          <td>#T-103</td>
          <td>Candy Cane Puzzle</td>
          <td>Puzzles</td>
          <td><span className="badge medium">Medium</span></td>
          <td><span className="badge stock">Yes</span></td>
          <td><Link className="btn ghost" to="/toys/T-103">Details</Link></td>
        </tr>
        <tr>
          <td>#T-104</td>
          <td>Mini Sled</td>
          <td>Outdoor</td>
          <td><span className="badge easy">Easy</span></td>
          <td><span className="badge stock">Yes</span></td>
          <td><Link className="btn ghost" to="/toys/T-104">Details</Link></td>
        </tr>
      </tbody>
    </table>

    <p className="footer-note">Static filtering/sorting UI only. In React, filter/sort will be state-driven.</p>
  </main>
    )
}