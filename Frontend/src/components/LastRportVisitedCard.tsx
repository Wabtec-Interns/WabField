import { Badge, Box, Card, Collapsible, Image } from "@chakra-ui/react"
import { mockProject, mockReport } from "../assets/mockData"
import { ArrowBigRightDash } from "lucide-react"


const LastReportVisitedCard = () => {
  return (
    <>
        <section className="flex justify-center items-center text-center p-2 gap-2">
           <Collapsible.Root defaultOpen>
                <Collapsible.Trigger 
                    
                >
                    <div className="RelatedProjectsCardHomepageTitle p-2 gap-2">
                        <ArrowBigRightDash className="text-orange-50" />
                        <h1 className="text-2xl text-orange-50 capitalize">Último relatório visitado</h1>
                    </div>
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
                                    <Card.Body className="text-white">
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
                    <div className="RelatedProjectsCardHomepageTitle p-2 gap-2">
                        <ArrowBigRightDash className="text-orange-50" />
                        <h1 className="text-2xl capitalize">Do projeto relacionado</h1>
                    </div>
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
                                    src={mockProject.projectImage}
                                    alt="Project"
                                    objectFit={'cover'}
                                    borderRadius="md"
                                    boxShadow="md"
                                    maxW={'150px'}
                                />

                                <Box>
                                    <Card.Body 
                                        className="text-white"
                                    >
                                        <Card.Title>{mockProject.projectName}</Card.Title>
                                        <Card.Description>{mockProject.projectDescription}</Card.Description>
                                        <Card.Footer mt={'4'}>
                                            <div
                                                className="flex flex-col gap-2"
                                            >
                                            <Badge>Start date: {mockProject.projectStartDate}</Badge>
                                            <Badge>End date: {mockProject.projectEndDate}</Badge>
                                            <Badge>Status: {mockProject.projectStatus}</Badge>
                                            <Badge>Period: {mockProject.projectPeriod}</Badge>
                                            <Badge>Report Summary: {mockProject.reportSummary}</Badge>
                                            <Badge>Employed Company: {mockProject.employedCompany}</Badge> 
                                            <Badge>Intermediary Company: {mockProject.intermediaryCompany}</Badge>
                                            <Badge>Client Company: {mockProject.clientCompany}</Badge>
                                            </div>
                                        </Card.Footer>
                                    </Card.Body>
                                </Box>
                            </Card.Root>
                        </div>
                    </Box>
                </Collapsible.Content>
            </Collapsible.Root>
        </section>
    </>
  )
}

export default LastReportVisitedCard