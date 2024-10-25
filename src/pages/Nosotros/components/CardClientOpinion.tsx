type CardClientOpinionProps = {
    image: string
    nombre: string,
    opinion: string
}

export default function CardClientOpinion({image, nombre, opinion} : CardClientOpinionProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-5 shadow-lg hover:scale-105 hover:bg-slate-50 transition-transform rounded-lg">
          <img src={`./assets-aboutus/clients/${image}`} alt="Contacto" className="rounded-full w-32"/>
          <div className="text-center space-y-2">
              <p className="text-xl font-semibold text-gray-800">{nombre}</p>
              <p className="text-lg">{opinion}</p>
          </div>
    </div>
  )
}
