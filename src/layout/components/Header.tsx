import { NavLink } from "react-router-dom";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslation } from "react-i18next";

export default function Header() {

  const {t} = useTranslation('global')

  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header>
        <div className="bg-[#388B6A] text-center py-1.5">
            <p className="text-white">
              {t('header.subheader')}
            </p>
        </div>

        <div className="flex justify-between px-8 sm:px-14 py-6 items-center">
            <NavLink
              to="/"
              className="pr-5"  
            >
            <img 
              src="./logo/logoHeader.jpg" 
              alt="Logo Farmacia Fandos"
              className="w-44"
            />
            </NavLink>
            
            <div className="flex gap-8 items-center">
                <nav className="text-[#388B6A] font-semibold space-x-10 hidden sm:block">
                      <NavLink
                        to="/"
                        className={({isActive}) =>
                        isActive ? 'border-b-[#388B6A] border-b-2 pb-1' : ''
                      }>
                        {t('header.links.inicio')}
                      </NavLink>

                      <NavLink
                        to="/servicios"
                        className={({isActive}) =>
                        isActive ? 'border-b-[#388B6A] border-b-2 pb-1' : ''
                      }>
                        {t('header.links.servicios')}
                      </NavLink>

                      <NavLink
                        to="/nosotros"
                        className={({isActive}) =>
                        isActive ? 'border-b-[#388B6A] border-b-2 pb-1' : ''
                      }>
                        {t('header.links.nosotros')}
                      </NavLink>

                      <NavLink
                        to="/contacto"
                        className={({isActive}) =>
                        isActive ? 'border-b-[#388B6A] border-b-2 pb-1' : ''
                      }>
                        {t('header.links.contacto')}
                      </NavLink>
                </nav>

                <div className="hidden sm:block cursor-pointer">
                    <ChangeLanguage/>
                </div>
            </div>

            {/* Button Dropdown Menu */}

            <button 
              className="block sm:hidden text-3xl text-[#388B6A]"
              onClick={handleClick}
            >
              {!menuOpen ? <MdOutlineMenu/> : <MdOutlineClose/>}
            </button>
        </div>

            {/* Dropdown Menu */}

            {menuOpen && (
              <div className="sm:hidden absolute right-0 bg-[#388B6A] px-10 py-12 text-right w-1/2 transition-all">
                  <div className="flex flex-col gap-4 items-end">
                      <nav className="text-white font-semibold text-lg flex flex-col gap-3 text-right">
                          <NavLink
                            to="/"
                            onClick={() => setMenuOpen(false)}
                          >
                            {t('header.links.inicio')}
                          </NavLink>

                          <NavLink
                            to="/servicios"
                            onClick={() => setMenuOpen(false)}
                          >
                            {t('header.links.servicios')}
                          </NavLink>

                          <NavLink
                            to="/nosotros"
                            onClick={() => setMenuOpen(false)}
                            >
                              {t('header.links.nosotros')}
                            </NavLink>

                          <NavLink
                            to="/contacto"
                            onClick={() => setMenuOpen(false)}
                            >
                            {t('header.links.contacto')}
                          </NavLink>   
                      </nav>
                      <div 
                        className="block sm:hidden cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                      >
                        <ChangeLanguage/>
                      </div>
                </div>
            </div>
          )}
    </header>
  )
}
