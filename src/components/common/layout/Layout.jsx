import clsx from 'clsx';
import './Layout.scss';
import { useEffect, useRef } from 'react';

export default function Layout({ children, title }) {
	const refTitle = useRef(null);
	let newClass = title.toLowerCase().split(' ').join('_');

	useEffect(() => {
		let text = refTitle.current.innerText;
		let tags = '';
		let count = 0;

		for (let letter of text) {
			tags += `<span style='display:inline-block; transition-delay:${0.1 * count}s'>${letter}</span>`;
			count++;
		}
		refTitle.current.innerHTML = tags;
	}, []);

	return (
		<section className={clsx('layout', newClass)}>
			<h1 ref={refTitle}>{title}</h1>
			{children}
		</section>
	);
}
