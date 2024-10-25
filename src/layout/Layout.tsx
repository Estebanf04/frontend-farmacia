import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
        <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    </>
  )
}
