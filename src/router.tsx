import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/Inicio/HomePage";
import ServicesPage from "./pages/Servicios/ServicesPage";
import AboutUsPage from "./pages/Nosotros/AboutUsPage";
import ContactPage from "./pages/Contacto/ContactPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout/> }>
                <Route path="/" element={ <HomePage/> }/>
                <Route path="/servicios" element={ <ServicesPage/> }/>
                <Route path="/nosotros" element={ <AboutUsPage/> }/>
                <Route path="/contacto" element={ <ContactPage/> }/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
