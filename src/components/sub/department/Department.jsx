import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
import './Department.scss';
/*
	React에서 외부 데이터 fetching작업 흐름
	1. 컴포넌트 함수가 호출되고 외부데이터를 받을 state초기화
	2. 의존성 배열이 비어있는 useEffect hook안쪽에서 fetch로 비동기데이터를 받고 state에 넘겨줌
	3. useEffect안쪽에서 fetch문을 써야되는 이유는 fetch자체가 web api를 통해서 클라이언트 기반으로 데이터를 전달받는 방식이기 때문에 무조건 컴포넌트가 마운트되야지만 호출 가능
	4. useEffect에 의해서 데이터가 받아지고 state에 전달되면 자동으로 컴포넌트는 재랜더링됨
	5. 비동기 데이터를 활용해서 실제 JSX로 동적 DOM을 생성하는 시점은 2번째 렌더링 타임
*/
const path = process.env.PUBLIC_URL;

export default function Department() {
	const [Title, setTitle] = useState('');
	const [Department, setDepartment] = useState([]);

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.then((json) => {
				setTitle(Object.keys(json)[0]); // json에서 첫 번째 키를 제목으로 설정함
				setDepartment(Object.values(json)[0]); // json에서 첫 번째 값을 부서 정보로 설정함
			});
	}, []);

	return (
		<Layout title={'Department'}>
			<section id='historyBox'>
				{/* <h2>Histroy</h2>
				<article>
					<h3>2016</h3>
					<ul>
						<li>This company was established.</li>
						<li>Launch First Prototype Project</li>
					</ul>
				</article> */}
			</section>

			<section id='memberBox'>
				<h2>{Title.charAt(0).toUpperCase() + Title.slice(1)}</h2>

				{Department.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='pic'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
							</div>
							<h3>{member.name}</h3>
							<p>{member.position}</p>
						</article>
					);
				})}
			</section>
		</Layout>
	);
}
