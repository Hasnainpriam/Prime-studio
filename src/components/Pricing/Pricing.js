import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8 xl:mb-12">
            My plans for you
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 md:mb-8">
            <div className="flex flex-col border rounded-lg p-4 pt-6">
              <div className="mb-12">
                <div className="text-gray-800 text-2xl font-bold text-center mb-2">
                  One Hour
                </div>

                <p className="text-gray-500 text-center mx-auto px-8 mb-8">
                  I would like to give you a unique photography experience.
                </p>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Weeding shoots</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Family Shoots</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Corporate shoots</span>
                  </div>
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">New Born shoots</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 mt-auto">
                <div className="flex justify-center items-end gap-1">
                  <span className="self-start text-gray-600">$</span>
                  <span className="text-4xl text-gray-800 font-bold">450</span>
                  <span className="text-gray-500">per/hour</span>
                </div>

                <Link
                  to="/checkout"
                  className="block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Hire for hour
                </Link>
              </div>
            </div>

            <div className="flex flex-col border-2 border-indigo-500 rounded-lg relative p-4 pt-6">
              <div className="mb-12">
                <div className="flex justify-center absolute -top-3 inset-x-0">
                  <span className="h-6 flex justify-center items-center bg-indigo-500 text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1">
                    most popular
                  </span>
                </div>

                <div className="text-gray-800 text-2xl font-bold text-center mb-2">
                  One Day
                </div>

                <p className="text-gray-500 text-center mx-auto px-8 mb-8">
                  Capture your special moments for you and your families
                  creatively and beautifully.
                </p>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Unlimited Photos</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Weeding Shoots</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Family Shoots</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Corporate shoots</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">All others</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 mt-auto">
                <div className="flex justify-center items-end gap-1">
                  <span className="self-start text-gray-600">$</span>
                  <span className="text-4xl text-gray-800 font-bold">1000</span>
                  <span className="text-gray-500">per/Day</span>
                </div>

                <Link
                  to="/checkout"
                  className="block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Hire for Day
                </Link>
              </div>
            </div>

            <div className="flex flex-col border rounded-lg p-4 pt-6">
              <div className="mb-12">
                <div className="text-gray-800 text-2xl font-bold text-center mb-2">
                  Tow Days
                </div>

                <p className="text-gray-500 text-center mx-auto px-8 mb-8">
                  If you are still looking for your best of you version yet, I
                  may help you
                </p>

                <div className="space-y-2">
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Unlimited Photos</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Weeding shoots</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Family Shoots</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">Corporate Shoot</span>
                  </div>

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>

                    <span className="text-gray-600">All others</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 mt-auto">
                <div className="flex justify-center items-end gap-1">
                  <span className="self-start text-gray-600">$</span>
                  <span className="text-4xl text-gray-800 font-bold">1800</span>
                  <span className="text-gray-500">total cost</span>
                </div>

                <Link
                  to="/checkout"
                  className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                >
                  Hire for Tow Days
                </Link>
              </div>
            </div>
          </div>

          <div className="text-gray-500 text-sm sm:text-base text-center">
            Need help deciding?
            <Link
              to="/"
              className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
            >
              Get in touch
            </Link>
            .
          </div>
        </div>
      </div>
    </>
  )
}

export default Pricing
