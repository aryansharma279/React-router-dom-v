import Header from "../shared/header/Header"
import Footer from "../shared/footer/Footer"
import { useRouteError } from "react-router-dom"

const Error = () => {
    let error = useRouteError();
    console.log(error);
  return (
    <div>
    <Header/>
      <h1>{error.status}</h1>
        <h2>{error.statusText || error.message}</h2>
    <Footer/>
    </div>
  )
}

export default Error
