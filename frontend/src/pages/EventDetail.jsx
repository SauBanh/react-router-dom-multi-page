import React from 'react';
import { useParams } from 'react-router-dom';

function EventDetail() {
    const params = useParams();

    return (
        <>
            <h1>EventDetail</h1>
            <p>EventId: {params.eventId}</p>
        </>
    );
}

export default EventDetail;
