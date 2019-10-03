import React from 'react';
import { StyleSheet } from 'react-native';
import { Form, Textarea } from 'native-base';

const TextArea = ( { placeholder, textColor } ) => {
    const styles = StyleSheet.create({
        textarea: {
            borderColor: textColor,
            borderWidth: 1,
            borderRadius: 10,
            padding: 6,
            color: textColor
        }
    });
    return(
        <Form>
            <Textarea rowSpan={3} bordered placeholder={placeholder} style={styles.textarea}/>
        </Form>
    )
}

export default TextArea;