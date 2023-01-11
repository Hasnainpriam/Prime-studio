import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&q=75&fit=crop&crop=top&w=1200&h=500"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="content"
                    className="object-cover object-center h-20 w-20 rounded-full"
                    src="https://images.unsplash.com/photo-1640952131659-49a06dd90ad2?auto=format&q=75&fit=crop&crop=top&w=600&h=600"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Difference between authorization and authentication?
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Authentication is the process of verifying your identity by
                    confirming your credentials...
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Authentication is the process of verifying your identity by
                  confirming your credentials, such as your User Name/User ID
                  and password. For this, we employ the OpenID Connect protocol.
                  By clicking the My Account option in the top right corner, you
                  may manage your authentication. on the other hand
                  Authorization, on the other hand, happens once cloudHQ has
                  successfully confirmed your identity. Then you can grant
                  cloudHQ access to your resources, such as files and emails.
                  The OAuth2 protocol is used to handle this. Simply put,
                  authorisation allows our system to access your data stored in
                  the cloud. As a result, you must grant admin@ access to Box
                  and Google Drive. Under the Cloud Accounts page, you can
                  authorize users.
                </p>
                <Link
                  to="/"
                  className="text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1545454675-60abfab2a58a?auto=format&q=75&fit=crop&crop=top&w=1200&h=500"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="content"
                    className="object-cover object-center h-20 w-20 rounded-full"
                    src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?auto=format&q=75&fit=crop&crop=top&w=600&h=600"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Why are you using firebase? What other options do you have
                    to implement authentication?
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Firebase Authentication additionally contains an open source
                    UI toolkit that simplifies...
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Firebase Authentication additionally contains an open source
                  UI toolkit that simplifies the creation of the numerous
                  authentication flows required to provide a positive user
                  experience. Password resets, account linking, and login tips
                  that lessen cognitive burden while dealing with many login
                  options are all included into the Firebase Authentication UI.
                  These flows are built on years of UX research on Google,
                  Youtube, and Android sign-in and sign-up journeys. It features
                  Android's Smart Lock for Passwords, which has resulted in
                  considerable increases in sign-in conversion for a variety of
                  apps. Because Firebase UI is open source, you may freely
                  customize the interface to make it feel like it belongs in
                  your project.
                </p>
                <Link
                  to="/"
                  className="text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-5/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&q=75&fit=crop&crop=top&w=1200&h=500"
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    alt="content"
                    className="object-cover object-center h-20 w-20 rounded-full"
                    src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&q=75&fit=crop&crop=top&w=600&h=600"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    What other services does firebase provide other than
                    authentication?
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Firebase was created by Firebase Inc. and eventually
                    purchased by Google.{' '}
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  It offers a variety of services to assist you in developing
                  high-quality mobile and web applications to help you build
                  your business.It works with clients on the Web, iOS, Android,
                  and OS X. Backend programming, authentication, API
                  development, database (real-time cloud-hosted NoSQL database
                  and cloud firestore), file storage, and other issues are all
                  taken care of by Firebase. All of the services provided by
                  Firebase are extremely efficient and quick.Firebase offers a
                  variety of services, the most useful of which are: Cloud
                  Functions, Cloud Firestore, Authentication\sHosting, Storage
                  in the Cloud, Predictions from Google Analytics, Messaging in
                  the Cloud, Links that are constantly changing, Remote
                  Configuration, Firebase is a complete package that may help
                  you construct mobile or web applications faster and more
                  efficiently with fewer resources. Let's take a look at some of
                  the services and how they're used.
                </p>
                <Link
                  to="/"
                  className="text-indigo-500 inline-flex items-center"
                >
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog
