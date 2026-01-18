import {  Button } from './styles';
import PropTypes from 'prop-types';

function DefaultButton({children, theme, ...props}){
    return(
        <Button {...props} theme={theme} >{children}</Button>
    )
}

export default DefaultButton 