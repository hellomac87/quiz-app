import { PieChart, Pie, Cell } from 'recharts';

import { ChartData } from 'src/types/result';
import { CHART_COLORS, CHART_RADIAN } from 'src/constants/result';

type Props = {
    chartData: ChartData[];
};

function ResultChart({ chartData }: Props) {
    const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * CHART_RADIAN);
        const y = cy + radius * Math.sin(-midAngle * CHART_RADIAN);

        return (
            <text x={x} y={y} fill='white' textAnchor={'middle'} dominantBaseline='central'>
                {`${(percent * 100).toFixed(0)}%`}
                {`(${name})`}
            </text>
        );
    };

    return (
        <div>
            <PieChart width={500} height={500}>
                <Pie
                    data={chartData}
                    dataKey={'value'}
                    nameKey={'name'}
                    cx={'50%'}
                    cy={'50%'}
                    innerRadius={50}
                    outerRadius={120}
                    paddingAngle={1}
                    label={renderLabel}
                    labelLine={false}
                >
                    {chartData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={CHART_COLORS[index]}></Cell>
                    ))}
                </Pie>
            </PieChart>
        </div>
    );
}

export default ResultChart;
