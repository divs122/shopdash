'use client'

import { useState } from 'react'

// Mock data - Replace with actual API calls
const mockRequests = [
  {
    id: 1,
    shopName: 'Pradeep Prashad Bhandar',
    status: 'In Progress',
    submittedDate: '2024-03-15',
    lastUpdate: '2024-03-18',
  },
  {
    id: 2,
    shopName: 'Modern Electronics',
    status: 'Pending',
    submittedDate: '2024-03-17',
    lastUpdate: '2024-03-17',
  },
]

export default function DashboardPage() {
  const [requests] = useState(mockRequests)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Website Requests</h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>
              
              <div className="space-y-6">
                {requests.map(request => (
                  <div
                    key={request.id}
                    className="border rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{request.shopName}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        request.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-800'
                          : request.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {request.status}
                      </span>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      <p>Submitted: {request.submittedDate}</p>
                      <p>Last Update: {request.lastUpdate}</p>
                    </div>
                    
                    <div className="mt-4 flex space-x-4">
                      <button className="text-primary hover:text-primary/80">
                        View Details
                      </button>
                      <button className="text-primary hover:text-primary/80">
                        Contact Support
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 