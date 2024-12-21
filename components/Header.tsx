import Link from 'next/link'
import { Button } from '../components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#3498db]">
          CryptoCover
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/dashboard" className="hover:text-[#3498db]">Dashboard</Link></li>
            <li><Link href="/subscription" className="hover:text-[#3498db]">Subscription</Link></li>
            <li><Button asChild variant="outline"><Link href="/login">Login</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

