import styles from './Header.module.scss';
import clsx from 'clsx';
//npm i clsx

function Header(props) {
	console.log(props);
	return <header className={clsx(styles.header, props.isMain ? styles.main : null)}>Header</header>;
}

export default Header;
