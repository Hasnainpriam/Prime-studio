import React from 'react'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-20 mx-auto">
          <div className="flex justify-between items-center gap-8 mb-4 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                Gallery
              </h2>

              <p className="max-w-screen-sm hidden md:block text-gray-500">
                I’m a award-winning photographer who specializes in portraits,
                weddings, engagements, maternity, family, and
                commercial/advertising photography.{' '}
              </p>
            </div>

            <Link
              to="/bigallery"
              className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 md:px-8 py-2 md:py-3"
            >
              More
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            <Link
              to="/"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Portrait
              </span>
            </Link>

            <Link
              to="/"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1497210835408-be088d55dc4f?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Fashion
              </span>
            </Link>

            <Link
              to="/"
              className="group h-48 md:h-80 md:col-span-2 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1624400383522-0a65ce4d020d?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Family
              </span>
            </Link>

            <Link
              to="/"
              className="group h-48 md:h-80 flex items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
            >
              <img
                src="https://images.unsplash.com/photo-1549488497-94b52bddac5d?auto=format&q=75&fit=crop&w=600"
                loading="lazy"
                alt=""
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <span className="inline-block text-white text-sm md:text-lg relative ml-4 md:ml-5 mb-3">
                Weeding
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
