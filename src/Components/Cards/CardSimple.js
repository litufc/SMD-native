import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'native-base';
import AppStyles from '../../global';

const CardSimple = ( { active, children } ) => {
    const styles = StyleSheet.create({
        cardTitle: {
            borderRadius: 10,
            height: 60,
            marginBottom: 16,
            justifyContent: 'center',
            alignItems: 'center'
        },
        card: {
            backgroundColor: '#FFF'
        },
        cardActive: {
            backgroundColor: AppStyles.colour.secundaryColor,
            borderColor: AppStyles.colour.secundaryColor
        },
        labelCard: {
            fontFamily: 'OpenSans-Bold',
            fontSize: 20
        },
        textCard: {
            color: AppStyles.colour.primaryColor
        },
        textCardActive: {
            color: '#FFF'
        }
    });
    return(
        <>
            {active ?
                <Card style={{...styles.cardTitle, ...styles.cardActive}}>
                    <Text numberOfLines={1} style={{...styles.labelCard, ...styles.textCardActive}}>{children}</Text>
                </Card>
            :
                <Card style={{...styles.cardTitle, ...styles.card}}>
                    <Text numberOfLines={1} style={{...styles.labelCard, ...styles.textCard}}>{children}</Text>
                </Card>
            }
        </>
    )
}

export default CardSimple;