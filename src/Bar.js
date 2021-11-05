import './App.css';
import './patch.css';

function Bar(props){
    return(
        <div className="Bar" style={{width:(((1/(1440/props.width))*100) + "vw")}}></div>
    );
}

export default Bar;