import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function ServicesCardHome() {

  const {t} = useTranslation('global')

  return (
    <NavLink to='/servicios'>
      <div className="hover:scale-105 cursor-pointer transition shadow-xl">
          <img src="./assets-home/cards/Servicios.jpeg" alt="Servicios" className="rounded-t-md h-72 w-full"/>
          <h3 className="bg-[#388B6A] text-white text-center py-2 text-xl font-semibold rounded-b-md">{t('header.links.servicios')}</h3>
      </div>
    </NavLink>
  )
}
