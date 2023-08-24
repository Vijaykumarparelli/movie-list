import Results from '@components/results';

const MainPage = async ({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  let endpoint = `${process.env.NEXT_API_URL}${
    genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/movie/week'
  }?api_key=${process.env.API_KEY}&language=en-US&page=1`;
  const res = await fetch(endpoint, { next: { revalidate: 100 } });
  let data = await res.json();
  return (
    <div>
      <Results results={data.results} />
    </div>
  );
};
export default MainPage;
