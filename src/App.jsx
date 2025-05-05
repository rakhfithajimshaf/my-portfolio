import Hero from "./components/Hero";
import React from "react";
import { MdEmail } from "react-icons/md";


function App() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar */}
      <header className="bg-blue-600 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">My Portfolio</div>
          <ul className="flex space-x-6 text-white">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <Hero />ca
      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
          I am a second-year web technology student, excited to continue my journey into the world of web development.
      I am building a strong foundation in HTML, CSS, and JavaScript, with the goal of mastering both front-end 
      and back-end technologies to become a full-stack developer. From a young age, I’ve been fascinated by technology 
      and how it shapes the world around us. This passion led me to pursue a degree in web technology. I’m passionate 
      about learning the full development lifecycle — from creating interactive user interfaces to managing databases 
      and server-side applications.
          </p>
        </div>
      </section>

     {/* Projects Section */}
<section id="projects" className="py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
    <div className="flex justify-center">
      {/* Example Project Card */}
      <div className="bg-white p-6 rounded shadow-lg max-w-md">
        <h3 className="text-2xl font-bold mb-2">Attenzo - Student Attendance Tracker</h3>
        <p className="text-gray-600">
          Attenzo is a front-end web application built to track student attendance. Developed as part of my college
          project, the website provides an intuitive and user-friendly interface for managing student attendance records.
          It allows users to easily view a list of students and manually mark them as present or absent. <br />
          <b>Technologies used:</b> HTML, CSS, Bootstrap, and JavaScript.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      
      <section id="contact" className="py-16 bg-blue-700 text-white">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
    <p className="text-lg flex justify-center items-center gap-2">
      <MdEmail className="text-2xl" />
      rakhfithajimshaf@gmail.com
    </p>
  </div>
</section>

    </div>
  );
}

export default App;
