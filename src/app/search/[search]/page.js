import Results from "@components/results";

const SearchResults = async ({ params }) => {
  const search = params.search;
  let endpoint = `${process.env.NEXT_API_URL}search/movie?api_key=${process.env.API_KEY}&query=${search}&page=1`;
  console.log(endpoint);
  const res = await fetch(endpoint, { next: { revalidate: 100 } });
  let data = await res.json();
  return (
    <div>
      {!data.results.length && <h2>No Resutls found</h2>}
      {data.results.length && <Results results={data.results} />}
    </div>
  );
};
export default SearchResults;

// https://api.themoviedb.org/3/
