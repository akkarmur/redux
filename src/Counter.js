import React from 'react';
import { Button, View ,Text, StyleSheet} from 'react-native';
import { useSelector,useDispatch } from 'react-redux'
import{ addition,subtraction} from './store/actions'

const Counter =(props)=>{
    const data = useSelector((state)=>state.counter );
    const dis = useDispatch();
    return(
        <View style={styles.container}>
            <Text style={styles.text} onPress={()=>dis(addition())}>Add</Text>
            <Text>{data}</Text>
            <Text style={styles.text}  onPress={()=>dis(subtraction())}>Sub</Text>
        </View>
    )
}
export default Counter;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'blue'
    }
})