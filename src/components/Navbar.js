import React from "react";
import cat from "../image/cat.jpg"
import OutsideClickHandler from "../tools/OutsideClickHandler";

export default class Navbar extends React.Component {
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
        <nav className=" px-10 py-2 flex bg-gradient-to-l from-blue-300 to-blue-400 justify-between items-center">
          <div className={"font-semibold text-white"}>PT. The Has Slinging Slasher</div>
  
          <OutsideClickHandler onOutsideClick={this.setFalse} className="flex">
            <button
              // onBlur={this.setFalse}
              className={
                " w-11 h-11 rounded-full overflow-hidden cursor-pointer focus:ring-3 ring-blue-400"
              }
              onClick={this.clickH}
            >
              <img src={cat} alt="profile" />
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