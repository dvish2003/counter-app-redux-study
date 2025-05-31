import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Counter from "./Counter.tsx"
import {Store} from "./Store/Store.ts";
import {Provider} from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <Provider store={Store}>
         <Counter/>
     </Provider>
  </StrictMode>
)
