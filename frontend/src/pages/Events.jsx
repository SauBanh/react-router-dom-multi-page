import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function Events() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [fetchedEvents, setFetchedEvents] = useState();
    // const [error, setError] = useState();

    // useEffect(() => {
    //     async function fetchEvents() {
    //         setIsLoading(true);

    //         setIsLoading(false);
    //     }

    //     fetchEvents();
    // }, []);

    // return (
    //     <>
    //         <div style={{ textAlign: 'center' }}>
    //             {isLoading && <p>Loading...</p>}
    //             {error && <p>{error}</p>}
    //         </div>
    //         {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    //     </>
    // );
    const events = useLoaderData();
    return <EventsList events={events} />;
}

export default Events;
