import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Body, Text, Badge, Grid, Col, View } from 'native-base';
import AppStyles from '../../global.js'

const CardLoan = ( { title, location, dateDelivery, hourDelivery, dateDevolution, hourDevolution } ) => {
    return(
        <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
                <Body>
                    {dateDevolution !== "" ?
                        <Text style={styles.textCard}>{title + " - " + location}</Text>
                    :
                        <Grid>
                            <Col style={{width:'70%'}}>
                                <Text style={styles.textCard}>{title + " - " + location}</Text>
                            </Col>
                            <Col>
                                <Badge style={{ backgroundColor: AppStyles.colour.secundaryColor, alignSelf: 'flex-end'}}>
                                    <Text style={styles.textBadge}>Agora</Text>
                                </Badge>
                            </Col>
                        </Grid>
                    }
                    
                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.titleDate}>Entrega: </Text>
                        <Text style={styles.dateValue}>{dateDelivery + " às " + hourDelivery}</Text>
                    </View>

                    <View style={{flexDirection: "row"}}>
                        <Text style={styles.titleDate}>Devolução: </Text>
                        {dateDevolution !== "" ?
                            <Text style={styles.dateValue}>{dateDevolution + " às " + hourDevolution}</Text>
                        :
                            <Text style={styles.dateValue}>Ainda não devolvido</Text>
                        }
                        
                    </View>

                </Body>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        marginLeft: 16,
        marginRight: 16,
        marginTop: 10,
        borderRadius: 10
    },
    cardItem: {
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 10
    },
    textCard: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: AppStyles.colour.primaryColor
    },
    textBadge: {
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 12
    },
    titleDate: {   
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        color: AppStyles.colour.text,
        marginTop: 2
    },
    dateValue:{
        fontSize: 14,
        color: AppStyles.colour.secundaryColor,
        marginTop: 2
    }
    
});

export default CardLoan;