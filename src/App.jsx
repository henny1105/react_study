import './styles/Global.scss';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';
import { Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<Route path='/department'>
				<Department />
			</Route>

			<Route path='/youtube'>
				<Youtube />
			</Route>
			<Footer />
		</>
	);
}

export default App;
