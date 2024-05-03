import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <hero-section>
          <Banner />
        </hero-section>
        <Gallery />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
