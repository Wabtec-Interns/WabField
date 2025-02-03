import { mockProjects } from '@/assets/mockData';
import ProjectsListProjectCard from '@/components/ProjectsListProjectCard';
import { Grid, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const ProjectsList = () => {
    const projects = mockProjects;

    if (projects.length === 0) {
        return <Text>No projects found</Text>;
    }

    const mainProject = projects.length > 0 ? projects[0] : null;
    const secondaryProjects = projects.slice(1, 3);
    const otherProjects = projects.slice(3);

    return (
        <>

            {mainProject ? (
                <ProjectsListProjectCard {...mainProject} />
            ) : (
                <Text>Loading main project...</Text>
            )}

            <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={4}>
                {secondaryProjects.map((project, index) => (
                    <ProjectsListProjectCard key={index} {...project} />
                ))}
            </Grid>


    
            <Heading size={'lg'} mt={8}>
                Todos os Projetos
            </Heading>

            <Heading size={'md'} mt={4}>
                Últimos Projetos Criados
            </Heading>
            {otherProjects.filter(project => project.projectCategory === 'recent').map((project, index) => (
                <ProjectsListProjectCard key={index} {...project} />
            ))}

            <Heading size={'md'} mt={4}>
                Mais Visitados
            </Heading>
            {otherProjects.filter(project => project.projectCategory === 'popular').map((project, index) => (
                <ProjectsListProjectCard key={index} {...project} />
            ))}  
        </>
    );
}

export default ProjectsList