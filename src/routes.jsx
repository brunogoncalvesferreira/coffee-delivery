import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Checkout } from "./pages/checkout";
import { Success } from "./pages/success";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
  )
}