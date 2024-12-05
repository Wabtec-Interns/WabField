import { Box, Collapsible } from "@chakra-ui/react"
import { mockReport } from "../assets/mockData"


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
                        padding={4}
                        borderRadius="md"
                        borderWidth={1}
                        boxShadow="lg"
                        bg="blackAlpha.600"
                        shadow={'md'}
                    >
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl">{mockReport.reportTitle}</h1>
                            <p className="text-lg">{mockReport.reportDescription}</p>
                            <p className="text-lg">Date: {mockReport.reportDate}</p>
                            <p className="text-lg">Status: {mockReport.reportStatus}</p>
                            <p className="text-lg">Type: {mockReport.reportType}</p>
                        </div>
                    </Box>
                </Collapsible.Content>
           </Collapsible.Root>

        </section>

        <section>
            <h1 className="text-2xl font-bold">From the related project</h1>
        </section>
    </>
  )
}

export default LastReportVisitedCard