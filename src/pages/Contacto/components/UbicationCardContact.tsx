import { useTranslation } from "react-i18next"

export default function UbicationCardContact() {

  const {t} = useTranslation('global')

  return (
      <div className="flex flex-col items-center gap-4">
            <img src="./assets-contact/cardsContact/ubicacion.png" alt="Ubicacion" className="rounded-full w-36"/>
            <div className="text-center space-y-2">
                  <p className="text-xl font-semibold text-gray-800">{t('contacto.cards.ubicacion')}</p>
                  <p className="text-lg">Calle del Escorial 17, 08024, Barcelona.</p>
            </div>
      </div>
  )
}
