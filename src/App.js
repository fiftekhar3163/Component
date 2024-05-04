import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import boatRiver from "./assets/images/boat-river.jpg";
import mustard from "./assets/images/mustard.jpg";
import sajek from "./assets/images/sajek.jpg";
import teaGarden from "./assets/images/tea-garden.jpg";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook, faInstagram, faYoutube);

function App() {
  const images = [
    {
      url: boatRiver,
      title: "Boat on the river",
    },
    {
      url: mustard,
      title: "Mustard field",
    },
    {
      url: sajek,
      title: "Sajek Valley",
    },
    {
      url: teaGarden,
      title: "Tea garden",
    },
  ];

  return (
    <div className="app">
      <Header />
      <Banner
        title="My Bangladesh"
        text="Get to feel the country with over 700 rivers "
      />
      <Gallery images={images} />
      <Footer />
    </div>
  );
}

export default App;
