import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type CardServiceProps = {
    nombre: string,
    descripcion: string,
    imagen: string
}

export default function CardService({nombre, descripcion, imagen}: CardServiceProps) {

  const {t} = useTranslation('global')

  return (
    <div className='bg-[#388B6A] flex flex-col-reverse sm:flex-row max-w-5xl mx-auto rounded-lg shadow-lg'>
        <div className="w-full sm:w-1/2 p-6 space-y-4">
            <h1 className="text-white text-2xl font-semibold">
              {nombre}
            </h1>
            <p className="text-white font-medium text-lg">
              {descripcion}
            </p>
            <button className="text-white bg-transparent hover:scale-105 transition-transform border-2 border-white py-2 px-7 rounded-md font-bold">
                <Link to='/contacto'>
                    {t('servicios.buttons.button-uno')}
                </Link>
            </button>
        </div>
        <div className="w-full sm:w-1/2 overflow-hidden">
            <img 
              src={`./assets-services/services/${imagen}`} 
              className="rounded-t-lg sm:rounded-tl-none sm:rounded-r-lg hover:scale-125 transition-transform" 
            />
        </div>
    </div>
  )
}
