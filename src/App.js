import './App.css';
import './patch.css';
import Countries from './Countries';

function App() {
	return ( <div className = "text-center App" >
		<header>
			<h1 className="text-4xl font-extrabold"> World Population</h1>
			<h2>Ten most popular countries</h2>
		</header>
		<Countries />
		</div>
	);
}
export default App;