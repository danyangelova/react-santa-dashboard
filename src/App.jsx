import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import ToysPage from "./pages/ToysPage";
import ToyDetailsPage from "./pages/ToyDetailsPage";
import OrdersPage from "./pages/OrdersPage";
import CreateOrderPage from "./pages/CreateOrderPage";
import ElvesPage from "./pages/ElvesPage";
import ElfProfilePage from "./pages/ElfProfilePage";
import ElfTasksPage from "./pages/ElfTasksPage";

function App() {
   return (
      <>
         <Routes>
            <Route element={<Layout />}>

               <Route path="/" element={<HomePage />} />

               <Route path="/toys" element={<ToysPage/>} />
               <Route path="/toys/:toyId" element={<ToyDetailsPage/>} />

               <Route path="/orders" element={<OrdersPage/>}/>
               <Route path="/orders/new" element={<CreateOrderPage/>}/>

               <Route path="/elves" element={<ElvesPage/>}/>
               <Route path="/elves/:elfId" element={<ElfProfilePage/>}>
                   <Route path="tasks" element={<ElfTasksPage/>}/>
               </Route>
               

               <Route path="*" element={<Navigate to="/" replace/>}/>

            </Route>
         </Routes>
      </>
   );
}

export default App;
