import React, {useState, useEffect} from 'react';
import {Spinner} from 'reactstrap';
import useFetch from "../../useFetch";
import {Actions} from "../Actions/Actions";
import {BoardShips} from "../BoardShips/BoardShips";

export const Main: React.FC = () =>{
    const [url, setUrl] = useState<string>('https://swapi.dev/api/starships/')
    const [data, loading, error] = useFetch(url)

    function showNext(event: React.MouseEvent) {
        event.preventDefault()
        setUrl(data?.next)
    }

    function showPrev(event: React.MouseEvent) {
        event.preventDefault()
        setUrl(data?.previous)
    }

    if(loading || !data) return  <Spinner color="primary" />;
    if(error) return <div>{error}</div>

    return (
        <div className='container'>
            <h1>List of starships</h1>
          <BoardShips results={data?.results} />
           <Actions next={data.next} previous={data.previous} showNext={showNext} showPrev={showPrev}/>
        </div>
    )
}