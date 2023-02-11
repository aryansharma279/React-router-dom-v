import "./App.css";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {

  return (
      <div className="App">
      <Header/>
         <div>
          <Outlet/>
         </div>
       <Footer/>  
   
      </div>
  );
}
// async function loader() {
//   const app = await App();
//   return { app };
// }

export default App;
// export {loader};
