import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Text, Badge, Grid, Col } from 'native-base';
import AppStyles from '../../global.js';

import ModalRequestLoan from '../Modals/ModalRequestLoan';

export default class CardResource extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }
    
    handleModal = () => {
        if(this.props.resource.status)
            this.setState({ showModal: true });
    };

    onChangeState = () => {
        this.setState({ showModal: false });
    };
    
    render(){
        const { resource } = this.props;
        return(
            <>
                <TouchableOpacity onPress={this.handleModal}>
                    <Card style={styles.card}>
                        <CardItem style={styles.cardItem}>
                            <Body>
                                {resource.status ? (
                                    <Text style={styles.textCard} numberOfLines={1}>{resource.title}</Text>
                                ):(
                                    <Grid>
                                        <Col style={{width:'70%'}}>
                                            <Text style={styles.textCardBlocked} numberOfLines={1}>{resource.title}</Text>
                                        </Col>
                                        <Col>
                                            <Badge style={{ backgroundColor: AppStyles.colour.alertColor, alignSelf: 'flex-end'}}>
                                                <Text style={styles.textBadge}>Ocupada</Text>
                                            </Badge>
                                        </Col>
                                    </Grid>
                                )}
                                
                            </Body>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
                <ModalRequestLoan 
                    show={this.state.showModal}
                    onChangeState={this.onChangeState}
                    resource={resource}
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
    textCardBlocked:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 20,
        color: AppStyles.colour.primaryOpacity
    },
    textBadge:{
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 12
    }
});