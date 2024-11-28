/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Badge, Box, HStack } from '@chakra-ui/react'
import { PureComponent, ReactNode } from 'react'
import { Pie, PieChart, ResponsiveContainer, Sector, PieProps } from 'recharts'

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

class GeneralProjectStatsCard extends PureComponent<{}, GeneralProjectStatsCardState> {

    state: GeneralProjectStatsCardState = {
        activeIndex: 0,
    }

    renderActiveShape = (props: RenderActiveShapeProps): ReactNode => {
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
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
    }

    onPieEnter = (_: PieProps, index: number): void => {
        this.setState({
            activeIndex: index,
        })
    }

    render() {

        return (
          <Box w={'100%'} h={'100%'} borderWidth={'1px'} borderRadius={'md'} >
              <ResponsiveContainer width={1400} height={600}>
                  <PieChart width={400} height={400}>
                      <Pie 
                        data={PieChartdata} 
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={60} 
                        outerRadius={80} 
                        fill='#8884d8' 
                        onMouseEnter={this.onPieEnter}
                        activeIndex={this.state.activeIndex}
                        activeShape={this.renderActiveShape as unknown as (props: any) => JSX.Element}
                      />
                  </PieChart>
              </ResponsiveContainer>
      
              <Box
                  p='4' 
                  spaceY='2'
      
              >
                  <HStack>
                      <Badge colorPalette='teal' variant={'solid'}>20</Badge>
                      <Badge colorScheme='blue'>10</Badge>
                      <Badge colorScheme='red'>5</Badge>
                      <Badge colorScheme='yellow'>5</Badge>
                  </HStack>
              </Box>
          </Box>
        )
    }

}

const PieChartdata: PieChartData[] = [
    { name: 'Relatórios em Andamento', value: 20 },
    { name: 'Relatórios Finalizados', value: 10 },
    { name: 'Relatórios Cancelados', value: 5 },
    { name: 'Relatórios Rejeitados', value: 5 },
]

export default GeneralProjectStatsCard