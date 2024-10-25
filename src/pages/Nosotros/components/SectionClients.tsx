import { useTranslation } from "react-i18next"
import CardClientOpinion from "./CardClientOpinion"

export default function SectionClients() {

  const {t} = useTranslation('global')

  return (
    <div className="pt-20">
        <h1 className="text-3xl font-bold text-center text-gray-800">{t('nosotros.frase-clientes')}</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-5 py-14">
              <CardClientOpinion
                  image="mujer1.jpg"
                  nombre="Julia Saenz"
                  opinion={t('nosotros.opiniones.primera')}
              />

              <CardClientOpinion
                  image="hombre1.jpg"
                  nombre="Xavier Martínez"
                  opinion={t('nosotros.opiniones.segunda')}
              />

              <CardClientOpinion
                  image="mujer2.jpg"
                  nombre="Laia Fernandez"
                  opinion={t('nosotros.opiniones.tercera')}
              />

              <CardClientOpinion
                  image="hombre2.jpeg"
                  nombre="Miguel Sánchez"
                  opinion={t('nosotros.opiniones.cuarta')}
              />
        </div>
    </div>
  )
}
