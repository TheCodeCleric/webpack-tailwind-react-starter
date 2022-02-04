import React, { useContext, useEffect, useState, useCallback } from 'react'
import CIndex from '../components.index.js'

const Layout = ({ children }) => {
  const { Footer } = CIndex

  return (
    <>
      <nav className="flex justify-center">Navbar</nav>
      {children}
      <Footer />
    </>
  )
}

export default Layout
