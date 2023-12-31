import styles from './Footer.module.scss';
console.log(styles);

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<h1>Logo</h1>
			<p>2023 DOCLEAB &copy; All Rights reserved.</p>
		</footer>
	);
}
