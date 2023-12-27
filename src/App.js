/*
	리액트 컴포넌트 함수
	: 가상돔을 JSX 리턴 
	: 가상돔은 HTML태그가 아닌 자바스크립트 명령어로 생성하는 가상돔 (Virtual DOM)
	JSX
	: 리액트에서는 자바스크립트로 DOM손쉽게 생성하기 위해서 HTML형식을 따라한
	JSX라는 문법체계로 DOM을 생성
	JSX리턴시 주의점
	: 결국은 함수이기 때문에 복수개의 JSX요소를 리턴할 수 없으므로
	: wrapping 태그로 감싸서 하나의 요소로 그룹화한뒤 리턴
	: 그룹화하긴 해야되는데 중첩요소를 생성하고 싶지않으면 <></> fragment로 감싸줌
	: JSX리턴하는 컴포넌트 함수이름은 대문자로 시작
*/

function App() {
	return (
		<>
			<h1>Hello</h1>
			<h2>World</h2>
		</>
	);
}

export default App;