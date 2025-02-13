import { Image, useDisclosure } from "@chakra-ui/react"
import wabtecLogoSvg from "../assets/WAB.D.svg"
import { Link } from "react-router"
import { useState } from "react"

const Navbar = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div className="navbar p-2">
      <Link to="/">
        <a className="outline flex outline-1 p-1 rounded-sm justify-between bg-black/40 w-fit">
            <h1 className="">
              WabField
            </h1>

            <Image src={wabtecLogoSvg} className="w-5 h-5 ml-2" alt="logo" />
        </a>
      </Link>
    </div>
  )
}

export default Navbar