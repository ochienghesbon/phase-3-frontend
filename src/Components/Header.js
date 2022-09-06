import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import Button from './Elements/Button'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{ title }</h1>
            {
                location.pathname === '/' ? 
                <Button 
                color={!showAdd ? 'green': 'red'} 
                text={!showAdd ? 'Add': 'Close'} 
                onClick={ () => onAdd() } 
                /> : ''
            }
        </header>
    )
}




// CSS in JSX
// const headingStyle = {
//     color: 'red', 
//     textAlign: 'center'
// }

export default Header
