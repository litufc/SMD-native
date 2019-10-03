import React, { Component } from 'react';
import { Container, Content } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import FixedTabs from '../Components/FixedTabs';
import CardAdmin from '../Components/Cards/CardAdmin';
import ProfileInformations from '../Components/Cards/ProfileInformations';

export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabOne: [
                {title: "Chave Laboratório 2", location: "Recepção", user: "Mateus Pereira dos Santos", code: "9348239", dateDelivery: "25/08/2019", hourDelivery: "14:30", dateDevolution: "", hourDevolution: ""},
                {title: "Chave Laboratório 2", location: "Recepção", user: "Mateus Pereira dos Santos", code: "9348239", dateDelivery: "25/08/2019", hourDelivery: "14:30", dateDevolution: "25/08/2019", hourDevolution: "17:00"},
                {title: "Chave Laboratório 2", location: "Recepção", user: "Mateus Pereira dos Santos", code: "9348239", dateDelivery: "25/08/2019", hourDelivery: "14:30", dateDevolution: "", hourDevolution: ""}
            ],
        }
    }

    render(){
        const _renderTab1 = 
            <>
                {this.state.tabOne.map((card) => 
                    <CardAdmin
                        title={card.title}
                        location={card.location}
                        user={card.user}
                        code={card.code}
                    />
                )}
            </>

        const _renderTab2 = 
        <>
            {this.state.tabOne.map((card) => 
                <CardAdmin
                    title={card.title}
                    location={card.location}
                    user={card.user}
                    code={card.code}
                    dateDelivery={card.dateDelivery}
                    hourDelivery={card.hourDelivery}
                    dateDevolution={card.dateDevolution}
                    hourDevolution={card.hourDevolution}
                />
            )}
        </>

        return(
            <Container>
                <Toolbar 
                    title="Administrador" 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={false}
                    iconLeft={false}
                />
                
                <FixedTabs
                    tabs={{tab1: "Solicitações", tab2: "Histórico"}}
                    contentTabOne={_renderTab1}
                    contentTabTwo={_renderTab2}
                />

                <Tabbar
                    active="Admin"
                />
            </Container>
        );
    }
}