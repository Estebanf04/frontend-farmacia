import { useTranslation } from "react-i18next"

export default function HorariosCardContact() {

  const {t} = useTranslation('global')

  return (
    <div className="flex flex-col items-center gap-4">
        <img src="./assets-contact/cardsContact/horario.png" alt="Horarios" className="rounded-full w-36"/>
        <div className="text-center space-y-2">
            <p className="text-xl font-semibold text-gray-800">{t('contacto.cards.horarios.hr')}</p>
            <div className="text-center">
                <p className="text-lg">
                    <span className="font-semibold">{t('contacto.cards.horarios.lunes-sabado')}</span> de 09:00 - 21:00
                </p>
                <p className="text-lg font-semibold">
                    {t('contacto.cards.horarios.domingo')}
                </p>
            </div>
        </div>
   </div>
  )
}
