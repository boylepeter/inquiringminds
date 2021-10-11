import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import LibraryPage from './pages/LibraryPage';
import PresentationPage from './pages/PresentationPage';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/Sidedrawer';
import Footer from "./components/Footer";
import {useState} from 'react';


function App() {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <Backdrop show= {sideToggle} click={() => setSideToggle(false)} />
      <Sidedrawer show= {sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/library" component={LibraryPage}></Route>
            <Route exact path="/presentation/:id" component={PresentationPage}></Route>
            <Route exact path="/cart" component={CartPage}></Route>
          </Switch>
        </main>
        <Footer />
    </Router>
  );
}

export default App;
