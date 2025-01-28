import Alumni from "../components/generallComponent/Alumni";
import Footer from "../components/generallComponent/Footer";
import Navigation from "../components/generallComponent/Navigation";
import History from "../components/pages Component/Home.component/History";
import IconCart from "../components/pages Component/Home.component/IconCart";
import { Notices } from "../components/pages Component/Home.component/Notices";
import Slider from "../components/pages Component/Home.component/Slider";
import SpeachFounder from "../components/pages Component/Home.component/SpeachFounder";

export default function Home() {
  return (
      <div>
          <Navigation/>
          <main>
            <Slider/>
            <SpeachFounder/>
            <IconCart/>
            <Notices/>
            <History/>
            <Alumni/>
          </main>
          <Footer/>
      </div>
  )
}
