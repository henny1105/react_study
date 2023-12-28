//하나의 파일에서 복수개의 컴포넌트 함수를 내보낼때에는 그냥 export
//호출할때 각각 함수명으로 비구조화할당 가능
export function Footer() {
	return (
		<footer>
			<h1>footer</h1>
		</footer>
	);
}

export function Footer2() {
	return (
		<footer>
			<h1>footer2</h1>
		</footer>
	);
}