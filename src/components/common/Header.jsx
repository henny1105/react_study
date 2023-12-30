export default function Header() {
	const condition = false;
	const name1 = 'Andy';
	const name2 = 'David';
	const colors = ['red', 'green', 'blue'];

	//JSX안쪽에서 변수활용이나 연산식을 쓰려면 무조건 {}로 감싸서 처리
	//JSX안쪽에서는 if, for문처리 불가
	//JSX안쪽에서는 삼항연산자, map처리 가능
	return (
		<header>
			<h1>{condition ? name1 : name2}</h1>

			<ul>
				{colors.map((el, idx) => {
					//반복도는 JSX에는 고유값을 key로 지정해줌
					return <li key={idx}>{el}</li>;
				})}
			</ul>
		</header>
	);
}
