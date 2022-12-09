import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

const BMICalc = () => {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [bmi, setBmi] = useState('')
    const [result, setResult] = useState('')

    const calculateBmi = () => {
        const bmi = weight / ((height / 100) * (height / 100))
        setBmi(bmi.toFixed(1))
    
    
        if (bmi < 18.5) {
            setResult('Underweight - consider eating more')
        } else if (bmi >= 18.5 && bmi < 25) {
            setResult('Normal - you are at a healthy weight')
        } else if (bmi >= 25 && bmi < 30) {
            setResult('Overweight - consider eating less')
        } else if (bmi >= 30) {
            setResult('Obese - consider eating less and exercising more')
        }
    }

    return (
        <View style={styles.container}>
            <View
                style={styles.title}
            >
                <Text style={styles.titleText}>BMI Calculator</Text>

            </View>

            <TextInput
                style={styles.input}
                value={weight}
                onChangeText={text => setWeight(text)}
                placeholder='Weight (kg)'
                keyboardType='numeric'
            />
            
            <TextInput
                style={styles.input}
                value={height}
                onChangeText={text => setHeight(text)}
                placeholder='Height (cm)'
                keyboardType='numeric'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={calculateBmi}
            >

                <Text style={styles.buttonText}>Calculate</Text>

            </TouchableOpacity>
            <View style={styles.result}>
                <Text style={styles.resultText}>Your BMI is: {bmi}</Text>
                <Text style={[styles.resultText, { fontSize: 20 }]}>{result}</Text>
            </View>
        </View>
    )

}









export default BMICalc


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: '#e0ecde',
    },
    title: {
        backgroundColor: '#2c6975',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    titleText: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1 / 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 18,
    },
    button:{
        height: 50,
        margin: 12,
        borderWidth: 1 / 2,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#2c6975',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    resultText: {
        fontSize: 30,
        color: '#2c6975',
        fontWeight: 'bold'
    },
    result: {
        alignItems: 'center',
        justifyContent: 'center',
    }
        
  })