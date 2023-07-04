import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-success text-light text-center py-3">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} EMedicine. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
