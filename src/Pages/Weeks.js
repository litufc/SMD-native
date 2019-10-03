import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import CardSimple from '../Components/Cards/CardSimple';

export default class Weeks extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Container>
                <Toolbar 
                    title="Selecionar Semana" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={false}
                    iconLeft={true}
                    onPressLeft={() => this.props.navigation.goBack()}
                /> 
                <Content style={styles.container}>
                    <CardSimple active={true}>05/08/2019 à 09/08/2019</CardSimple>
                    <CardSimple active={false}>12/08/2019 à 16/08/2019</CardSimple>
                    <CardSimple active={false}>19/08/2019 à 23/08/2019</CardSimple>
                    <CardSimple active={false}>26/08/2019 à 30/08/2019</CardSimple>
                    <CardSimple active={false}>02/09/2019 à 06/09/2019</CardSimple>
                    <CardSimple active={false}>09/09/2019 à 13/09/2019</CardSimple>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: AppStyles.colour.primaryColor,
        padding: 16
    }
});