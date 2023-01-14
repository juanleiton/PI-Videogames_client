import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome/Welcome.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Panel from "./components/Panel/Panel.jsx";
import Home from "./components/Home/Home.jsx";
// import Search from "./components/Search/Search.jsx";
import Detail from "./components/Detail/Detail.jsx";
import UpdateGame from "./components/UpdateGame/UpdateGame.jsx";
import NewGame from "./components/NewGame/NewGame.jsx";
import About from "./components/About/About.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/home/:page" className="route">
          <NavBar />
          <div className="underneath-navbar">
            <Panel />
            <Home />
          </div>
        </Route>
        <Route path="/search/:page" className="route">
          <NavBar />
          <div className="underneath-navbar">
            <Panel />
            <Home />
            {/* <Search /> */}
          </div>
        </Route>
        <Route path="/detail/:id" className="route">
          <NavBar />
          <div className="underneath-navbar">
            <Panel />
            <Detail />
          </div>
        </Route>
        <Route exact path="/update-game/:id" className="route">
          <NavBar />
          <div className="underneath-navbar">
            <Panel />
            <UpdateGame />
          </div>
        </Route>
        <Route exact path="/new-game" className="route">
          <NavBar />
          <div className="underneath-navbar">
            <Panel />
            <NewGame />
          </div>
        </Route>
        <Route exact path="/about" className="route">
          <NavBar />
          <div className="underneath-navbar">
            <Panel />
            <About />
          </div>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;