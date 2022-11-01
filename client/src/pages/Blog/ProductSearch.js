import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Search() {
    const [searchData, setSearchData] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
                "http://localhost:8080/product/search?word=" + params.word
            );
            console.log(result.data.result);
            setSearchData(result.data.result);
        }
        fetchData();
    }, []);
    
}