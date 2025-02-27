import { Box, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from 'lucide-react'
import React from 'react'

interface NavItem {
    label: string
    sublabel?: string
    children?: Array<NavItem>
    link?: string
  }

const DesktopSubnav = ({ label, link, sublabel }: NavItem) => {
    return (
        <>
            <Link
                href={link}
                className='group display-block p-2 rounded-md bg-slate-900 hover:bg-red-50'
            >
                <Stack
                    direction={'row'}
                    align={'center'}
                >
                    <Box>
                        <Text
                            transition={'all .3s ease'}
                            _groupHover={{
                                color: 'red.900'
                            }}
                            fontWeight={500}
                        >
                            {label}
                        </Text>

                        <Text 
                            fontSize={'sm'}
                            transition={'all .3s ease'}
                            _groupHover={{
                                color: 'red.400'
                            }}
                        >
                            {sublabel}
                        </Text>
                    </Box>

                    <Flex
                        transition={'all .3s ease'}
                        transform={'translateX(-10px)'}
                        opacity={0}
                        _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                        justify={'flex-end'}
                        align={'center'}
                        flex={1}
                    >
                        <Icon
                            color={'red.400'}
                            w={5}
                            h={5}
                            ml={1}
                            as={ChevronRightIcon}
                        />
                    </Flex>
                </Stack>
            </Link>
        </>
    )
}

export default DesktopSubnav