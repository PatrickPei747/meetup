import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/St_Matthew_In_The_City_Auckland.jpg",
    address: "CBD, Auckland 1010",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/St_Matthew_In_The_City_Auckland.jpg",
    address: "CBD 5, Auckland 1010",
    description: "This is second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
