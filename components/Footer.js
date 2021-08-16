import React from 'react'

export default function Footer() {
    return (
        <footer className="container px-4 py-36">
          <div className="font-sans">
            <h2 className="text-2xl sm:text-4xl font-sans font-bold text-gray-900">
              Have a Project?
            </h2>
            <p className="text-gray-400 text-2xl sm:text-3xl">
              Let’s work together -{" "}
              <a
                href="mailto:saad@pixelsbit.com"
                className="underline hover:text-gray-500"
              >
                Hire me
              </a>
            </p>
          </div>
        </footer>
    );
}
