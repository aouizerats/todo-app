import { useEffect, useState, useRef } from 'react';

export function useApi(url, createData) {

    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    const [loading, setLoading] = useState(false);
    const counter = useRef(0);

    useEffect(() => {
        setLoading((++counter.current) > 0);

        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.map(i => createData(i))))
            .finally(() => setLoading((--counter.current) > 0));
    }, [reload]);

    return {
        data,
        loading,
        reload: () => setReload(!reload)
    };
}
