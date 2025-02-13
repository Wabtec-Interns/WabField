
import { useColorModeValue } from './ui/color-mode'
import { Box, Link, Popover, PopoverContent, PopoverRoot, PopoverTrigger, Stack, Text } from '@chakra-ui/react'


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
                    >
                        <Stack>
                        {route.children.map((child) => (
                            <desktopSubnav key={child.label} {...child} />
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

interface NavItem {
    label: string
    sublabel?: string
    children?: Array<NavItem>
    link?: string
  }

const desktopSubnav = ({ label, link, sublabel }: NavItem) => {
    return (
        <>
            <Link
                href={link}
                className='group display-block p-2 rounded-md hover:bg-red-50'
            >
                <Stack
                    direction={'row'}
                    align={'center'}
                >
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{
                                color: 'red.400'
                            }}
                            fontWeight={500}
                        >
                            {label}
                        </Text>

                        <Text fontSize={'sm'}>{sublabel}</Text>
                    </Box>
                </Stack>
            </Link>
        </>
    )
}

