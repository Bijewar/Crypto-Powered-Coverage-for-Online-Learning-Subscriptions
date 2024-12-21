import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#3498db] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>123 Crypto Street, Digital City</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@cryptocover.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#f1c40f]"><Facebook /></Link>
              <Link href="#" className="hover:text-[#f1c40f]"><Twitter /></Link>
              <Link href="#" className="hover:text-[#f1c40f]"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 CryptoCover. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

