let events = [
    {
        title:"conference",
        date: new Date("2024-09-25"),
        location: 'Conference Center',
        attendees: new Set(["jane","Luke", "john","hampster","dave"])
    },   
    {
        title:"meeting",
        date: new Date("2024-09-26"),
        location: 'Meeting Room',
        attendees: new Set(["Lucy","Regan", "James", "Emily"])
    },
    {
        title:"birthday party",
        date: new Date("2024-09-27"),
        location: 'Dinner Room',
        attendees: new Set(["Sarah","Kate", "Michael", "Olivia"])
    },
    {
        title:"game night",
        date: new Date("2024-09-28"),
        location: 'Game Room',
        attendees: new Set(["David","Sophia", "Andrew", "Emma"])
    },
    {
        title:"vacation",
        date: new Date("2024-09-29"),
        location: 'Hotel',
        attendees:new Set(["Michael","Emma", "Jack", "Olivia"])
    }
]

const getUpcomingEvents = (events) => {
    const now = new Date();
    const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    return events
        .filter(event => event.date >= now && event.date <= oneWeekFromNow)
        .map(({ title, date, location }) => ({
            title,
            date,
            location
        }));
};

// console.log(getUpcomingEvents(events));


// function weakMap(){

// }


function extractEvents({ title, date, location }) {
    console.table([{ title, date, location }]);
}
// events.forEach(extractEvents);

function addAttendee(title, attendee) {
    // Find the event by title
    const event = events.find(event => event.title === title);

    // Check if event is found
    if (event) {
        event.attendees.add(attendee);  // Add the attendee to the Set
        console.log(`${attendee} has been added to event title: ${title}.`);
    } else {
        console.log(`Event with title '${title}' not found.`);
    }
}
// addAttendee("meeting","hampster");
// console.log(events[1].attendees);

function deleteEvent(start, deleteCount) {
    events.splice(start,deleteCount);

    return console.log(events);
}
//deleteEvent(0,1);

function mostAttendees(maxEvent, currentEvent) {
    // Compare the current max event with the current event based on the size of attendees
    if (currentEvent.attendees.size > maxEvent.attendees.size) {
        return currentEvent;
    }
    return maxEvent;
}

// Reduce to find the event with the most attendees, starting with the first event as the initial value
const eventWithMostAttendees = events.reduce(mostAttendees, events[0]);

// Display the event with the highest number of attendees
console.log(`The event with the most attendees is "${eventWithMostAttendees.title}" with ${eventWithMostAttendees.attendees.size} attendees.`);