
import { ChevronRightIcon } from 'lucide-react'
import { useColorModeValue } from './ui/color-mode'
import { Box, Link, PopoverContent, PopoverRoot, PopoverTrigger, Stack } from '@chakra-ui/react'
import DesktopSubnav from './DesktopSubnav'



const routes = [
    {
      label: "Início",
      link: "/",
    },
    {
      label: "Obras",
      children: [
        {
          label: "Lista de Obras",
          sublabel: "Lista de projetos cadastrados",
          link: "/survey",
        },
        {
          label: "Cadastro de Obras",
          sublabel: "Cadastro dos projetos que devem ser feitos para armazenar os relatórios de campo",
          link: "/survey/create",
        },
        {
          label: "Relatórios de Campo",
          sublabel: "Relatórios de campo dos projetos cadastrados",
          link: "/survey/projectReports",
        },
        {
          label: "Criar Relatórios",
          sublabel: "Crie os relatórios de campo dos projetos cadastrados",
          link: "/survey/projectReports/create",
        }
      ]
    },
    {
      label: "Sobre nós",
      link: "/about",
    },
  ]

const DesktopNav = () => {
    const colorModeValue = useColorModeValue('white', 'gray.800')
  return (
   <>
    <Stack direction={'row'} borderSpacing={4}>
      {routes.map((route) => (
        <Box
            key={route.label}
        >
            <PopoverRoot
            >
                <PopoverTrigger asChild>
                    <Link
                        href={route.link}
                        className='text-white hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium'
                    >
                        {route.label}
                    </Link>
                </PopoverTrigger>

                {route.children && (
                    <PopoverContent
                        border={0}
                        boxShadow={'xl'}
                        bg={colorModeValue}
                        p={4}
                        rounded={'xl'}
                        minW={'sm'}
                        zIndex={50}
                    >
                        <Stack>
                        {route.children.map((child) => (
                            <DesktopSubnav key={child.label} {...child} />
                        ))}
                </Stack>
                    </PopoverContent>
                )}
            </PopoverRoot>
        </Box>
      ))}
    </Stack>
   </>
  )
}

export default DesktopNav

