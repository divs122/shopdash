'use client'

import { useState } from 'react'

// Mock data - Replace with actual API calls
const mockRequests = [
  {
    id: 1,
    shopName: 'Pradeep Prashad Bhandar',
    ownerName: 'Pradeep Kumar',
    email: 'pradeep@example.com',
    phone: '+1 (555) 123-4567',
    status: 'In Progress',
    submittedDate: '2024-03-15',
    lastUpdate: '2024-03-18',
  },
  {
    id: 2,
    shopName: 'Modern Electronics',
    ownerName: 'Rajesh Singh',
    email: 'rajesh@example.com',
    phone: '+1 (555) 987-6543',
    status: 'Pending',
    submittedDate: '2024-03-17',
    lastUpdate: '2024-03-17',
  },
]

export default function AdminPage() {
  const [requests, setRequests] = useState(mockRequests)
  const [selectedStatus, setSelectedStatus] = useState('all')

  const filteredRequests = selectedStatus === 'all'
    ? requests
    : requests.filter(request => request.status.toLowerCase() === selectedStatus)

  const updateStatus = (id: number, newStatus: string) => {
    setRequests(prev =>
      prev.map(request =>
        request.id === id
          ? { ...request, status: newStatus, lastUpdate: new Date().toISOString().split('T')[0] }
          : request
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="all">All Requests</option>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Shop Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dates
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRequests.map(request => (
                    <tr key={request.id}>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-900">{request.shopName}</div>
                        <div className="text-sm text-gray-500">{request.ownerName}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{request.email}</div>
                        <div className="text-sm text-gray-500">{request.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          value={request.status}
                          onChange={(e) => updateStatus(request.id, e.target.value)}
                          className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="Pending">Pending</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          Submitted: {request.submittedDate}
                        </div>
                        <div className="text-sm text-gray-500">
                          Updated: {request.lastUpdate}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-primary hover:text-primary/80 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 