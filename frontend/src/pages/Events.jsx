// import React, { useState, useEffect } from 'react';
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
    const data = useLoaderData();
    // if (data.isError) {
    //     return <p>{data.message}</p>;
    // }
    const events = data.events;
    return <EventsList events={events} />;
    // return <EventsList />;
}

export default Events;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events' };
        // throw {message: 'could not fetch events'}
        throw new Response(JSON.stringify({ message: 'could not fetch events' }), { status: 500 });
    } else {
        // const resData = await response.json();
        // const res = new Response('any data', {
        //     status: 201
        // })
        return response;
    }
}
