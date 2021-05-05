import NavbarContainer from "./components/navbar/NavbarContainer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SearchPage from "./components/search/SearchPage"
import ClipBoardContainer from "./components/clipBoard/ClipBoardContainer"
import "./app.css"

function App() {
  return (
    <main className="main">
      <Router>
        <NavbarContainer />
        <Switch>
          <Route path="/search" component={SearchPage}/>
          <Route path="/clip-board/:clipPadName" component={ClipBoardContainer} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
