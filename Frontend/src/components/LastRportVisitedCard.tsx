import { Badge, Box, Card, Collapsible, Image } from "@chakra-ui/react"
import { mockProject, mockReport } from "../assets/mockData"


const LastReportVisitedCard = () => {
  return (
    <>
        <section className="flex justify-center items-center text-center p-2 gap-2">
           <Collapsible.Root>
                <Collapsible.Trigger>
                    <h1 className="text-2xl">Last report visited</h1>
                </Collapsible.Trigger>
                <Collapsible.Content>
                    <Box
                        padding={2}
                        borderRadius="md"
                        borderWidth={1}
                        boxShadow="lg"
                        bg="blackAlpha.600"
                        shadow={'md'}
                    >
                        <div className="flex flex-col gap-2">
                            <Card.Root
                                flexDirection={'row'}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                borderWidth={1}
                                borderRadius={'md'}
                                boxShadow={'md'}
                                padding={4}
                                bg={'blackAlpha.600'}
                                shadow={'md'}
                                maxW={'fit'}
                            >
                                <Image 
                                    src={mockReport.reportImage}
                                    alt="Report"
                                    objectFit={'cover'}
                                    borderRadius="md"
                                    boxShadow="md"
                                    maxW={'150px'}
                                />

                                <Box>
                                    <Card.Body>
                                        <Card.Title>{mockReport.reportTitle}</Card.Title>
                                        <Card.Description>{mockReport.reportDescription}</Card.Description>
                                        <Card.Footer mt={'4'}>
                                            <Badge>{mockReport.reportDate}</Badge>
                                            <Badge>Status: {mockReport.reportStatus}</Badge>
                                            <Badge>Type: {mockReport.reportType}</Badge>
                                        </Card.Footer>
                                    </Card.Body>
                                </Box>
                            </Card.Root>
                        </div>
                    </Box>
                </Collapsible.Content>
           </Collapsible.Root>

        </section>

        <section className="flex justify-center items-center text-center p-2 gap-2">
            <Collapsible.Root>
                <Collapsible.Trigger>
                    <h1 className="text-2xl">From the related project</h1>
                </Collapsible.Trigger>

                <Collapsible.Content>
                    <Box
                        padding={4}
                        borderRadius="md"
                        borderWidth={1}
                        boxShadow="lg"
                        bg="blackAlpha.600"
                        shadow={'md'} 
                    >
                        <div className="flex flex-col gap-2">
                            <img src={mockProject.projectImage} alt="Project" className="w-1/2 h-1/2" />
                            <h1 className="text-2xl">{mockProject.projectName}</h1>
                            <p className="flex flex-col gap-2 text-lg">{mockProject.projectDescription}</p>
                            <p className="flex flex-col gap-2 text-lg">Start Date: {mockProject.projectStartDate}</p>
                            <p className="flex flex-col gap-2 text-lg">End Date: {mockProject.projectEndDate}</p>
                            <p className="flex flex-col gap-2 text-lg">Status: {mockProject.projectStatus}</p>
                            <p className="flex flex-col gap-2 text-lg">Period: {mockProject.projectPeriod}</p>
                            <p className="flex flex-col gap-2 text-lg">Report Summary: {mockProject.reportSummary}</p>
                            <p className="flex flex-col gap-2 text-lg">{mockProject.employedCompany}</p>
                            <p className="flex flex-col gap-2 text-lg">{mockProject.intermediaryCompany}</p>
                            <p className="flex flex-col gap-2 text-lg">{mockProject.clientCompany}</p>
                        </div>
                    </Box>
                </Collapsible.Content>
            </Collapsible.Root>
        </section>
    </>
  )
}

export default LastReportVisitedCard