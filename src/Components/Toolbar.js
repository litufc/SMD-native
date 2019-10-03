import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Body, Title, Left, Right, Icon } from 'native-base';

const Toolbar = ({ title, textColor, background, iconColor, iconLeft, iconRight, onPressLeft, onPressRight, onPressTitle }) => {
    const styles = StyleSheet.create({
        titleHeader: {
            fontFamily: 'OpenSans-Bold',
            color: textColor,
            fontSize: 20
        },
        iconTitle:{
            fontSize: 18,
            color: '#fff',
            marginLeft: 5
        },
        header: {
            backgroundColor: background,
            elevation: 5,
            height: 56
        },
        containerTitle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
        },
        leftContainer: {
            flex: 0,
            paddingLeft: 10,
            width: 50
        },
        rightContainer: {
            flex: 0,
            paddingRight: 10,
            width: 50
        },
        iconBack: {
            color: iconColor,
            fontSize: 20
        }
    });
    return(
        <Header style={styles.header} iosStatusbar="light-content"
        androidStatusBarColor='#006CB4'>
            <Left style={styles.leftContainer}>
                {iconLeft &&
                    <TouchableOpacity onPress={onPressLeft}>
                        <Icon type="FontAwesome" name="arrow-left" style={styles.iconBack} />
                    </TouchableOpacity>
                }
            </Left>
            <Body style={styles.containerTitle}>
                {onPressTitle ?
                    <TouchableOpacity onPress={onPressTitle} style={styles.containerTitle}>
                        <Title style={styles.titleHeader}>{title}</Title>
                        <Icon type="FontAwesome5" name="sort-down" style={styles.iconTitle}/>
                    </TouchableOpacity>
                :
                    <Title style={styles.titleHeader}>{title}</Title>
                }
            </Body>
            <Right style={styles.rightContainer}>
                {iconRight &&
                    <TouchableOpacity onPress={onPressRight}>
                        <Icon type="FontAwesome" name="search" style={styles.iconBack} />
                    </TouchableOpacity>
                }
            </Right>
        </Header>
    )
}

export default Toolbar;