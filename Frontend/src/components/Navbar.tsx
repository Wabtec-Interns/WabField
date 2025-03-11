import { Flex, Image, useDisclosure } from "@chakra-ui/react"
import wabtecLogoSvg from "../assets/WAB.D.svg"
import { Link } from "react-router"
import { useState } from "react"
import { useColorModeValue } from "./ui/color-mode"
import DesktopNav from "./NavItems"

const Navbar = () => {

  const {isOpen, onOpen, onClose} = useDisclosure()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const colorModeValue = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  return (
    <div className="navbar p-2 flex justify-between">
      <Link to="/">
        <a className="outline flex outline-1 p-1 rounded-sm justify-between bg-black/40 w-fit">
<<<<<<< HEAD
            <h1 className="">
=======
            <h1 className="text-white">
>>>>>>> main
              WabField
            </h1>

            <Image src={wabtecLogoSvg} className="w-5 h-5 ml-2" alt="logo" />
        </a>
      </Link>

      <Flex
        display={
        {
          base: 'revert',
          md: 'flex',
        }
        }
        flex={1}
        alignItems="center"
        justifyContent="center"
      >
        <DesktopNav  />
      </Flex>
    </div>
  )
}

export default Navbar