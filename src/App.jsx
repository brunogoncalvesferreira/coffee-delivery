import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { CoffeeContextProvider } from "./contexts/coffee-context";

export function App() {
  return (
    <CoffeeContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </CoffeeContextProvider>
  )
}