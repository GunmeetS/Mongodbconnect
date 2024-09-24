'use client'

import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<number | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users', { name, email });
      setStatus(response.status);
      console.log(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex h-screen bg-purple-500 justify-center items-center">
      {status === 201 ? (
        <div className="text-white text-3xl">See Result in Console</div>
      ) : (
        <div className="max-w-lg w-full p-4">
          <h1 className="text-2xl font-bold mb-4">Create User</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                placeholder="Enter Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-sm shadow-sm focus:outline-none focus:border-indigo-500 sm:text-sm"
                type="email"
                placeholder="Enter Email"
                required
              />
            </div>
            <button className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>

  );
}
