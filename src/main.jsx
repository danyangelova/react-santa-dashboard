import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./style/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <ThemeProvider>
               <App />
            </ThemeProvider>
         </BrowserRouter>
      </QueryClientProvider>
   </StrictMode>
);
