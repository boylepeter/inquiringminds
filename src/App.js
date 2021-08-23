import Nav from './components/Nav';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LibraryPage from './pages/Library';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/library" exact>
          <LibraryPage></LibraryPage>
        </Route>
      </Switch>
    </>
  );
}

export default App;

