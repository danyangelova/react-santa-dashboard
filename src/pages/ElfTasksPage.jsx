import { useOutletContext } from "react-router-dom";

export default function ElfTasksPage() {
   const { elf } = useOutletContext();

   return (
      <div style={{ marginTop: "16px" }}>
         <h3>Tasks</h3>

         {elf.tasks?.length ? (
            elf.tasks.map((task, idx) => (
               <div className="notice" key={idx}>
                  <span className="dot"></span>
                  <p>{task}</p>
               </div>
            ))
         ) : (
            <div className="notice">
               <span className="dot"></span>
               <p>No tasks assigned.</p>
            </div>
         )}
      </div>
   );
}
