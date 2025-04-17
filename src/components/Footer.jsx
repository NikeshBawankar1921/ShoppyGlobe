// Import React library
import React from 'react'

// Footer component definition
const Footer = () => {
  return (
    <div>
      {/* Main Footer Container */}
      <div className="flex fixed bottom-0 justify-between items-center p-4 text-white backdrop-blur-2xl bg-gray-900 w-full z-10">
        
        {/* Footer Text */}
        Made by Nikesh Bawankar

        {/* Social Media Icons List */}
        <ul className='flex gap-4'>
          {/* Instagram Icon */}
          <li><i className="fa-brands fa-instagram"></i></li>

          {/* Facebook Icon */}
          <li><i className="fa-brands fa-facebook"></i></li>

          {/* Twitter Icon */}
          <li><i className="fa-brands fa-twitter"></i></li>

          {/* YouTube Icon */}
          <li><i className="fa-brands fa-youtube"></i></li>
        </ul>
      </div>
    </div>
  )
}

// Export the Footer component for use in other parts of the app
export default Footer
