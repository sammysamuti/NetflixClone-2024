import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RowList from "./components/Rows/RowList/RowList";

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
