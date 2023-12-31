import Layout from '../../common/layout/Layout';
import styles from './Youtube.module.scss';

export default function Youtube() {
	return (
		<Layout title={'Youtube'} className={styles.youtube}>
			<h2>유튜브페이지 전용 컨텐츠가 올자리</h2>
		</Layout>
	);
}
