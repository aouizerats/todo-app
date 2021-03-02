import { useEffect, useState } from 'react';

export function useCollection(data, create) {

    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setCollection(data);
    }, [data]);

    function addItem(title) {
        const item = create(title);
        if (item) {
            setCollection([...collection, item]);
            return true;
        };
        return false;
    }

    function removeItem(item) {
        setCollection(collection.filter(i => i !== item));
    }

    function clearCompleted() {
        setCollection(collection.filter(i => !i.completed));
    }

    function toggleAll() {
        const allCompleted = collection.every(t => t.completed)
        collection.forEach(t => t.completed = !allCompleted);
        setCollection([...collection]);
    }

    return { collection, addItem, removeItem, clearCompleted, toggleAll };
}