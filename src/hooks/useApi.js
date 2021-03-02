import { useEffect, useState, useRef } from 'react';

export function useApi(url, createData) {

    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(false);
    const counter = useRef(0);

    function startLoading() {
        counter.current++;
        setLoading(counter.current > 0);
    }

    function endLoading() {
        counter.current--;
        setLoading(counter.current > 0);
    }

    useEffect(() => {
        async function fetchData() {
            await fetch(url)
                .then(response => response.json())
                .then(json => setData(json.map(i => createData(i))))
                .finally(() => endLoading());
        }

        startLoading();
        fetchData();
    }, [reload]);

    return {
        data,
        loading,
        reload: () => setReload(!reload)
    };
}
