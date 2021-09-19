import React from "react"
import Bio from "./bio"

const Footer = ({author}) => {
  return (
    <footer className="my-12 text-center">
      <hr />
      <Bio />
      {new Date().getFullYear()}. Development in progress, pardon the mess.
    </footer>
  )
}

export default Footer