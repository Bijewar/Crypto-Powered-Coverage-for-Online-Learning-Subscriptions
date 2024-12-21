"use client"

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'

export default function FileClaim() {
  const [formData, setFormData] = useState({
    incidentDate: '',
    description: '',
    amount: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">File a Claim</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Claim Form</CardTitle>
          <CardDescription>Please provide details about your claim</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="incidentDate" className="block mb-2">Incident Date</label>
              <Input
                type="date"
                id="incidentDate"
                name="incidentDate"
                value={formData.incidentDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block mb-2">Incident Description</label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>
            <div>
              <label htmlFor="amount" className="block mb-2">Claim Amount</label>
              <Input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Enter amount in USD"
                required
              />
            </div>
            <div>
              <label htmlFor="documents" className="block mb-2">Supporting Documents</label>
              <Input
                type="file"
                id="documents"
                name="documents"
                accept=".pdf,.doc,.docx,.jpg,.png"
                multiple
              />
            </div>
            <Button type="submit">Submit Claim</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

