import './App.css';
import './patch.css';

function DomainLabel(props) {
    return(
        <p className="text-left DomainLabel">{props.name}</p>
    );
}

export default DomainLabel