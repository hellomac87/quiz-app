import { PieChart, Pie, Cell, Label } from 'recharts';

import { ChartData } from 'src/types/result';
import { CHART_COLORS } from 'src/constants/result';

type Props = {
    chartData: ChartData[];
};

function ResultChart({ chartData }: Props) {
    const correct = chartData[0].value;
    const incorrect = chartData[1].value;

    const correctPercentage = (correct / (correct + incorrect)) * 100;

    return (
        <div className='flex justify-center mb-12'>
            <PieChart width={320} height={320}>
                <Pie
                    data={chartData}
                    dataKey={'value'}
                    nameKey={'name'}
                    cx={'50%'}
                    cy={'50%'}
                    innerRadius={120}
                    outerRadius={160}
                    paddingAngle={1}
                    labelLine={false}
                >
                    <>
                        {chartData.map((_, index) => {
                            return <Cell key={`cell-${index}`} fill={CHART_COLORS[index]}></Cell>;
                        })}
                        <Label value={`정답률 ${correctPercentage}%`} position='center' />
                    </>
                </Pie>
            </PieChart>
        </div>
    );
}

export default ResultChart;
