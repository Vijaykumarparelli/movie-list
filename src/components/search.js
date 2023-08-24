'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter()
  const onSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`)
  };
  return (
    <form className="flex max-w-6xl mx-auto px-4" onSubmit={onSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords"
        className="w-full h-14 rounded-sm placeholder:text-gray-500 outline-none bg-transparent"
      />
      <button className="text-amber-500 disabled:text-gray-400" disabled={!search}>Search</button>
    </form>
  );
};
export default Search;
