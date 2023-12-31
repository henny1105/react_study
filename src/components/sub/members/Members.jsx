import Layout from '../../common/layout/Layout';
import styles from './Members.module.scss';

export default function Members() {
	return (
		<Layout title={'Members'} className={styles.members}>
			<p>회원가입 페이지 전용 컨텐츠가 올자리</p>
		</Layout>
	);
}
