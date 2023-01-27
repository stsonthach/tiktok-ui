import { useState, useEffect } from 'react';

function UseDebounce(value, timeDelay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, timeDelay);

        return () => clearTimeout(handler);
    }, [value]);

    return debounceValue;
}

export default UseDebounce;
