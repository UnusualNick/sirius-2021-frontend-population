import './App.css';
import './patch.css';
import Row from './Row';

function Countries() {
	return (
    <div className="items-center Countries">
        <Row name="World"/>
        <Row name="China"/>
        <Row name="India"/>
        <Row name="United States"/>
        <Row name="Indonesia"/>
        <Row name="Pakistan"/>
        <Row name="Brazil"/>
        <Row name="Nigeria"/>
        <Row name="Bangladesh"/>
        <Row name="Russian Federation"/>
        <Row name="Mexico"/>
    </div>
	);
}
export default Countries;