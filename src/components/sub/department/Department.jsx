import Layout from '../../common/layout/Layout';
import styles from './Department.scss';

export default function Department() {
	return (
		<Layout title={'Department'} className={styles.department}>
			<p>부서소개 페이지 전용 컨텐츠가 올자리</p>
		</Layout>
	);
}
