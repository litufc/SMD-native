import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import CardResource from '../Components/Cards/CardResource';

export default class Resoucers extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Lista com todos os recursos e suas respectivas disponibilidades
            cards: [
                {title: "Projetor 1", status: false, type: "resource"},
                {title: "Projetor 2", status: true, type: "resource"},
                {title: "Projetor 3", status: false, type: "resource"},
                {title: "Máquina fotográfica", status: true, type: "resource"},
                {title: "Mesa digitalizadora", status: true, type: "resource"},
                {title: "Cabo USB 1", status: false, type: "resource"},
                {title: "Cabo USB 2", status: true, type: "resource"}
            ]
        }
    }

    render(){
        return(
            <Container>
                <Toolbar 
                    title="Semana 05/08 à 09/08" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={true}
                    iconLeft={false}
                    onPressRight={() => this.props.navigation.navigate('Search', {searchFor: 'resource'})}
                    onPressTitle={() => this.props.navigation.navigate('Weeks')}
                />
                
                <Content style={{backgroundColor: AppStyles.colour.background}}>
                    {this.state.cards.map((card) =>
                        <CardResource
                            resource={card}
                        />
                    )}
                </Content>

                <Tabbar
                    active="Resources"
                />
            </Container>
        );
    }
}