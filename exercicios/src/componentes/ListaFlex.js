import React from 'react'
import { ScrollView, View , FlatList , Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'Allan', nota: 8.0},
    { id : 2, nome: 'Ullysses', nota: 9.0},
    { id: 3, nome: 'Isadora', nota: 10.0},
    { id: 4, nome: 'Juninho', nota: 9.5},
    { id: 5, nome: 'Karina', nota: 10.0},
    { id: 6, nome: 'João', nota: 8.5},
    { id : 7, nome: 'Betina', nota: 9.5},
    { id: 8, nome: 'Diomar', nota: 10.0},
    { id: 9, nome: 'Chirley', nota: 8.5},
    { id: 10, nome: 'Pavel', nota: 10.0},

    { id: 11, nome: 'Otto', nota: 7.5},
    { id : 12, nome: 'Jax', nota: 8.5},
    { id: 13, nome: 'Opie', nota: 10.0},
    { id: 14, nome: 'Tigs', nota: 7.0},
    { id: 15, nome: 'Gemma', nota: 9.0},
    { id: 16, nome: 'Tibs', nota: 6.0},
    { id : 17, nome: 'Payne', nota: 7.0},
    { id: 18, nome: 'Juice', nota: 10.0},
    { id: 19, nome: 'Unser', nota: 8.0},
    { id: 20, nome: 'Tara', nota: 10.0}
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50, 
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    alignItems: 'center',
    flexDirectiom: 'row',
} 

export const Aluno = props => 
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return(
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}/>
        </ScrollView>
    )
}