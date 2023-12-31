import styles from './Layout.module.scss';
import clsx from 'clsx';

export default function Layout({ title, className, children }) {
	return (
		<section className={clsx(styles.layout, className)}>
			<figure></figure>

			<div className={styles.content}>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}
