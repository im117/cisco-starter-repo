import {useState} from 'react';

export function IP({ ipv6 }) {
    const [bodyText, setBodyText] = useState('Finding IP...');
    const [fetched, setFetched] = useState(false);

    var url = 'http://api.ipify.org/';
    if (!fetched) {
        if (ipv6) {
            url = 'http://api64.ipify.org/';
        }

        fetch(url).then(async (response) => {
            setBodyText(await response.text());
            setFetched(true);
        });
    }
    return <>{bodyText}</>
}