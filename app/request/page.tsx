import { RequestForm } from '@/components/RequestForm'

export default function RequestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Request Your Custom Website</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <RequestForm />
          </div>
        </div>
      </div>
    </div>
  )
} 