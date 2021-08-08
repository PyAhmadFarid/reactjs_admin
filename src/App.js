import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

function Kategori() {
  return (
    <div className={" h-80 bg-white p-5 md:rounded-md"}>
      kategori Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
      neque earum eligendi asperiores vitae culpa esse nisi iste quisquam, minus
      reiciendis, necessitatibus vel eos provident dolorum magni deleniti!
      Expedita, voluptatem.
    </div>
  );
}
function Barang() {
  return <div className={" h-80 bg-white p-5 md:rounded-md"}>aaa</div>;
}

function Dashboard() {
  return (
    <div className={" h-80 bg-white p-5 md:rounded-md"}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque earum
      eligendi asperiores vitae culpa esse nisi iste quisquam, minus reiciendis,
      necessitatibus vel eos provident dolorum magni deleniti! Expedita,
      voluptatem.
    </div>
  );
}

function Asside(props) {
  return (
    <aside
      className={
        (props.ss ? "transform-none" : "transform") +
        " -translate-x-full md:transform-none w-full absolute md:relative md:w-64 h-screen bg-white overflow-y-auto" +
        " transition-all " +
        " p-3 text-gray-700 flex-col flex space-y-3 "
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
      <li
        className={
          " list-none p-2  w-full hover:bg-gray-300 block rounded-md transition-all hover:text-blue-700"
        }
      >
        <Link onClick={this.clicH} to={this.props.to} className={" font-semibold flex items-center"}>
          {this.props.icon}
          <div className="ml-3">{this.props.title}</div>
        </Link>
      </li>
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
        <div className="App flex bg-gray-200 h-screen w-screen">
          <Asside ss={this.state.asside}>
            <div className={"font-semibold p-3 border-b text-xl"}>AdminMe</div>
            <ul className={" h-full overflow-y-auto "}>
              <AssideItem onPress={this.assideState} title={"Dashboard"} icon={icons.dasboard} to="/" />
              <AssideItem onPress={this.assideState} title={"Barang"} icon={icons.box} to="/barang" />
              <AssideItem
                onPress={this.assideState}
                title={"kategori"}
                icon={icons.kategori}
                to="/kategori"
              />
            </ul>
          </Asside>

          <AssideButton state={this.state.asside} onPress={this.assideState} />
          <main className="flex flex-col w-full">
            <nav className=" h-10 bg-blue-500"></nav>
            <div className=" md:p-5 h-full overflow-y-auto">
              <Switch>
                <Route exact path="/" component={Dashboard}></Route>
                <Route path="/barang" component={Barang} />
                <Route path="/kategori">
                  <Kategori />
                </Route>
              </Switch>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
