import React from 'react'
import Proptypes from 'prop-types'
import { Text } from 'react-native'

const ValidarProps = props => {
    <Text style={{fontSize: 35}}>
        {props.label}
        {props.ano + 2000}
    </Text>
}

ValidarProps.defaultProps = {
    label: 'Ano: '
}

ValidarProps.propTypes ={
    ano : Proptypes.number.isRequired
}

export default ValidarProps 