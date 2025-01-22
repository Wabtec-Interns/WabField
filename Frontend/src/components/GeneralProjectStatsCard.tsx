/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Badge, Box, HStack, Image, SimpleGrid, Tabs, TabsContent, TabsList, TabsTrigger } from '@chakra-ui/react'
import { PureComponent } from 'react'
import { Pie, PieChart, ResponsiveContainer, Sector, PieProps } from 'recharts'
import WabtecLogo from '../assets/Wabtec_Corporation-Logo.wine.svg'

interface GeneralProjectStatsCardState {
    activeIndex: number;
}

interface RenderActiveShapeProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    fill: string;
    payload: { name: string };
    percent: number;
    value: number;
}

interface PieChartData {
    name: string;
    value: number;
}

const renderActiveShape = (props: RenderActiveShapeProps) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Relatórios: ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Porcentagem: ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}

const renderActiveShapeWrapper = (props: unknown) => renderActiveShape(props as RenderActiveShapeProps);

class GeneralProjectStatsCard extends PureComponent<{}, GeneralProjectStatsCardState> {

    state: GeneralProjectStatsCardState = {
        activeIndex: 0,
    }

    

    onPieEnter = (_: PieProps, index: number): void => {
        this.setState({
            activeIndex: index,
        })
    }

    

    render() {

        return (
          <>
            <Tabs.Root
              key={'tab'}
              defaultValue={'Description'}
              variant={'enclosed'}
              rounded={'2xl'}
              textAlign={'center'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <SimpleGrid
                columns={1}
                gap={2}
                p={4}
                bg={'white'}
                borderRadius={'md'}
                borderWidth={'1px'}
                textAlign={'center'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <TabsList
                  key={'homepage-card-tabs'}
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'center'}
                  alignContent={'center'}
                  alignItems={'center'}
                  textAlign={'center'}

                  p={2}
                  gap={2}
                  bg={'red.800'}
                  borderRadius={'md'}
                  borderWidth={'2px'}
                  borderColor={'gray.focusRing'}
                  _hover={{
                    bg: 'red.600',
                    rounded: '2xl',
                  }}
                  _active={{
                    bg: 'red.600',
                    rounded: '2xl',
                  }}
                  _focus={{
                    bg: 'red.600',
                    rounded: '2xl',
                  }}
                  animation={
                    'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
                  }
                  transition={'all 0.25s'}
                >
                  <TabsTrigger
                    key={'description'}
                    value='Description'
                    className='gap-2 p-2'
                  >
                    <p>Descrição Geral</p>
                  </TabsTrigger>

                  <TabsTrigger
                    key={'chart'}
                    value='Chart'
                    className='gap-2 p-2'
                    >
                    <p>Gráfico</p>
                  </TabsTrigger>
                </TabsList>
              </SimpleGrid>

              <TabsContent
                key={'homepage-card-content'}
                value={'Description'}
              >
                <Box
                  h={'800px'}
                  borderWidth={'1px'}
                  borderRadius={'md'}
                  display={'flex'}
                 
                  textAlign={'center'}
                  alignItems={'center'}
                  flexDirection={'column'}
                >
                  <div 
                    className='p-2 gap-2'
                  />
                  <Box
                    w={'1200px'}
                    h={'200px'}
                    bg={'gray.200'}
                    borderRadius={'md'}
                    borderWidth={'1px'}
                    display={'flex'}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={'center'}

                  >
                    
                      <Image
                        src={CardData.imageUrl}
                        alt={'Wabtec Corporation Logo'}
                        w={'100%'}
                        h={'100%'}
                        borderRadius={'md'}
                        objectFit={'fill'}
                        p={2}
                        gap={2}
                        bg={'gray.200'}
                        _hover={{
                          bg: 'gray.400',
                          rounded: '2xl',
                        }}
                        _active={{
                          bg: 'gray.400',
                          rounded: '2xl',
                        }}
                        _focus={{
                          bg: 'gray.400',
                          rounded: '2xl',
                        }}
                        animation={
                          'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
                        }
                        transition={'all 0.25s'}
                        
                      />
                    
                  </Box>

                  <Box className='p-2 gap-2' />

                  <Box
                    w={'1200px'}
                    h={'400px'}
                    bg={'gray.200'}
                    borderRadius={'md'}
                    borderWidth={'1px'}
                    
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    color={'black'}
                  >
                    <h1
                      className='text-2xl first-letter:text-3xl first-letter:font-bold first-letter:text-blue-500'
                    >
                      {CardData.title}
                    </h1>
                    <p>{CardData.description}</p>
                  </Box>
                </Box>
              </TabsContent>

              <TabsContent
                key={'homepage-card-content'}
                value={'Chart'}
              >
                <Box
                  h={'800px'}
                  borderWidth={'1px'}
                  borderRadius={'md'}
                  display={'flex'}
                  textAlign={'center'}
                  alignItems={'center'}
                  flexDirection={'column'}
                >
                  <div 
                    className='p-2 gap-2'
                  />
                  <Box
                    w={'1200px'}
                    h={'200px'}
                    bg={'gray.200'}
                    borderRadius={'md'}
                    borderWidth={'1px'}
                    display={'flex'}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <ResponsiveContainer width='100%' height='100%'>
                      <PieChart>
                        <Pie
                          activeIndex={this.state.activeIndex}
                          activeShape={renderActiveShapeWrapper}
                          data={PieChartdata}
                          cx='50%'
                          cy='50%'
                          innerRadius={60}
                          outerRadius={80}
                          fill='#8884d8'
                          dataKey='value'
                          onMouseEnter={this.onPieEnter}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </Box>
                  <Box className='p-2 gap-2' />
                  <Box
                    w={'1200px'}
                    h={'400px'}
                    bg={'gray.200'}
                    borderRadius={'md'}
                    borderWidth={'1px'}
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'center'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    color={'black'}
                  >
                    <h1
                      className='text-2xl first-letter:text-3xl first-letter:font-bold first-letter:text-blue-500'
                    >
                      {CardData.title}
                    </h1>
                    <p>{CardData.description}</p>
                    <HStack>
                      {PieChartdata.map((entry, index) => (
                        <Badge key={index} colorScheme={getColorPallete(entry.name)}>
                          {entry.name}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                </Box>
              </TabsContent>
            </Tabs.Root>
          </>
        )
    }

}

const PieChartdata: PieChartData[] = [
    { name: 'em Andamento', value: 20 },
    { name: 'Finalizados', value: 10 },
    { name: 'Cancelados', value: 5 },
    { name: 'Rejeitados', value: 5 },
]

const CardData = {
  imageUrl: WabtecLogo,
  title: 'Visão geral dos relatórios',
  description: 'Acompanhe facilmente o status geral dos relatórios criados pelo pessoal de seu setor. Entenda de forma simplificada a taxa de sucesso de nossos projetos.',
  footer: 'Atualizado 3 minutos atrás',
}

function getColorPallete(name: string): string {
  switch (name) {
    case 'em Andamento':
      return 'blue';
    case 'Finalizados':
      return 'green';
    case 'Cancelados':
      return 'red';
    case 'Rejeitados':
      return 'yellow';
    default:
      return 'blue';
  }
}

export default GeneralProjectStatsCard