import './App.css';
import './patch.css';
import {getBarWidth, getAmount} from './SupportScript.js';
import DomainLabel from './DomainLabel.js';
import Bar from './Bar';
import PopulationLabel from './PopulationLabel';


function Row(props) {
	return (
    <div className="flex flex-row Row" >
        
        <DomainLabel name={props.name} />
        <Bar width={getBarWidth(props.name)}/>
        <PopulationLabel amount={getAmount(props.name)}/>
    </div>
	);
}
export default Row;