import './styles/Global.scss';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import Department from './components/common/sub/department/Department';
import Youtube from './components/common/sub/youtube/Youtube';

function App() {
	return (
		<>
			<Header />
			<Department />
			<Youtube />
			<Footer />
		</>
	);
}

export default App;
