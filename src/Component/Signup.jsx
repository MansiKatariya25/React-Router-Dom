import React from 'react'

function Signup() {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container bg-white rounded-2xl shadow-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <div className=" mb-4">
          <label className="mb-1 text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 text-gray-700">Mobile Number</label>
          <input
            type='text'
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <button className="btn w-full py-2 bg-blue-400 text-white font-semibold rounded-lg hover:bg-blue-500">Sign Up</button>
         
      </div>
    </div>
    )
}

export default Signup
