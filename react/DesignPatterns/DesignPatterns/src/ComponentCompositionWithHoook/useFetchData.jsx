import React, {useState, useEffect} from 'react';

export const useFetchData = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const controller = new AbortController();

    const getData = async () => {

        setLoading(true);

        try {
            const response = await fetch(
                "https://akabab.github.io/starwars-api/api/all.json"
            );
            const data = await response.json();

            if(data)
                setData(data);
            else return false;

        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();

        return () => {
            controller.abort();
        }
    }, []);

    return [data,loading,error];
};