import React from "react";

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
};

function Dashboard() {
  return <div>aaaaa</div>;
}

function Asside(props) {
  let style =
    " -translate-x-full md:transform-none w-full absolute md:w-64 h-screen bg-white ";
  return (
    <aside
      className={
        (props.ss ? "transform-none" : "transform") +
        style +
        " transition-all " +
        " p-3"
      }
    >
      {props.children}
    </aside>
  );
}

function AssideItem(props) {
  return (
    <li
      className={
        " list-none p-2  w-full hover:bg-gray-300 block rounded-md transition-all hover:text-blue-700"
      }
    >
      <a className={" font-semibold flex items-center"} href="#/">
        {props.icon}
        <div className="ml-3">{props.title}</div>
      </a>
    </li>
  );
}

class AssideButton extends React.Component {
  constructor(props) {
    super(props);
    this.clicH.bind(this);
  }

  clicH = () => {
    this.props.onPress(!this.props.state);
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
  assideState = (state) => {
    // alert(state)
    this.setState({ asside: state });
  };
  render() {
    return (
      <div className="App flex bg-gray-200 h-screen w-screen">
        <Asside ss={this.state.asside}>
          <ul>
            <AssideItem title={"Dashboard"} icon={icons.dasboard} />
          </ul>
        </Asside>

        <AssideButton state={this.state.asside} onPress={this.assideState} />
        <main className="flex-row w-full">
          <nav className=" h-10 bg-blue-500"></nav>
          <div className="w-full p-5">
            <Dashboard />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
