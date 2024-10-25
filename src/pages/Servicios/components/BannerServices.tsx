import { useTranslation } from "react-i18next"

export default function BannerServices() {

  const {t} = useTranslation('global')

  return (
    <div className="bg-bannerServices bg-cover bg-center bg-no-repeat flex justify-center items-center py-56">
        <div className="pl-8">
            <h1 className="text-5xl md:text-6xl text-white font-bold">{t('servicios.frase-banner')}</h1>
        </div>
    </div>
  )
}