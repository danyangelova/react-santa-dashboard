import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import HomePage from "./pages/Homepage";
import Layout from "./components/layout/Layout";

function App() {
   return (
      <>
         <Routes>
            <Route element={<Layout />}>

               <Route path="/" element={<HomePage />} />

               <Route path="/toys" element={<h1>Toys</h1>} />
               <Route path="/toys/:toyId" element={<h1>Toy Details</h1>} />

               <Route path="/orders" element={<h1>Orders</h1>}/>
               <Route path="/orders/new" element={<h1>Create Orders</h1>}/>

               <Route path="/elves" element={<h1>Elves</h1>}/>
               <Route path="/elves/:elfId" element={<h1>Elf Profile</h1>}/>
               <Route path="/elves/:elfId/tasks" element={<h1>Elf Tasks</h1>}/>

               <Route path="*" element={<Navigate to="/" replace/>}/>

            </Route>
         </Routes>
      </>
   );
}

export default App;
