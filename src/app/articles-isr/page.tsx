const ArticlesISR = async () => {
	const res = await fetch('http://localhost:3000/api/articles', {
		next: { revalidate: 300 },
	});

	const articles = await res.json();
	return (
		<div>
			<h1>Articles (ISR)</h1>
			<pre>{JSON.stringify(articles, null, 2)}</pre>
		</div>
	);
};

export default ArticlesISR;
