import { useFetch } from '../../../hooks/useFetch';
import Layout from '../../common/layout/Layout';
import { useState, useEffect } from 'react';

export default function Youtube() {
	const [Vids, setVids] = useState([]);
	//const fetchData = useFetch();
	console.log(Vids);

	useEffect(() => {
		const api_key = 'AIzaSyD3KmtmTo9yfcsHsZRtsNpjUgUw7rOGdHM';
		const pid = 'PL5uS0BZeM8zUl73uhFTI6AXaB2C5Y5JJR';
		const num = 10;
		const baseURL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;
		//fetchData(baseURL, setVids);

		fetch(baseURL)
			.then((data) => data.json())
			.then((json) => {
				console.log(json.items);
				setVids(json.items);
			});
	}, []);

	return (
		<Layout title={'Youtube'}>
			{Vids.map((data, idx) => {
				return (
					<article key={idx}>
						<h2>{data.snippet.title}</h2>
						<p>{data.snippet.description}</p>
						<div className='pic'>
							<img src={data.snippet.thumbnails.standard.url} alt={data.snippet.title} />
						</div>
					</article>
				);
			})}
		</Layout>
	);
}
