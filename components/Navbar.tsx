import Link from 'next/link'

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
    { href: '/events', label: 'Events' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold">
          NeuroEquality
        </Link>
        <ul className="flex space-x-4">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className="text-gray-700 hover:text-gray-900">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
