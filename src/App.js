import React, { useRef, useEffect, createRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Barang from "./view/Barang";
import Kategori from "./view/Kategori";
import cat from "./image/cat.jpg";
import OutsideClickHandler from "./tools/OutsideClickHandler";

var icons = {
  dasboard: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  box: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    </svg>
  ),
  kategori: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  ),
};

function Asside(props) {
  return (
    <aside
      className={
        (props.ss ? "transform-none" : "transform") +
        " -translate-x-full md:transform-none w-full absolute md:relative md:w-64 h-screen bg-white overflow-y-auto" +
        " transition-all " +
        " text-gray-700 flex-col flex space-y-3 "
      }
    >
      {props.children}
    </aside>
  );
}

class AssideItem extends React.Component {
  constructor(props) {
    super(props);
    this.clicH.bind(this);
  }
  clicH = () => {
    this.props.onPress();
  };
  render() {
    return (
      <NavLink
        activeClassName={"border-l-4 text-blue-700"}
        onClick={this.clicH}
        exact
        to={this.props.to}
        className={
          " border-blue-400 my-2 font-semibold flex items-center list-none py-2 px-5  w-full transition-all hover:text-black"
        }
      >
        {this.props.icon}
        <div className="ml-3">{this.props.title}</div>
      </NavLink>
    );
  }
}

class AssideButton extends React.Component {
  constructor(props) {
    super(props);
    this.clicH.bind(this);
  }

  clicH = () => {
    this.props.onPress();
  };

  render() {
    return (
      <button
        onClick={this.clicH}
        className={
          " md:transform md:translate-y-full transition-all md:opacity-0 md:pointer-events-none" +
          " overflow-hidden transform-none bg-blue-500 font-semibold text-white  h-14 w-14 flex justify-center items-center fixed bottom-0 right-0 m-10 rounded-full"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            (this.props.state ? " translate-y-96" : "translate-y-0") +
            " absolute transform transition-all h-6 w-6"
          }
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            (this.props.state ? " translate-y-0" : "-translate-y-96") +
            " absolute transform transition-all h-6 w-6"
          }
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.clickH.bind(this);
    this.setFalse(this);
  }
  clickH = () => {
    this.setState({ active: !this.state.active });
  };

  setFalse = () => {
    this.setState({ active: false });
  };

  render() {
    return (
      <nav className=" px-5 py-2 flex bg-gradient-to-l from-blue-300 to-blue-400 justify-between items-center">
        <div className={"font-semibold text-white"}>PT. Sumber Makmur</div>

        <OutsideClickHandler onOutsideClick={this.setFalse} className="flex">
          <button
            // onBlur={this.setFalse}
            className={
              " w-11 h-11 rounded-full overflow-hidden cursor-pointer focus:ring-3 ring-blue-400"
            }
            onClick={this.clickH}
          >
            <img src={cat} />
          </button>
          <div
            className={
              (this.state.active
                ? " translate-y-0 opacity-100"
                : " translate-y-full opacity-0") +
              " transform transition-all text-gray-600  flex flex-col absolute bg-white p-3 w-40 space-y-2 shadow-md font-semibold right-3 top-16 rounded-md"
            }
          >
            <a className={"hover:text-black p-2 flex transition-all"} href="#/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Akun
            </a>
            <a
              className={
                " text-red-500 hover:bg-red-500 hover:text-white rounded-md p-2 flex transition-all"
              }
              href="#/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </a>
          </div>
        </OutsideClickHandler>
      </nav>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = { asside: true };
    this.assideState.bind(this);
  }
  assideState = () => {
    // alert(state)
    this.setState({ asside: !this.state.asside });
  };
  render() {
    return (
      <Router>
        <div className="App flex bg-gray-100 h-screen w-screen">
          <Asside ss={this.state.asside}>
            <div className={"p-5 font-bold border-b text-xl"}>
              AdminMe!
              <br />
              <small className={"font-normal text-sm"}>v.1.0</small>
            </div>
            <div className={" h-full overflow-y-auto text-gray-600 "}>
              <AssideItem
                onPress={this.assideState}
                title={"Dashboard"}
                icon={icons.dasboard}
                to="/"
              />
              <AssideItem
                onPress={this.assideState}
                title={"Barang"}
                icon={icons.box}
                to="/barang"
              />
              <AssideItem
                onPress={this.assideState}
                title={"kategori"}
                icon={icons.kategori}
                to="/kategori"
              />
            </div>
          </Asside>

          <AssideButton state={this.state.asside} onPress={this.assideState} />
          <main className="flex flex-col w-full">
            <Navbar />
            <div className=" md:p-5 h-full overflow-y-auto">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/barang" component={Barang} />
                <Route path="/kategori" component={Kategori} />
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
