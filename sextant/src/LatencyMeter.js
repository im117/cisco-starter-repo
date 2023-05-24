'use client';

import { useState } from 'react';

export function LatencyMeter() {
    const [latency, setLatency] = useState(0);
    const [connectionOpened, setConnectionOpened] = useState(false);

    // code for opening websocket adapted from https://flaviocopes.com/node-websockets/
    if (!connectionOpened) {
        const url = 'ws://localhost:55455';
        const connection = new WebSocket(url);
        connection.onmessage = msg => {
            setLatency(Date.now() - msg.data);
        }
        setConnectionOpened(true);
    }

    console.log(latency);
    return <>{latency}</>
}