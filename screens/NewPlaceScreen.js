import React, { useState } from 'react';
import { View, Button, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesAcions from '../memory/places-actions';



const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('');

    const dispatch = useDispatch();


    const titleChangeHandler = text => {
        setTitleValue(text);
    };

    const savePlaceHandler = () => {
        dispatch(placesAcions.addPlace(titleValue));
        props.navigation.goBack();

    };


    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue} />
                <Button title="Save image" color={Colors.primary} onPress={savePlaceHandler} />
            </View>
        </ScrollView>
    );
};

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
};

const styles = StyleSheet.create({

    form: {
        margin: 30
    },
    label: {
        fontSize: 20,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;