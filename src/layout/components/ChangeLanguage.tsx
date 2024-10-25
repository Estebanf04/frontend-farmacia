import { useTranslation } from 'react-i18next'

export default function ChangeLanguage() {
    const {i18n} = useTranslation("global")
    
    return (
        <div className='flex items-center'>
            {i18n.language === 'es' 
                ?
                <button onClick={() => i18n.changeLanguage("cat")}><img src="./flags/cat.jpeg" className="w-6 h-4.5 sm:w-7"/></button>
                :
                <button onClick={() => i18n.changeLanguage("es")}><img src="./flags/esp.png" className="w-6 h-4.5 sm:w-7"/></button>
            }
        </div>
    )
}
