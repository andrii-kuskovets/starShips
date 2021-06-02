import { useState, useEffect } from "react";
import {ISwapi} from "./interfaces";

export default function useFetch(url:string):Array<any>{
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ISwapi[] | null>(null);
    const [error, setError] = useState<any>();

    const fetchData = () => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then(
                (result) => {
                    setData(result);
                    setLoading(false);
                    console.log(result)
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                }
            );
    };
    useEffect(fetchData, [url]);

    return [data, loading, error];
}
