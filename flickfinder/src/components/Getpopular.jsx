import  {React , useState, useEffect } from 'react';
import axios from 'axios';


const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDQ1YjBiMWRjYzlhOTU2NzZmNzAyYTY1ODc2Njc3OCIsInN1YiI6IjY2NGY0NDJmZGQzNWQxZTJiN2NhZWRkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cfbRc0gW2yGiMZbHdeF-GmYg0zJg5tgsAszluK8moJg'
    }
  };

function Getpopular() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.request(options)
          .then(response => {
            console.log(response);
            setData(response.data.results);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, []); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div className='grid gap-y-2'>
        {data.map(({id,original_title})=>{
          return(
            <div key={id} className="px-4 py-2 text-md w-30 rounded-lg bg-emerald-600 text-white">{original_title}</div>
          );
        })}
      </div>
    );
}

export default Getpopular;