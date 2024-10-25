import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Spinner from "./layout/components/Spinner";
const HomePage = lazy(() => import('./pages/Inicio/HomePage'))
const ServicesPage = lazy(() => import('./pages/Servicios/ServicesPage'))
const AboutUsPage = lazy(() => import('./pages/Nosotros/AboutUsPage'))
const ContactPage = lazy(() => import('./pages/Contacto/ContactPage'))

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Layout/> }>

                <Route path="/" element={ 
                    <Suspense fallback={ <Spinner/> }>
                        <HomePage/> 
                    </Suspense>
                }/>

                <Route path="servicios" element={ 
                    <Suspense fallback={ <Spinner/> }>
                        <ServicesPage/>
                    </Suspense>
                }/>

                <Route path="nosotros" element={ 
                    <Suspense fallback={ <Spinner/> }>
                        <AboutUsPage/>
                    </Suspense> 
                }/>

                <Route path="contacto" element={ 
                    <Suspense fallback={ <Spinner/> }>
                        <ContactPage/>
                    </Suspense>
                }/>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}
