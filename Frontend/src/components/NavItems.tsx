
import { useColorModeValue } from './ui/color-mode'
import { Box, Link, Popover, PopoverTrigger, Stack } from '@chakra-ui/react'


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
            <Popover
                trigger={'hover'}
                placement={'bottom-start'}
            >
                <PopoverTrigger>
                    <Link
                        href={route.link}
                        className='text-white hover:text-gray-300 px-2 py-1 rounded-md text-sm font-medium'
                    >
                        {route.label}
                    </Link>
                </PopoverTrigger>
            </Popover>
        </Box>
      ))}
    </Stack>
   </>
  )
}

