import React from 'react';
import {
    NavLink,
} from "react-router-dom";



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

// eslint-disable-next-line import/no-anonymous-default-export
export {Asside, AssideButton, AssideItem};