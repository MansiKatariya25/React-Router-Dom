import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

function Home() {

     
  const navigate = useNavigate()

  // setTimeout(()=>{
  //   navigate("/")
  // },12000)

    return (
    <div className="bg-gray-100 font-sans">
      <section className="showcase bg-cover bg-center text-white h-[540px] flex items-center justify-start" style={{ backgroundImage: "url('./showcase.png')" }}>
        <div className="ml-12 mt-8 text-left">
          <h1 className="text-6xl font-bold text-azure">Welcome to <br /> Career Connect</h1>
          <p className="mt-4 text-lg text-azure">
            Your gateway to mentorship, networking, job opportunities, <br /> and more.
          </p>
          <button className="mt-6 py-3 px-6 bg-gray-800 text-white rounded-lg text-lg hover:bg-gray-700">
            Get Started!
          </button>
        </div>
      </section>

      <h1 className="text-center text-4xl font-bold mt-20">About Us</h1>
        <section className="features container mx-auto mt-12 flex flex-wrap justify-center space-x-4 space-y-4">
            <div className="feature-card bg-white rounded-lg shadow-md p-6 text-center w-[20%] h-[250px] transition transform hover:translate-y-[-5px]">
            <h3 className="text-3xl font-semibold text-blue-300">Community</h3>
            <p className="text-sm text-gray-600 mt-4">Connect with like-minded individuals and industry experts. Follow mentors and companies, stay updated with the latest trends, and gain access to exclusive workshops and webinars.</p>
            </div>
            <div className="feature-card bg-white rounded-lg shadow-md p-6 text-center w-[20%] h-[250px] transition transform hover:translate-y-[-5px]">
            <h3 className="text-3xl font-semibold text-blue-300">Job Listings</h3>
            <p className="text-sm text-gray-600 mt-4">Explore job opportunities tailored to your location and preferences. Our platform provides a comprehensive listing of jobs, ensuring you never miss out on the perfect career opportunity.</p>
            </div>
            <div className="feature-card bg-white rounded-lg shadow-md p-6 text-center w-[20%] h-[250px] transition transform hover:translate-y-[-5px]">
            <h3 className="text-3xl font-semibold text-blue-300">Mock Tests</h3>
            <p className="text-sm text-gray-600 mt-4">Prepare for interviews with our automated mock tests. Simulate real-world scenarios, gain confidence, and improve your performance.</p>
            </div>
            <div className="feature-card bg-white rounded-lg shadow-md p-6 text-center w-[20%] h-[250px] transition transform hover:translate-y-[-5px]">
            <h3 className="text-3xl font-semibold text-blue-300">Profile Finder</h3>
            <p className="text-sm text-gray-600 mt-4">Search and connect with professionals in your field. Our profile finder allows you to filter and find the right connections easily.</p>
            </div>
        </section>

      <footer className="bg-gray-800 text-white text-center py-4 mt-20">
        <p>Career Connect &copy; 2024</p>
      </footer>
    </div>
    )
}

export default Home
