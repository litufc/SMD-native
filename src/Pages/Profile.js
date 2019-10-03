import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import FixedTabs from '../Components/FixedTabs';
import CardLoan from '../Components/Cards/CardLoan';
import ProfileInformations from '../Components/Cards/ProfileInformations';

export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabOne: [
                {title: "Chave Laboratório 2", location: "Recepção", dateDelivery: "25/08/2019", hourDelivery: "14:30", dateDevolution: "", hourDevolution: ""},
                {title: "Chave Laboratório 2", location: "Recepção", dateDelivery: "25/08/2019", hourDelivery: "14:30", dateDevolution: "25/08/2019", hourDevolution: "17:00"},
                {title: "Chave Laboratório 2", location: "Recepção", dateDelivery: "25/08/2019", hourDelivery: "14:30", dateDevolution: "", hourDevolution: ""}
            ],
        }
    }

    render(){
        const _renderTab1 = 
            <>
                {this.state.tabOne.map((card) => 
                    <CardLoan
                        title={card.title}
                        location={card.location}
                        dateDelivery={card.dateDelivery}
                        hourDelivery={card.hourDelivery}
                        dateDevolution={card.dateDevolution}
                        hourDevolution={card.hourDevolution}
                    />
                )}
            </>

        const _renderTab2 = <ProfileInformations />

        return(
            <Container>
                <Toolbar 
                    title="Perfil" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={false}
                    iconLeft={false}
                />
                
                <FixedTabs
                    tabs={{tab1: "Meus Empréstimos", tab2: "Minhas Informações"}}
                    contentTabOne={_renderTab1}
                    contentTabTwo={_renderTab2}
                />

                <Tabbar
                    active="Profile"
                />
            </Container>
        );
    }
}