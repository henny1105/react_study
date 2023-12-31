import Layout from '../../common/layout/Layout';
import styles from './Department.module.scss';

export default function Department() {
	return (
		<section className={styles.department}>
			<Layout title={'Department'}>
				<h2>Department 전용 컨텐츠가 올자리</h2>
			</Layout>
		</section>
	);
}
