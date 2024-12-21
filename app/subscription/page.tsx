import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'

export default function SubscriptionDetails() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Subscription Details</h1>
      
      {/* Subscription Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Premium Learning Package</CardTitle>
          <CardDescription>Your current subscription plan</CardDescription>
        </CardHeader>
        <CardContent>
          <p><strong>Description:</strong> Access to all premium courses and learning materials</p>
          <p><strong>Price:</strong> $49.99/month</p>
          <p><strong>Status:</strong> Active</p>
          <Button className="mt-4">Edit Subscription</Button>
        </CardContent>
      </Card>

      {/* Coverage Details */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Coverage Details</CardTitle>
          <CardDescription>Your crypto-powered coverage information</CardDescription>
        </CardHeader>
        <CardContent>
          <p><strong>Coverage Amount:</strong> $5,000</p>
          <p><strong>Coverage Period:</strong> June 1, 2023 - May 31, 2024</p>
          <p><strong>Deductible:</strong> $100</p>
          <p><strong>Smart Contract Address:</strong> 0x1234...5678</p>
        </CardContent>
      </Card>

      {/* Payment Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Payment Schedule</CardTitle>
          <CardDescription>Upcoming payments for your subscription</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>July 1, 2023</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>August 1, 2023</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>September 1, 2023</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Pending</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

