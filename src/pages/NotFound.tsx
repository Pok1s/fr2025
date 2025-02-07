import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Oops! Looks like it doesn't exist</p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-8 py-3 rounded-full"
        >
          Back
        </button>
      </div>
    </Layout>
  )
}

export default NotFound 