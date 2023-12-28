/*
	SSR vs CSR

	SSR : Server Side Rendering
	- 기존의 페이지마다 HTML파일을 서버쪽에 일일이 호출하는 방식
	- 장점 : 초기로딩속도가 빠름, 검색엔진 최적화 (SEO좋음)
	- 단점 : 페이지 이동시마다 서버쪽에서 HTML파일을 가져와야 되기 때문에 깜박거리면서 사용성이 안좋음

	CSR : Client Side Rendering
	- 초기에 서버로부터 빈 HTML파일을 가져온뒤, 출력될 모든 정보데이터를 chunk구성된 리액트 컴포넌트를 가져옴
	- 장점 : 초기에 서브페이지에 대한 모든 데이터파일을 가져오기 때문에 페이지 이동이 부드럽고 추가로딩이 없음
	- 단점 : 한번에 모든 데이터를 가져와야 되기 때문에 초기로딩속도가 SSR방식에 비해 늦고 SEO에 안좋음
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