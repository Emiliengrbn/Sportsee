import PropTypes from 'prop-types';


import Card from "./DashboardCard"

import energy from "../assets/svg/energy.svg"
import protein from "../assets/svg/protein.svg"
import carbs from "../assets/svg/carbs.svg"
import fat from "../assets/svg/fat.svg"

/**
 * 
 * @param { { data: User} } params 
 * @returns {React.JSX.Element}
 */
function Nutrients({data}) {

    const formatNumber = (num) => {
        return num.toLocaleString('en-EN');
      };
    
    return (
        <div className="nutrients"> 
            <div className="nutrients-element energy" >
                <Card img={energy} number={`${formatNumber(data.keyData.calorieCount)}kCal`} description={"Calories"}/>
            </div>
            <div className="nutrients-element protein" >
                <Card img={protein} number={`${formatNumber(data.keyData.proteinCount)}g`} description={"Protéines"}/>
            </div>
            <div className="nutrients-element carbs" >
                <Card img={carbs} number={`${formatNumber(data.keyData.carbohydrateCount)}g`} description={"Glucides"}/>
            </div>
            <div className="nutrients-element fat" >
                <Card img={fat} number={`${formatNumber(data.keyData.lipidCount)}g`} description={"Lipides"}/>
            </div>
        </div>
    )
} 

Nutrients.propTypes = {
    data: PropTypes.shape({  
      userId: PropTypes.number, 
      userInfos: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        age: PropTypes.number
      }),
      todayScore: PropTypes.number,
      keyData: PropTypes.shape({
        calorieCount: PropTypes.number,
        proteinCount: PropTypes.number,
        carbohydrateCount: PropTypes.number,
        lipidCount: PropTypes.number
      })
    })
}

export default Nutrients