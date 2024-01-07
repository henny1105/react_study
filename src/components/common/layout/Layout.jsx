import clsx from 'clsx';
import './Layout.scss';
import { useEffect, useRef } from 'react';
import { useSplitText } from '../../../hooks/useSplitText';

export default function Layout({ children, title }) {
	let newClass = title.toLowerCase().split(' ').join('_');
	const refFrame = useRef(null);
	const refTitle = useRef(null);
	const splitText = useSplitText();

	useEffect(() => {
		splitText(refTitle, 0.2, 1);
		setTimeout(() => {
			refFrame.current.classList.add('on');
		}, 300);
	}, []);

	return (
		<section ref={refFrame} className={clsx('layout', newClass)}>
			<h1 ref={refTitle}>{title}</h1>
			<div className='bar'></div>
			{children}
		</section>
	);
}
