import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
import BannerContact from "./components/BannerContact";
import FormContact from "./components/FormContact";
import SectionInfoContact from "./components/SectionInfoContact";

export default function ContactPage() {

  return (
    <>
      <BannerContact/>
      <SectionInfoContact/>
      <FormContact/>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnHover={false}
      />
    </>
  )
}
