import Image from 'next/image';
import Link from 'next/link';
import { FiThumbsUp } from 'react-icons/fi';

const Card = ({ result }) => { 
  return (
    <div className="cursor-pointer p-3 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={process.env.API_IMG + `${result.backdrop_path || result.poster_path}`}
          height={300}
          width={500}
          className="rounded-t-lg group-hover:opacity-80 group-hover:grayscale transition"
          placeholder='blur'
          blurDataURL='/loading.svg'
          alt='No Image'
          style={{
            maxWidth:'100%',
            height: 'auto'
          }}
        />
      </Link>
      <div>
        <p className='line-clamp-2'>{result.overview}</p>
        <h2 className='truncate text-lg font-bold'>{result.title || result.name}</h2>
        <p className='flex items-center'> {result.release_date} <FiThumbsUp className='ml-4 mr-1' /> {result.vote_count} </p>
      </div>
    </div>
  );
};
export default Card;
