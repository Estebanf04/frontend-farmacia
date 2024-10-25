import { ChangeEvent, FormEvent, useState } from "react"
import { useTranslation } from "react-i18next"
import { toast } from "react-toastify"

export default function FormContact() {

  const {t} = useTranslation('global')

  const initialState = {
    name: '',
    email: '',
    query: ''
  }

  const [query, setQuery] = useState(initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
    setQuery({
        ...query,
        [e.target.name]: e.target.value
    })
  }

  const handleClickAndResetForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuery({
        name: '',
        email: '',
        query: ''
    })
    toast.success(`${t('notificacion')}`)
  }

  return (
    <div className="py-10 pb-16 px-4 sm:px-24 2xl:px-40">
          <div className="py-10 px-7 max-w-6xl mx-auto shadow-shadowForm rounded-lg">
                <div className="pb-10">
                  <h1 className="text-2xl font-medium text-gray-600 text-center">
                    {t('contacto.formulario.titulo')}
                  </h1>
                </div>
                <form onSubmit={handleClickAndResetForm}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                          type="Name"
                          name="name"
                          required
                          value={query.name}
                          onChange={handleChange}
                          className="mt-1 block sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" 
                          placeholder={t('contacto.formulario.placeholder-nombre')}
                        />

                        <input 
                          type="email"
                          name="email"
                          required
                          value={query.email}
                          onChange={handleChange}
                          className="mt-1 block sm:w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" 
                          placeholder="Email" 
                        />
                    </div>
                    <div>
                        <textarea 
                          className="mt-5 mb-8 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold"
                          name="query"
                          value={query.query}
                          onChange={handleChange}
                          required
                        >
                        </textarea>
                    </div>
                    <div className="text-center">
                        <button 
                          className="cursor-pointer rounded-md bg-[#388B6A] hover:bg-[#429875] transition px-8 py-3 text-lg font-semibold text-white"
                          type="submit"
                        >
                          Enviar consulta
                        </button>
                    </div>
              </form>
        </div>
    </div>
  )
}
