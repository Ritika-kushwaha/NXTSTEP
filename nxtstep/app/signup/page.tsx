"use client";
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
//   const [success, setSuccess] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//
//   useEffect(() => {
//     const savedUsername = localStorage.getItem('rememberedUsername');
//     if (savedUsername) {
//       setUsername(savedUsername);
//       setRememberMe(true);
//     }
//   }, []);

//   const handleRegister = async () => {
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', { username, password });
//       setSuccess('Registration successful! Please login.');
//       setError('');
//       setUsername('');
//       setPassword('');
//       if (rememberMe) {
//         localStorage.setItem('rememberedUsername', username);
//       } else {
//         localStorage.removeItem('rememberedUsername');
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || 'Registration failed');
//       setSuccess('');
//     }
//   };

  return (
    <div className="font-family: Arial, sans-serif min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
      <div>
        <div className=" h-80 w-90 bg-custom-D1D1E0 bg-opacity-10 p-6 rounded-xl shadow-md w-full max-w-md ">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Sign Up to NxtStep</h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <div className=" bg-custom-D1D1E0 bg-opacity-50 rounded-md">
            <input
              className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="bg-custom-D1D1E0 bg-opacity-50 rounded-lg">
            <input
              className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              //type={showPassword ? 'text' : 'password'}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            {/* <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-900 opacity-60 hover:opacity-100"
            >{showPassword ? <FaEyeSlash /> : <FaEye />}
            </button> */}
          </div>
          <div className="bg-custom-D1D1E0 bg-opacity-50 rounded-lg">
            <input
              className="border p-2 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              //type={showPassword ? 'text' : 'password'}
              type="password"
              placeholder="Confirm Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-purple-900 opacity-60 hover:opacity-100"
            >{showPassword ? <FaEyeSlash /> : <FaEye />}
            </button> */}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                //checked={rememberMe}
                //onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-600">I agree the <Link href="/reset-password" className="text-blue-500 hover:underline">terms and conditions</Link></label>
            </div>
            {/* <Link href="/reset-password" className="text-blue-500 hover:underline">Forget Password?</Link> */}
          </div>
          <p className="mt-4 text-center bg-custom-3D5878">Already have an account? <Link href="/login" className="text-blue-500 hover:underline">Sign In</Link></p>
        </div>
        <div className="bg-custom-D1D1E0 mb-4 h-17 ml-4 w-80 bg-opacity-50 p-6 rounded-lg shadow-lg ">
          <button
            className="bg-custom-D1D1E0 text-white p-2 w-full rounded hover:bg-blue-200 transition duration-200"
            //onClick={handleLogin}
          >Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}