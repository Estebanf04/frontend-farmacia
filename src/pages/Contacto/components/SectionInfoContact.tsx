import HorariosCardContact from "./HorariosCardContact"
import PhoneCardContact from "./PhoneCardContact"
import UbicationCardContact from "./UbicationCardContact"

export default function SectionInfoContact() {
  return (
    <div className="px-10 py-14 sm:px-24 2xl:px-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <UbicationCardContact/>
              <PhoneCardContact/>
              <HorariosCardContact/>
          </div>
    </div>
  )
}
