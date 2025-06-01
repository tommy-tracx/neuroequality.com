import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">Reach out via email at <a href="mailto:info@neuroequality.com" className="text-blue-600 hover:underline">info@neuroequality.com</a></p>
    </Layout>
  )
}
