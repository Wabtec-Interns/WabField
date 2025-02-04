import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { SearchCheckIcon } from 'lucide-react'
import React from 'react'

const ProjectsListProjectCard = ({ projectName, projectDescription, visits, projectImage }: { projectName: string, projectDescription: string, visits: number, projectImage: string }) => {
  return (
    <Box 
        position="relative" 
        display={'flex'} 
        justifyContent={'center'} 
        alignItems={'center'}
        borderRadius="lg"
        direction={'column'}
        boxShadow={'md'}
        w={'90%'} 
        overflow="hidden" 
        m={2}
        
        cursor='pointer'
        transition={'transform 0.3s ease, box-shadow 0.3s ease'}
        _hover={{
          boxShadow: 'lg',
          transform: 'scale(1.05)',
        }}
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}       
        left={0}       
        w="100%"
        h="100%"
        backgroundImage={`url(${projectImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        filter="brightness(0.9) drop-shadow(0 0 5px black)"
      />

      {/* Card Content */}
      <Box position="relative" p={20} w="100%" h="100%" backgroundColor={'rgba(0, 0, 0, 0.5)'}>
        <Heading size={'md'} color="white">
            {projectName}
        </Heading>

        <Text position={'relative'} display={'flex'} alignItems={'center'} textAlign={'center'} justifyContent={'center'} fontSize={'sm'} color="white">
            {projectDescription}
        </Text>

        <Flex top={4} right={4} position="absolute" gap={1} alignItems="center" color={'white'}>
            <SearchCheckIcon size={16}/>

            <Text ml={1} fontSize={'sm'}>
                {visits}
            </Text>
        </Flex>
      </Box>
    </Box>
  )
}

export default ProjectsListProjectCard