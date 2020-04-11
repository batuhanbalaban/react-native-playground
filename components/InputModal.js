import React, { useState } from 'react';

import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';


InputModal = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const onAddHandler = () => {
        props.onAdd(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter Your Goal"
                    style={styles.input}
                    onChangeText={(txt) => setEnteredGoal(txt)}
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={onAddHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel.bind(this)} />
                    </View>
                </View>

            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button: {
        width: '40%',
    },
    input: {
        color: 'black',
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});

export default InputModal;