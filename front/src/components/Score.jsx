import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

/**
 * 
 * @param {User} data 
 * @returns radial bar chart from recharts
 */
function Score({data}) {
    const score = data.todayScore ? data.todayScore : data.score
	const dataArray = [{ name: 'score', value: score }]
      return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <h2 className="score-title">Score</h2>
                <RadialBarChart 
                innerRadius="0%"
                outerRadius="0%"
                data={dataArray}
                startAngle={90}
                endAngle={450}>
                    <RadialBar
                    data={[{ value: 1 }]}
                    dataKey="value"
                    barSize={170}
                    fill="#FFF"
                    isAnimationActive={false}
                    />
                    <RadialBar
                                dataKey="value"
                                barSize={10}
                                cornerRadius={100}
                                fill="#FF0000"
                            />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="score-description">
				<p className="percent">
					{score * 100}%
				</p>
				<p>de votre <br/> objectif</p>
			</div>
        </>
      );
};
  
  export default Score;