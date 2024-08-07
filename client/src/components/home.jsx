import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Home = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-b-lg shadow-lg">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-4">
          Rover&Out
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Explore the Martian landscape like never before with this cutting-edge
          app.
        </p>
        <Button
          className="bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 rounded-full px-10 py-7 shadow-lg text-xl"
          onClick={handleClick}
        >
          Login
        </Button>
      </section>

      <section className="py-16 px-8 md:px-12">
        <h2 className="text-4xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Interactive 3D Map
            </h3>
            <p className="text-gray-300">
              Explore Mars with an interactive 3D map.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              3D Rover Model
            </h3>
            <p className="text-gray-300">
              View and interact with a 3D model of the rover.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Photo Gallery
            </h3>
            <p className="text-gray-300">
              Access a gallery of all 695670 photos taken by Curiosity.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Annotate Images
            </h3>
            <p className="text-gray-300">
              Click on images to utilize tools for zooming, panning, and
              annotating. All annotated photos are saved in a separate gallery.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Save favorites
            </h3>
            <p className="text-gray-300">
              Create a collection of all the beautiful and unique terrain and
              features of Mars.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-12">
        <div className="flex justify-center">
          <img
            className="h-[40rem] w-[51rem] object-cover rounded-lg"
            src="rover.jpg"
            alt="Rover"
          />
          <img
            className="h-[40rem] w-[51rem] object-cover rounded-lg ml-20"
            src="homeImg.png"
            alt="Rover"
          />
        </div>
      </section>

      <section className="py-16 px-8 md:px-12">
        <p className="text-3xl md:text-4xl text-white mb-8 font-semibold text-center">
          Technologies:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            React
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Javascript
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Express
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Mongoose
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            MongoDB Atlas
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Vercel
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Postman
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Tailwind CSS
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Shadcn/ui
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Three.js
          </li>
          <li className="bg-gray-600 p-4 rounded-lg border border-gray-500 text-gray-100 text-lg font-medium shadow-sm flex items-center justify-center">
            Fiber.Js
          </li>
        </ul>
      </section>

      <section className="bg-gray-700 py-12 px-8 md:px-12 mt-12 rounded-lg shadow-lg border border-gray-600 mr-12 ml-12 mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-4">
          I'm always open to discussing projects, opportunities, or just having
          a chat! Feel free to use the form below or you can contact me directly
          at idavila2021@gmail.com. I am looking forward to hearing from you!
        </p>
        <form
          action="https://formspree.io/f/your-form-id" // Replace with form service endpoint
          method="POST"
          className="space-y-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="p-3 rounded-lg border border-gray-600 bg-gray-800 text-gray-100"
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button
            type="submit"
            className="bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 rounded-full px-8 py-4 shadow-lg"
          >
            Send Message
          </Button>
        </form>
      </section>

      <footer className="flex justify-center items-center p-4 bg-gray-800 text-gray-500 border-t border-gray-700">
        <p className="text-sm">{new Date().getFullYear()} Rover&Out</p>
      </footer>
    </div>
  );
};

export default Home;
