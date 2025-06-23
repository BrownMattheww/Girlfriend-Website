import CoolButton from "../components/coolButton"
import calendar from "../assets/calendar.gif"
import planner from '../assets/planner.gif'
import notebook from '../assets/notebook.gif'
import '../button.css'


export default function HomePage() {

    return (
        <>
        <h1 id="buttonTitle">Choose a category</h1>
        <div id="buttonComponent">
        <CoolButton title='Time!' image = {calendar} />
        <CoolButton title='Planner' image = {planner} />
        <CoolButton title='Message' image = {notebook} />
        </div>
        </>
    );
}