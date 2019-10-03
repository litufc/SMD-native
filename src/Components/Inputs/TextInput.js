import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label, View } from 'native-base';

const TextInput = ( { label, textColor, type, textValue, onChange } ) => {
    const styles = StyleSheet.create({
        borderInput: {
            borderColor: textColor,
            borderWidth: 1,
            borderRadius: 30,
            height: 40,
            marginTop: 25
        },
        item: {
            borderBottomWidth: 0,
            marginTop: -15,
            marginLeft: 16
        },
        label: {
            color: textColor
        },
        input: {
            fontSize: 16,
            color: "#3a3a3a",
            marginTop: 3
        }
    });
    return(
        <View style={styles.borderInput}>
            <Item floatingLabel style={styles.item}>
                <Label style={styles.label}>{label}</Label>
                {type === "text" &&
                    <Input style={styles.input} value={textValue} onChangeText={onChange}/>
                }
                {type === "password" &&
                    <Input style={styles.input} secureTextEntry={true} value={textValue} onChangeText={onChange}/>
                }
            </Item>
        </View>
    )
}

export default TextInput;