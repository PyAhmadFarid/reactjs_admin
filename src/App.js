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
import {dasboard,box,kategori} from './components/Icons';





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
                icon={dasboard}
                to="/"
              />
              <AssideItem
                onPress={this.assideState}
                title={"Barang"}
                icon={box}
                to="/barang"
              />
              <AssideItem
                onPress={this.assideState}
                title={"kategori"}
                icon={kategori}
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
