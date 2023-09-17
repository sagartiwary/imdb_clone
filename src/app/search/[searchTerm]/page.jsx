import React from 'react'
import Results from '@/components/Results';

export default async function SearchPage({params}) {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US`
    );
    if(!res){
        throw new Error("Error fetching data")
    };
    const result=await res.json();
    const newData=result.results;
  return (
    <div>
     {newData && newData.length===0 && (
        <h1 className='text-center font-bold mt-6'>No results found</h1>
     )}

{
    newData && <Results data={newData}/>
}
    </div>
  )
}
