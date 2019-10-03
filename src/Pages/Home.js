import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Spinner } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import Tabbar from '../Components/Tabbar';
import ScrollableTabs from '../Components/ScrollableTabs';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            userType: '',
            loading: false
        }
    }

    componentDidMount = async () => {
        try {
            await AsyncStorage.setItem('userType', '1'); // 1-aluno  ,  2-admin
        } catch (e) {
            console.log(e.message);
        }
        const value = await AsyncStorage.getItem('userType');
        this.setState({userType: value, loading: true});
    }

    render(){
        return(
            <>
                {this.state.loading ?
                    <Container>
                        <Toolbar 
                            title="Semana 05/08 à 09/08" 
                            textColor="#FFFFFF" 
                            background={AppStyles.colour.primaryColor}
                            iconColor={AppStyles.colour.secundaryColor}
                            iconRight={true}
                            iconLeft={false}
                            onPressRight={() => this.props.navigation.navigate('Search', {searchFor: 'location'})}
                            onPressTitle={() => this.props.navigation.navigate('Weeks')}
                        /> 
                        <ScrollableTabs/>
                        <Tabbar
                            active="Home"
                        />
                    </Container>
                :
                    <Container style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Spinner color='blue' />
                    </Container>
                }
            </>
        );
    }
}