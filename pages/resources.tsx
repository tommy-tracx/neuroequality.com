import Layout from '../components/Layout'

export default function Resources() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <p className="text-gray-700 mb-4">Helpful links and guides for neurodiverse individuals and allies.</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><a href="https://example.com" className="text-blue-600 hover:underline">Community Forums</a></li>
        <li><a href="https://example.com" className="text-blue-600 hover:underline">Educational Articles</a></li>
        <li><a href="https://example.com" className="text-blue-600 hover:underline">Support Groups</a></li>
      </ul>
    </Layout>
  )
}
