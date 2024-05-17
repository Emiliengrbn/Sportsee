import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * @description Bar chart from recharts
 * @param { { data: UserActivity} } params 
 * @returns {React.JSX.Element}
 */
function DailyActivity({data}) {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom_tootlip">
              <p className="intro">{payload[0].value}kg</p>
              <p className="desc">{payload[1].value}Kcal</p>
            </div>
          );
        }
    
        return null;
      };

      const renderLegend = ({ payload }) => {
        return (
            <div className="custom_legend">
                <p className="legend-title bold">Activité quotidienne</p>
                <ul className='legend-container'>
                    {
                    payload.map((entry, index) => (
                        <li key={`item-${index}`} className={` legend bold ${entry.value === "calories" ? "calories" : "kilogram"}`}>
                            <span className="circle"></span>
                            {entry.value === "calories" ? "Calories brûlées (kCal)" : "Poids (kg)"}
                        </li>
                    ))
                    }
                </ul>
            </div>
        );
      }

    return (
        <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          barGap={10}
          data={data.sessions}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          <XAxis tickLine={false} dataKey="day" tickFormatter={(day) => new Date(day).getDate()} tick={{ fill: '#9B9EAC', fontSize: 18 }}  stroke="#9B9EAC"/>
          <YAxis yAxisId="kilogram" 
                orientation={"right"} domain={["dataMin - 1", "auto"]} 
                tick={{ fill: '#9B9EAC' }} 
                tickLine={false}
                axisLine={false}
                tickMargin={30} 
                allowDecimals={false}/>
          <YAxis hide yAxisId="calories" />
          <Tooltip content={CustomTooltip} />
          <Legend content={renderLegend} verticalAlign="top" />
          <Bar
          dataKey="kilogram"
          yAxisId="kilogram"
          fill="#282D30"
          barSize={10}
          radius={[20, 20, 0, 0]}
        />
        <Bar
          dataKey="calories"
          yAxisId="calories"
          fill="#E60000"
          barSize={10}
          radius={[20, 20, 0, 0]}
        />
        </BarChart>
      </ResponsiveContainer>
    );
  };

  DailyActivity.propTypes = {
    data: PropTypes.shape({
      userId: PropTypes.number, 
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string,
          kilogram : PropTypes.number,
          calories : PropTypes.number
        })
      )
    })
  }
  
  export default DailyActivity;