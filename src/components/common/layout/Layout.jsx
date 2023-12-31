import styles from './Layout.module.scss';

export default function Layout(props) {
	return (
		<section className='styles.layout'>
			<figure></figure>
			<div className={styles.content}>
				<h1>{props.title}</h1>
				{props.children}
			</div>
		</section>
	);
}
