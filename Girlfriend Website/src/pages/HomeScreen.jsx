import CoolButton from "../components/coolButton"
import calendar from "../assets/calendar.gif"
import planner from '../assets/planner.gif'
import notebook from '../assets/notebook.gif'
import seal from '../assets/seal.gif'
import camera from '../assets/camera.gif'
import '../button.css'

import TimePage from "./TimePage"
import { Link } from "react-router-dom"


export default function HomePage() {

    return (
        <>
            <img id="daisys" src="daisy.gif" alt="daisys" />
            <img id="daisys2" src="daisy.gif" alt="daisys" />
            <h1 id="buttonTitle">Daisys Website!</h1>
            <p> Click on any of the categorys below! </p>

            <div id="buttonComponent">

                <Link to="/time"> 
                    <CoolButton title='Time!' image={calendar} />
                </Link>

                <CoolButton title='Planner' image={planner} />
                <CoolButton title='Message' image={notebook} />

                <Link to="/playlist"> 
                    <CoolButton title='Songs' image={seal} />
                </Link>

                <CoolButton title='Gallery' image={camera} />
            </div>
        </>
    );
}