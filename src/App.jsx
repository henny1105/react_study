import './styles/Global.scss';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';

function App() {
	return (
		<>
			<Header isMain={true} abc={'hello'} />
			<Footer />
		</>
	);
}

export default App;
