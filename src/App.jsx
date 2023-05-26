import "./App.css";
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import { Outlet } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
