import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to NeuroEquality</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Championing inclusivity and accessibility for the neurodiverse community.
        </p>
      </section>
    </Layout>
  )
}
