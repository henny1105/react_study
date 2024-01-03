import Layout from '../../common/layout/Layout';
import { useState } from 'react';
import './Department.scss';
import Modal from '../../common/modal/Modal';

export default function Department() {
	const [Open, setOpen] = useState(false); // 초기값은 false

	return (
		<Layout title={'Department'}>
			<button onClick={() => setOpen(true)}>open</button>
			{/* button을 클릭했을 때 setOpen 함수를 호출하여 
			Open 상태를 true로 설정함 */}
			{Open && <Modal />}
			{/* Open 상태가 true일 때만 Modal 컴포넌트를 랜더링함
			조건부 렌더링으로 모달을 필요에 따라 표시하거나 숨길 수 있음 */}
		</Layout>
	);
}

/*
	retun문 바깥에는 모든 스크립트구문을 활용가능
	단 JSX구문 안쪽에서는 {}를 통해서 할수있는 연산 3가지
		1.변수치환
		2.map으로 반복처리
		3.삼항연산자, &&연산자를 통한 분기처리
*/
