import { Link } from "react-router-dom";
import CardService from "./CardService";
import { useTranslation } from "react-i18next";

export default function SectionServices() {

  const {t} = useTranslation('global')

  return (
    <div className="px-5 py-14 sm:p-24 2xl:px-40">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 pb-14">{t('servicios.frase-seccion')}</h1>

        <div className="flex flex-col gap-6">
              <CardService
                nombre={t('servicios.lista-servicios.nutricion.nombre')}
                descripcion={t('servicios.lista-servicios.nutricion.descripcion')}
                imagen="serviciodenutricion.jpg"
              />

              <CardService
                nombre={t('servicios.lista-servicios.capilar.nombre')}
                descripcion={t('servicios.lista-servicios.capilar.descripcion')}
                imagen="diagnosticocapilar.jpg"
              />

              <CardService
                nombre={t('servicios.lista-servicios.glucosa.nombre')}
                descripcion={t('servicios.lista-servicios.glucosa.descripcion')}
                imagen="glucosa.jpeg"
              />

              <CardService
                nombre={t('servicios.lista-servicios.seguimiento.nombre')}
                descripcion={t('servicios.lista-servicios.seguimiento.descripcion')}
                imagen="seguimiento.jpg"
              />

              <CardService
                nombre={t('servicios.lista-servicios.tabaco.nombre')}
                descripcion={t('servicios.lista-servicios.tabaco.descripcion')}
                imagen="tabaco.jpeg"
              />

              <CardService
                nombre={t('servicios.lista-servicios.pulso.nombre')}
                descripcion={t('servicios.lista-servicios.pulso.descripcion')}
                imagen="pulso.jpeg"
              />
        </div>

        <div className="text-center pt-20 space-y-6">
            <p className="text-2xl font-medium text-gray-700 max-w-5xl mx-auto"> 
                {t('servicios.frase-consulta')} 
            </p>
            <button className="text-white bg-[#388B6A] hover:bg-[#45ac83] transition py-3 px-8 rounded-md font-semibold text-lg">
                  <Link to='/contacto'>
                    {t('servicios.buttons.button-dos')}
                  </Link>
            </button>
        </div>
    </div>
  )
}
