import Link from 'next/link'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Shield, Zap, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Protect Your Online Learning Investment</h1>
        <p className="text-xl mb-8">Get crypto-powered coverage for your online learning subscriptions</p>
        <Button asChild size="lg">
          <Link href="/register">Get Started</Link>
        </Button>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose CryptoCover?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 text-[#3498db]" />
                Secure Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Blockchain-backed insurance ensures transparent and tamper-proof coverage for your online courses.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 text-[#3498db]" />
                Instant Claims
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Smart contracts enable quick and automated claim processing, getting you reimbursed faster.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 text-[#3498db]" />
                Flexible Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Customize your coverage period and amount to fit your specific online learning needs.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <p className="italic mb-4">"CryptoCover gave me peace of mind when investing in expensive online courses. Their claim process was smooth and quick!"</p>
              <p className="font-semibold">- Sarah J., Data Science Student</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="italic mb-4">"As a lifelong learner, I love how CryptoCover protects my various online subscriptions. It's innovative and reliable."</p>
              <p className="font-semibold">- Michael T., Software Engineer</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

