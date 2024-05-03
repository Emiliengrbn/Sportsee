import PropTypes from 'prop-types';

/** 
 * @param {String} content url
 * @returns {React.JSX.Element}
 */
function NavIcon({ content }) {
    
    return (
        <div className="sidebar-nav-element" >
            <img src={content} alt="" />
        </div>
    )
} 

NavIcon.propTypes = {
    content: PropTypes.string
}

export default NavIcon