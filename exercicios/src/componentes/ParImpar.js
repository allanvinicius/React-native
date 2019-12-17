import React from 'react';
import { Text, View } from 'react-native';
import Padrao from '../estilo/Padrao';

function ParOuImpar(num){
    if(num % 2 == 0){
        return <Text style={Padrao.ex}>Par</Text>
    }
    else{
        return <Text style={Padrao.ex}>Impar</Text>
    }
}

export default props =>
<View>
    {ParOuImpar(props.numero)}
</View>
