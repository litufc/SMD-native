import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from 'native-base';
import AppStyles from '../../global';

const ButtonStatusResource = ( { label, status, onClick } ) => {
    const styles = StyleSheet.create({
        button: {
            width: 75,
            height: 25,
            borderRadius: 20,
            color: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 16
        },
        buttonActive: {
            backgroundColor: AppStyles.colour.secundaryColor
        },
        buttonDisable: {
            backgroundColor: '#D1D1D1'
        },
        label: {
            fontSize: 12,
            fontFamily: 'OpenSans-Bold',
            color: '#FFFFFF'
        }
    });
    return(
        <TouchableOpacity onPress={onClick}>
            {status ? 
                <Card style={{...styles.button, ...styles.buttonActive}}>
                    <Text style={styles.label}>{label}</Text>
                </Card>
            :
                <Card style={{...styles.button, ...styles.buttonDisable}}>
                    <Text style={styles.label}>{label}</Text>
                </Card>
            }
        </TouchableOpacity>
    )
}

export default ButtonStatusResource;