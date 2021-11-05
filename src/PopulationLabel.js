import './App.css';
import './patch.css';

function PopulationLabel(props) {
    return(
        <p className="PopulationLabel">{props.amount}</p>
    );
}

export default PopulationLabel;