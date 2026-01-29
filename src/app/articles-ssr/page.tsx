export const dynamic = 'force-dynamic';

const ArticlesSSR = async () => {
  const res = await fetch('http://localhost:3000/api/articles', {
    cache: 'no-store',
  });

  const articles = await res.json();

  return (
    <div>
      <h1>ArticlesSSR</h1>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
    </div>
  );
};

export default ArticlesSSR;
