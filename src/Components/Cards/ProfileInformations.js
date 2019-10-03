import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, CardItem, Body, Text, Badge, Grid, Col, Icon } from 'native-base';
import AppStyles from '../../global.js';

export default class ProfileInformations extends React.Component{
    render(){
        return(
            <Card style={styles.card}>
                <CardItem style={styles.cardItem}>
                    <Body>
                        <Text style={styles.divInfos}>
                            <Text style={styles.title}>Nome: </Text>
                            <Text style={styles.value}>Mateus Pereira dos Santos</Text>
                        </Text>
                        <Text style={styles.divInfos}>
                            <Text style={styles.title}>Matrícula: </Text>
                            <Text style={styles.value}>397985</Text>
                        </Text>
                        <Text style={styles.divInfos}>
                            <Text style={styles.title}>Curso: </Text>
                            <Text style={styles.value}>Sistemas e Mídias Digitais (Integral)</Text>
                        </Text>
                        <View style={styles.divInfos}>
                            <Text>
                                <Text style={styles.title}>Telefone: </Text>
                                <Text style={styles.value}>(85) 9 87051649</Text>
                            </Text>
                            <TouchableOpacity>
                                <Icon type="FontAwesome5" name="pen" style={styles.iconEdit}/>
                            </TouchableOpacity>
                        </View>
                        <Grid style={styles.divInfos}>
                            <Col style={{width: '90%'}}>
                                <Text>
                                    <Text style={styles.title}>E-mail: </Text>
                                    <Text style={styles.value}>mateus.pereira99@hotmail.com</Text>
                                </Text>
                            </Col>
                            <Col>
                                <TouchableOpacity>
                                    <Icon type="FontAwesome5" name="pen" style={styles.iconEdit}/>
                                </TouchableOpacity>
                            </Col>
                        </Grid>
                        <View style={styles.divInfos}>
                            <Text>
                                <Text style={styles.title}>Senha: </Text>
                                <Text style={styles.value}>***************</Text>
                            </Text>
                            <TouchableOpacity>
                                <Icon type="FontAwesome5" name="pen" style={styles.iconEdit}/>
                            </TouchableOpacity>
                        </View>
                    </Body>
                </CardItem>
            </Card>
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
    divInfos: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: AppStyles.colour.text
    },
    value: {
        fontSize: 16,
        color: AppStyles.colour.primaryColor,
        width: 200
    },
    iconEdit: {
        fontSize: 14,
        color: AppStyles.colour.secundaryColor,
        marginLeft: 5
    }
    
});