import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function BannerHome() {

  const {t} = useTranslation('global')

  return (
    <div className="bg-bannerHome bg-cover bg-center bg-no-repeat flex justify-center items-center py-48">
        <div className="space-y-6 pl-8">
            <h1 className="text-5xl md:text-6xl text-white font-bold">{t('home.frase-banner')}</h1>
            <div className="flex justify-normal md:justify-center">
                <NavLink to='/servicios'>
                    <button
                      className="cursor-pointer bg-[#388B6A] px-14 py-2 text-white font-semibold text-lg hover:bg-[#429875] transition rounded-md">
                      {t('home.boton-banner')}
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
  )
}
