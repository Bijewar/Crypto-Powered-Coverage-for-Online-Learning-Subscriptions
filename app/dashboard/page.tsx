import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Subscription Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Subscription Overview</CardTitle>
          <CardDescription>Your current subscription details</CardDescription>
        </CardHeader>
        <CardContent>
          <p><strong>Plan:</strong> Premium Learning Package</p>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Next Payment:</strong> July 1, 2023</p>
          <Button className="mt-4">Manage Subscription</Button>
        </CardContent>
      </Card>

      {/* Coverage Details */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Coverage Details</CardTitle>
          <CardDescription>Your current coverage information</CardDescription>
        </CardHeader>
        <CardContent>
          <p><strong>Coverage Amount:</strong> $5,000</p>
          <p><strong>Coverage Period:</strong> June 1, 2023 - May 31, 2024</p>
          <p><strong>Deductible:</strong> $100</p>
          <Button className="mt-4">File a Claim</Button>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Recent transactions for your subscription</CardDescription>
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
                <TableCell>June 1, 2023</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>May 1, 2023</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>April 1, 2023</TableCell>
                <TableCell>$49.99</TableCell>
                <TableCell>Paid</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

