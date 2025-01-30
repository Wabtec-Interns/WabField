import { Box, Heading, Text } from '@chakra-ui/react'
import { SearchCheckIcon } from 'lucide-react'
import React from 'react'

const ProjectsListProjectCard = ({ title, description, visits}: {title: String, description: String, visits: String}) => {
  return (
    <Box borderWidth={'1px'} borderRadius={'lg'} p={4} m={2}>
        <Heading size={'md'}>
            {title}
        </Heading>

        <Text
            mt={2}
            fontSize={'sm'}
        >
            {description}
        </Text>

        <div>
            <SearchCheckIcon />

            <Text mt={2} fontSize={'sm'}>
                {visits}
            </Text>
        </div>
    </Box>
  )
}

export default ProjectsListProjectCard