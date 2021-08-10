import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Barang from "./view/Barang";
import Kategori from "./view/Kategori";
import Navbar from "./components/Navbar";
import {Asside, AssideButton, AssideItem} from './components/Asside';

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




class App extends React.Component {
  constructor() {
    super();
    this.state = { asside: false };
    // this.assideState.bind(this);
  }

  assideState = () => {
    // alert(state)
    this.setState({ asside: !this.state.asside });
  };
  addTable(){
    this.setState({tabelBarang:[...this.state.tabelBarang,{col1:"aa",col2:"aa"}]})
  }
  render() {
    return (
      <Router>
        <div className="App flex bg-gray-100 h-screen w-screen">
          <Asside ss={this.state.asside}>
            <div className={"p-5 font-bold border-b text-3xl"}>
              AdminMe!
              <small className={"block font-normal text-sm"}>v.1.0</small>
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
          <main className="flex flex-col w-full overflow-y-auto justify-between">
            <Navbar />
            <div className=" md:p-5 flex-grow">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/barang" component={Barang} />
                <Route path="/kategori" component={Kategori} />
              </Switch>
            </div>
            <div className={" text-white flex justify-between items-center bottom-0 py-5 px-10 bg-gradient-to-t from-gray-800 to-gray-600"}>
              <span>Copyright &copy; 2021</span>
              <span>This Shit is made <a className={"font-semibold"} href="/aa"> by &#129312; me</a></span>
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
