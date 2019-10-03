import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import FixedTabs from '../Components/FixedTabs';
import CardResource from '../Components/Cards/CardResource';

export default class Keys extends Component {
    constructor(props){
        super(props);
        this.state = {
            //Lista com todos as chaves da secretaria e suas respectivas disponibilidades
            tabOne: [
                {title: "Sala 01", status: false, type: "key"},
                {title: "Sala 02", status: true, type: "key"},
                {title: "Sala 03", status: false, type: "key"},
                {title: "Laboratório 01", status: true, type: "key"},
                {title: "Laboratório 02", status: true, type: "key"},
                {title: "Laboratório P&D 01", status: false, type: "key"},
                {title: "Laboratório P&D 02", status: true, type: "key"}
            ],
            //Lista com todos as chaves da recepção e suas respectivas disponibilidades
            tabTwo: [
                {title: "Sala 01", status: true, type: "key"},
                {title: "Sala 02", status: true, type: "key"},
                {title: "Sala 03", status: true, type: "key"},
                {title: "Laboratório 01", status: false, type: "key"},
                {title: "Laboratório 02", status: true, type: "key"},
                {title: "Laboratório P&D 01", status: false, type: "key"},
                {title: "Laboratório P&D 02", status: false, type: "key"}
            ]
        }
    }

    render(){
        const _renderTab1 = 
            <>
                {this.state.tabOne.map((card) => 
                    <CardResource
                        resource={card}
                    />
                )}
            </>

        const _renderTab2 = 
            <>
                {this.state.tabTwo.map((card) => 
                    <CardResource
                        resource={card}
                    />
                )}
            </>
            
        return(
            <Container>
                <Toolbar 
                    title="Semana 05/08 à 09/08" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={true}
                    iconLeft={false}
                    onPressRight={() => this.props.navigation.navigate('Search', {searchFor: 'key'})}
                    onPressTitle={() => this.props.navigation.navigate('Weeks')}
                />
                
                <FixedTabs
                    tabs={{tab1: "Secretaria", tab2: "Recepção"}}
                    contentTabOne={_renderTab1}
                    contentTabTwo={_renderTab2}
                />

                <Tabbar
                    active="Keys"
                />
            </Container>
        );
    }
}