import AboutUsCardHome from "./AboutUsCardHome"
import ContactCardHome from "./ContactCardHome"
import ServicesCardHome from "./ServicesCardHome"

export default function CardsHome() {
  return (
    <div className="px-10 py-14 sm:px-24 2xl:px-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServicesCardHome/>
          <AboutUsCardHome/>
          <ContactCardHome/>
      </div>
    </div>
  )
}
