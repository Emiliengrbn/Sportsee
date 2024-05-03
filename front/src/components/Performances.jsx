import { Radar, Text, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * @description Radar chart from recharts
 * @param { { data: UserPerformance} } params 
 * @returns {React.JSX.Element}
 */
function Performances({data}) {

    /**
     * @param {String} word 
     * @returns {String} 
     */
    function translate (word) {
        switch(word) {
            case "cardio" : 
                return "Cardio";
            case "energy" :
                return "Energie";
            case 'endurance':
                return 'Endurance';
            case 'strength':
                return 'Force';
            case 'speed':
                return 'Vitesse';
            case 'intensity':
                return 'Intensité';
            default:
                return word; 
        }
    }

    const renderPolarAngleAxis = ({ payload, x, y, cx, cy, ...rest }) => {
        return (
          <Text
            {...rest}
            verticalAnchor="middle"
            y={y + (y - cy) / 10}
            x={x + (x - cx) / 100}
            fill='#FFF'
            fontSize={13}
          >
            {translate(data.kind[payload.value])}
          </Text>
        );
      }
    

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} data={[...data.data].reverse()} >
                <PolarGrid radialLines={false}  polarRadius={[0, 10, 27, 49, 72, 95]}/>
                <PolarAngleAxis dataKey="kind" tick={props => renderPolarAngleAxis(props)}/>
                <PolarRadiusAxis  tick={false} axisLine={false} tickCount={6} />
                <Radar dataKey="value" stroke="none" fill="red" fillOpacity={0.6}/>
            </RadarChart>
        </ResponsiveContainer>
    )
}

Performances.propTypes = {
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

export default Performances