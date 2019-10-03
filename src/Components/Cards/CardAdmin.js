import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Text, Badge, Grid, Col, View } from 'native-base';
import AppStyles from '../../global.js';

import ModalAcceptAdmin from '../Modals/ModalAcceptAdmin';

export default class CardAdmin extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    
    handleModal = () => {
        if(!this.props.dateDelivery)
            this.setState({ showModal: true });
    };

    onChangeState = () => {
        this.setState({ showModal: false });
    };

    render(){
        const { title, location, user, code, dateDelivery, hourDelivery, dateDevolution, hourDevolution } = this.props;
        return(
            <>
                <TouchableOpacity onPress={this.handleModal}>
                    <Card style={styles.card}>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                <Text style={styles.textCard}>{title + " - " + location}</Text>
                                
                                <View style={{flexDirection: "row"}}>
                                    <Text style={styles.titleDate}>Solicitante: </Text>
                                    <Text style={styles.dateValue}>{user}</Text>
                                </View>

                                <View style={{flexDirection: "row"}}>
                                    <Text style={styles.titleDate}>Código: </Text>   
                                    <Text style={styles.dateValue}>{code}</Text>                     
                                </View>

                                {dateDelivery &&
                                    <>
                                        <View style={{flexDirection: "row"}}>
                                            <Text style={styles.titleDate}>Saída: </Text>   
                                            <Text style={styles.dateValue}>{dateDelivery + " às " + hourDelivery}</Text>                     
                                        </View>
                                        <View style={{flexDirection: "row"}}>
                                            <Text style={styles.titleDate}>Chegada: </Text>
                                            {dateDevolution ?
                                                <Text style={styles.dateValue}>{dateDevolution + " às " + hourDevolution}</Text> 
                                            :
                                                <Text style={styles.dateValue}>Não devolvido</Text> 
                                            }                    
                                        </View>
                                    </>
                                }

                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <ModalAcceptAdmin 
                    show={this.state.showModal}
                    onChangeState={this.onChangeState}
                    resource={title}
                    user={user}
                    code={code}
                    note="Alguma observação"
                />
            </>
        )
    }
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