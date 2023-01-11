import React from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <div className="bg-gray-100 p-10">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 justify-center items-center">
          <div className="w-full md:w-2/3 flex flex-col items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-indigo-500">
              Get the latest updates
            </h1>
            <p className="mb-8 leading-relaxed">Sign up for our newsletter</p>
            <form className="w-full max-w-md flex gap-2 mb-3 sm:mb-5">
              <input
                placeholder="Email"
                className="w-full flex-1 bg-gray-white text-gray-800 placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
              />

              <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2">
                Send
              </button>
            </form>
            <div className="mt-5">
              <p className="text-gray-400 text-xs text-center">
                By signing up to our newsletter you agree to our{' '}
                <Link
                  to="/"
                  className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                >
                  Term of Service
                </Link>{' '}
                and{' '}
                <Link
                  to="/"
                  className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter
