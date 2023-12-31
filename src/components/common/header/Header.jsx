import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
	return (
		<header className={styles.header}>
			<h1>
				<Link to='/'>Logo</Link>
			</h1>
			<ul>
				<li>
					<NavLink to='/department'>Department</NavLink>
				</li>
				<li>
					<NavLink to='/youtube'>Youtube</NavLink>
				</li>
			</ul>
		</header>
	);
}
