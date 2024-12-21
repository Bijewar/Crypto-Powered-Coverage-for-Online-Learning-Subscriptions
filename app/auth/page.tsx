"use client"

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'

export default function Auth() {
  const [activeTab, setActiveTab] = useState('login')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{activeTab === 'login' ? 'Login' : 'Register'}</CardTitle>
          <CardDescription>
            {activeTab === 'login'
              ? 'Enter your credentials to access your account'
              : 'Create a new account to get started'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Button type="submit" className="w-full">Login</Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input type="text" placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
                <Input type="password" placeholder="Password" required />
                <Input type="password" placeholder="Confirm Password" required />
                <Button type="submit" className="w-full">Register</Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

