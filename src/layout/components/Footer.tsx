import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {

  const {t} = useTranslation('global')

  return (
    <footer className="bg-[#429875]">
        <div className="flex flex-col sm:flex-row sm:justify-between px-14 py-8 items-center gap-4">
            <div className="space-y-3">
                <NavLink
                    to="/"
                >
                <img 
                    src="./logo/logoFooter.jpg"
                    alt="Logo Farmacia Fandos"
                    className="w-44" 
                />
                </NavLink>
                
                <div className="flex gap-3 text-white justify-center sm:justify-normal">
                    <p className="text-2xl cursor-pointer"> 
                      <FaInstagram/> 
                    </p>
                    <p className="text-2xl cursor-pointer"> 
                      <FaFacebookSquare/> 
                    </p>
                </div>
            </div>
            <div>
                <nav className="text-white font-semibold sm:flex-col md:flex-row sm:space-x-5 flex flex-col gap-1 text-center">
                      <NavLink
                        to="/"
                      >
                        {t('header.links.inicio')}
                      </NavLink>

                      <NavLink
                        to="/servicios"
                      >
                        {t('header.links.servicios')}
                      </NavLink>

                      <NavLink
                        to="/nosotros"
                      >
                        {t('header.links.nosotros')}
                      </NavLink>

                      <NavLink
                        to="/contacto"
                      >
                        {t('header.links.contacto')}
                      </NavLink>   
                </nav>
            </div>
        </div>
        <div className="bg-[#388B6A] text-center py-1.5 flex justify-center gap-4 text-white">
            <p>&copy; 2024 Fandos Farmacia</p>
            <p>|</p>
            <a href="https://www.linkedin.com/in/estebanfandos/" 
               target='_blank' 
               className="flex items-center gap-2"> 
               Linkedin 
               <FaLinkedin 
               className='text-gray-100 text-md flex justify-center'/> 
            </a>
        </div>
    </footer>
  )
}
