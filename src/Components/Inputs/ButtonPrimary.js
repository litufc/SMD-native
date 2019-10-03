import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, Text } from 'native-base';
import AppStyles from '../../global';

const ButtonPrimary = ( { children, onPress } ) => {
    return(
        <Button rounded style={styles.button}onPress={onPress}>
            <Text>{children}</Text>
            <Icon type="FontAwesome5" name="arrow-right" style={styles.icon}/>
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: AppStyles.colour.secundaryColor,
        width: '100%',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 16,
        color: '#FFFFFF',
        marginLeft: -10
    }
});

export default ButtonPrimary;