import axios from "axios";
import { useEffect, useState } from "react";

const jsearchApiKey = process.env.JSEARCH_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query },
        headers: {
          'X-RapidAPI-Key': 'cc5589fcf3mshd9d71f9efcdc06bp141ac6jsnb0a48e42c81f',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);
        try{
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error){
            setError(error);
            alert('There is an error');
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() =>{
        fetchData();
    }, [])

    const refetch = ()=>{
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}
export default useFetch;