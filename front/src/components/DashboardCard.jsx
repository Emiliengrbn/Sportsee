import PropTypes from 'prop-types';

/**
 * @param {String} img url
 * @param { String } number 
 * @param { String } description 
 * @returns {React.JSX.Element}
 * */
function Card({ img, number, description }) {
    
    return (
        <>
            <img className="nutrients-element-image" src={img} alt="" />
            <div className="nutrients-element-description">
                <p className="nutrients-element-description-title">{number}</p>
                <p className="nutrients-element-description-subtitle">{description}</p>
            </div>
        </>
    )
} 

Card.propTypes = {
    img: PropTypes.string,
    number: PropTypes.string,
    description: PropTypes.string
}

export default Card