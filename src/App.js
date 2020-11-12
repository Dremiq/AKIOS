import { Provider } from "react-redux";
import store from './redux/store';
import "./App.scss";
import Hero from "./components/Hero";
import FeaturedBikes from './components/FeaturedBikes';
import FindUsOnInstagram from './components/FindUsOnInstagram';
import AccAndMerch from './components/AccAndMerch';
import Footer from './components/Footer';


function App() {
  return (
    <Provider store={store}>
    <div>
      <Hero/>
      <FeaturedBikes/>
      <FindUsOnInstagram/>
      <AccAndMerch/>
      <Footer/>
    </div>
    </Provider>
  );
};

export default App;
