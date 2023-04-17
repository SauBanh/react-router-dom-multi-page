import React, { Suspense } from 'react';
// import { json, useParams, useRouteLoaderData } from 'react-router-dom';
import { json, redirect, useRouteLoaderData, defer, Await } from 'react-router-dom';

import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetail() {
    // const params = useParams();
    const { event, events } = useRouteLoaderData('event-detail');

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={event}>{(loaderEvent) => <EventItem event={loaderEvent} />}</Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={events}>{(loaderEvents) => <EventsList events={loaderEvents} />}</Await>
            </Suspense>
        </>
    );
}

export default EventDetail;

async function loaderEvent(id) {
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw json(
            { message: 'Could not fetch details for selected event' },
            {
                status: 500,
            },
        );
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

async function loaderEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events' };
        // throw {message: 'could not fetch events'}
        // throw new Response(JSON.stringify({ message: 'could not fetch events' }), { status: 500 });
        throw json(
            { message: 'could not fetch events' },
            {
                status: 500,
            },
        );
        // return json(
        //     { message: 'could not fetch events' },
        //     {
        //         status: 500,
        //     },
        // );
    } else {
        // const resData = await response.json();
        // const res = new Response('any data', {
        //     status: 201
        // })
        // return response;
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader({ request, params }) {
    const id = params.eventId;
    return defer({
        event: await loaderEvent(id),
        events: loaderEvents(),
    });
}

export async function action({ params, request }) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: request.method,
    });

    if (!response.ok) {
        throw json({ message: 'Could not delete event.' }, { status: 500 });
    }
    return redirect('/events');
}
