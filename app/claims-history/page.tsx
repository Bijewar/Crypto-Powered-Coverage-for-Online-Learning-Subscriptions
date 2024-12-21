import { Button } from '../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'

const claims = [
  { id: 1, date: '2023-05-15', status: 'Approved', amount: 250.00 },
  { id: 2, date: '2023-04-22', status: 'Pending', amount: 500.00 },
  { id: 3, date: '2023-03-10', status: 'Rejected', amount: 100.00 },
  { id: 4, date: '2023-02-05', status: 'Approved', amount: 300.00 },
]

export default function ClaimsHistory() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Claims History</h1>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Claim Number</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {claims.map((claim) => (
            <TableRow key={claim.id}>
              <TableCell>{claim.id}</TableCell>
              <TableCell>{claim.date}</TableCell>
              <TableCell>{claim.status}</TableCell>
              <TableCell>${claim.amount.toFixed(2)}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm">View Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

