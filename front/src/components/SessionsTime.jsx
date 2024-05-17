import { LineChart, Rectangle, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


/**
 * @description Line chart from Reachart
 * @param { { data: UserSessions} } params
 * @returns {React.JSX.Element}
 */
function SessionsTime({data}) {

    const day = ["L", "M", "M", "J", "V", "S", "D"]

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="sessions_time-custom_tootlip">
              <p className="">{payload[0].value}min</p>
            </div>
          );
        }
    
        return null;
      };

      // Remplace les valeurs par les noms complets des mois
      const formatXAxis = (tickItem) => {
        return day[tickItem - 1];
      };

      const CustomCursor = ({ points, width, height }) => {
        const {x, y} = points[0]
        return (
          <Rectangle 
          x={x}
          y={y}
          width={width+10}
          height={height+100} 
          stroke='transparent'
          fill='black'
          fillOpacity="0.18"
          />
        )
      }

      const gradientColor = `url(#colorUv)`;

    return (
      <ResponsiveContainer width="100%" height="100%" >
        <h2 className="sessions_time-title">Durée moyenne des sessions</h2>

        <LineChart data={data.sessions} margin={{left: 10, right: 10}}>
          <Line
            type="natural"
            dataKey="sessionLength"
            strokeWidth={3}          
            stroke={gradientColor} 
            dot={false}
            activeDot={{ r: 5, fill: "#FFF"}} 
          />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                <stop offset="5%" stopColor="rgba(255, 255, 255, 0.3)" />
                <stop offset="95%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="day"
            axisLine={false}
            tick={{ fill: "white" }}
            tickLine={false}
            tickFormatter={formatXAxis}
          />
          <YAxis domain={["dataMin - 20", "dataMax + 45"]} hide={true} />

          <Tooltip
            content={<CustomTooltip />}
            offset={30}
            cursor={<CustomCursor />}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  SessionsTime.propTypes = {
    data: PropTypes.shape({
      userId: PropTypes.number, 
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.number,
          sessionLength : PropTypes.number
        })
      )
    })
  }

export default SessionsTime
