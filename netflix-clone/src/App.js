import "./App.css";
import Banner from "./components/Header/Banner/Banner";
import Footer from "./components/Header/Footer/Footer";
import Header from "./components/Header/Header";
import RowList from "./components/Header/Rows/RowList/RowList";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
}

export default App;
