import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook,Twitter,Instagram,Youtube  } from "lucide-react"

const Footer = () => {
  return (
    <footer className=" md:py-6 w-full bottom-0">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted-foreground">&copy; 2024 Dev Legion. All rights reserved.</p>
        <nav className="flex gap-4 md:gap-6">
          <Link to="#" >
            <Facebook className="icon transition duration-200 ease-in-out hover:text-secondary"/>
          </Link>
          <Link to="#" >
            <Twitter className="icon transition duration-200 ease-in-out hover:text-secondary"/>
          </Link>
          <Link to="#">
           <Instagram className="icon transition duration-200 ease-in-out hover:text-secondary"/>
          </Link>
          <Link to="#" >
           <Youtube className="icon transition duration-200 ease-in-out hover:text-secondary"/>
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer