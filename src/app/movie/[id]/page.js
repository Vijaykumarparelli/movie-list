import Image from 'next/image';

const MoviePage = async ({ params }) => {
  let result = await fetch(process.env.NEXT_API_URL + `movie/${params.id}?api_key=${process.env.API_KEY}`);
  result = await result.json();
  console.log(result);
  return (
    <div className="p-4 md:pt-8 flex flex-col md:flex-row max-w-6xl mx-auto md:space-x-6">
      <div className="flex-1">
        <Image
          src={process.env.API_IMG + `${result.backdrop_path || result.poster_path}`}
          height={300}
          width={500}
          className="rounded-lg group-hover:opacity-80 group-hover:grayscale transition"
          placeholder="blur"
          blurDataURL="/loading.svg"
          alt="No Image"
          style={{
            maxWidth: '100%',
            height: '100%',
          }}
        />
      </div>
      <div className="p-2 flex-1">
        <h2 className="text-lg mb-3 font-bold ">{result.title}</h2>
        <p className='mb-3'>
          <span className='font-semibold'>Overview</span> {result.overview}
        </p>
        <p className='mb-3'>
          <span className='font-semibold'>Date relased: </span> {result.release_date}
        </p>
        <p className='mb-3'>
          <span className='font-semibold'>Rating: </span> {parseInt(result.vote_average)}
        </p>
      </div>
    </div>
  );
};
export default MoviePage;
