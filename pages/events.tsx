import Layout from '../components/Layout'

export default function Events() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <p className="text-gray-700 mb-4">Join us at our workshops and meetups.</p>
      <ul className="space-y-2 text-gray-700">
        <li>June 10 - Online Webinar on Accessibility</li>
        <li>July 5 - Community Meetup</li>
      </ul>
    </Layout>
  )
}
