import './App.css';
import './patch.css';

function Bar(props){
    return(
        <div className="Bar" width={props.width}></div>
    );
}

export default Bar;