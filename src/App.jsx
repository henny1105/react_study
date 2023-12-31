import './styles/Global.scss';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';
import { Route } from 'react-router-dom';
import Main from './components/main/Main';

function App() {
	return (
		<>
			<Header />
			<Route exact path='/' component={Main} />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Footer />
		</>
	);
}

export default App;
