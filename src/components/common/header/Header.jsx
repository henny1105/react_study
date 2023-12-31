import styles from './Header.module.scss';
import clsx from 'clsx';
//npm i clsx
//clsx를 쓰는 이유: 클래스에 변수를 대입할때 일일 템플릿 리터럴처리하기 번거로우므로 함수의 인수전달하듯이 복수개의 클래스 객체를 적용가능
//삼항연산자를 활용한 분기처리도 가능

export default function Header(props) {
	console.log(props);
	return <header className={clsx(styles.header, props.isMain ? styles.main : null)}>Header</header>;
}
