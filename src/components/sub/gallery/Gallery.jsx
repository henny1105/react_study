import Layout from '../../common/layout/Layout';
import styles from './Gallery.module.scss';

export default function Galley() {
	return (
		<Layout title={'Gallery'} className={styles.gallery}>
			<p>갤러리 페이지 전용 컨텐츠가 올자리</p>
		</Layout>
	);
}
