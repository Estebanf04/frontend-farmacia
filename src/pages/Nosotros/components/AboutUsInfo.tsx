import { useTranslation } from "react-i18next";
import SectionClients from "./SectionClients";

export default function AboutUsInfo() {

  const {t} = useTranslation('global')
  
  return (
    <div className="px-5 py-14 sm:p-24 2xl:px-40">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-center">
            <img src="./assets-aboutus/farmacia.jpg" alt="nosotros" className="rounded-lg px-5"/>
            <p className="text-lg p-5 text-gray-800">
                <span className="font-semibold text-gray-950">{t('nosotros.descripcion.negrillas-uno')}</span>
                  {t('nosotros.descripcion.texto')}
                <span className="font-semibold text-gray-950"> {t('nosotros.descripcion.negrillas-dos')}</span>
            </p>
        </div>
      <SectionClients/>
    </div>
  )
}
