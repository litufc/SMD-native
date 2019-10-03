import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, View, Card, Text } from 'native-base';

import AppStyles from '../global';
import Toolbar from '../Components/Toolbar';
import TextInput from '../Components/Inputs/TextInput';
import ButtonStatusResource from '../Components/Inputs/ButtonStatusResource';
import ButtonPrimary from '../Components/Inputs/ButtonPrimary';

export default class SearchLocations extends Component {
    constructor(props){
        super(props);
        this.state = {
            freeState: false,
            blockState: false,
            title: '',
            locationName: '',
            keyName: '',
            resourceName: '',
            teacherName: '',
            className: ''
        }
    }

    componentDidMount(){
        switch(this.props.navigation.getParam('searchFor')){
            case "location":
                this.setState({title: "Busca de Local"});
                break;
            case "key":
                this.setState({title: "Busca de Chaves"});
                break;
            case "resource":
                this.setState({title: "Busca de Recursos"});
                break;
            default:
                break;
        }
    }

    freeHandle = () => {
        const aux = !this.state.freeState;
        this.setState({freeState: aux});
    }

    blockHundle = () => {
        const aux = !this.state.blockState;
        this.setState({blockState: aux});
    }

    goSearchLocation = () => {
        alert("Pesquisando por salas");
    }

    goSearchKey = () => {
        alert("Pesquisando por chaves");
    }

    goSearchResource = () => {
        alert("Pesquisando por recursos");
    }

    render(){
        const searchFor = this.props.navigation.getParam('searchFor');
        const { resourceName, teacherName, keyName, locationName, className } = this.state;

        const searhLocation =
            <>
                <TextInput
                    label="Nome do professor"
                    textColor={AppStyles.colour.primaryColor}
                    type="text"
                    textValue={teacherName}
                    onChange={(teacherName) => this.setState({teacherName})}
                />
                <TextInput
                    label="Nome da disciplina"
                    textColor={AppStyles.colour.primaryColor}
                    type="text"
                    textValue={className}
                    onChange={(className) => this.setState({className})}
                />
                <TextInput
                    label="Nome da sala"
                    textColor={AppStyles.colour.primaryColor}
                    type="text"
                    textValue={locationName}
                    onChange={(locationName) => this.setState({locationName})}
                />

                <Text style={styles.subtitle}>Estado da Sala</Text>

                <View style={{flexDirection: 'row', marginBottom: 16}}>
                    {this.state.freeState ?
                        <ButtonStatusResource label="Livre" status={true} onClick={this.freeHandle}/>
                    :
                        <ButtonStatusResource label="Livre" status={false} onClick={this.freeHandle}/>
                    }

                    {this.state.blockState ?
                        <ButtonStatusResource label="Ocupada" status={true} onClick={this.blockHundle}/>
                    :
                        <ButtonStatusResource label="Ocupada" status={false} onClick={this.blockHundle}/>
                    }
                </View>

                <ButtonPrimary onPress={this.goSearchLocation}>Concluir</ButtonPrimary>
            </>

        const searchKey =
            <>
                <TextInput
                    label="Nome da chave"
                    textColor={AppStyles.colour.primaryColor}
                    type="text"
                    textValue={keyName}
                    onChange={(keyName) => this.setState({keyName})}
                />

                <Text style={styles.subtitle}>Estado da Chave</Text>

                <View style={{flexDirection: 'row', marginBottom: 16}}>
                    {this.state.freeState ?
                        <ButtonStatusResource label="Livre" status={true} onClick={this.freeHandle}/>
                    :
                        <ButtonStatusResource label="Livre" status={false} onClick={this.freeHandle}/>
                    }

                    {this.state.blockState ?
                        <ButtonStatusResource label="Ocupada" status={true} onClick={this.blockHundle}/>
                    :
                        <ButtonStatusResource label="Ocupada" status={false} onClick={this.blockHundle}/>
                    }
                </View>

                <ButtonPrimary onPress={this.goSearchKey}>Concluir</ButtonPrimary>
            </>

        const searchResource = 
            <>
                <TextInput
                    label="Nome do recurso"
                    textColor={AppStyles.colour.primaryColor}
                    type="text"
                    textValue={resourceName}
                    onChange={(resourceName) => this.setState({resourceName})}
                />

                <Text style={styles.subtitle}>Estado do Recurso</Text>

                <View style={{flexDirection: 'row', marginBottom: 16}}>
                    {this.state.freeState ?
                        <ButtonStatusResource label="Livre" status={true} onClick={this.freeHandle}/>
                    :
                        <ButtonStatusResource label="Livre" status={false} onClick={this.freeHandle}/>
                    }

                    {this.state.blockState ?
                        <ButtonStatusResource label="Ocupado" status={true} onClick={this.blockHundle}/>
                    :
                        <ButtonStatusResource label="Ocupado" status={false} onClick={this.blockHundle}/>
                    }
                </View>

                <ButtonPrimary onPress={this.goSearchResource}>Concluir</ButtonPrimary>
            </>

        return(
            <Container>
                <Toolbar 
                    title={this.state.title} 
                    textColor="#FFFFFF" 
                    background={AppStyles.colour.primaryColor}
                    iconColor={AppStyles.colour.secundaryColor}
                    iconRight={false}
                    iconLeft={true}
                    onPressLeft={() => this.props.navigation.goBack()}
                />

                <Content style={{backgroundColor: AppStyles.colour.background}}>
                    <View style={styles.toolbarExtend}></View>
                    <Card style={styles.card}>
                        <Text style={styles.title}>Filtros de busca</Text>
                        
                        {searchFor === "location" &&
                            <>{searhLocation}</>
                        }

                        {searchFor === "key" &&
                            <>{searchKey}</>
                        }

                        {searchFor === "resource" &&
                            <>{searchResource}</>
                        }

                    </Card>
                    
                </Content>

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    toolbarExtend:{
        height: 40,
        backgroundColor: AppStyles.colour.primaryColor
    },
    card:{
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 16,
        marginTop: -40,
        borderRadius: 10,
        padding: 16
    },
    title:{
        fontFamily: 'OpenSans-Bold',
        fontSize: 20, 
        color: AppStyles.colour.primaryColor,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        color: AppStyles.colour.text,
        marginTop: 16,
        marginBottom: 5
    }
});