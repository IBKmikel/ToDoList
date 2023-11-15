import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, FlatList } from "react-native";
const ToDoListScreen = () =>{
    const [toDoListData, setToDoListData] = useState([]);
    const [toDoText, setToDoText] = useState("");

    const handleChangeText = (text) => {
        setToDoText(text);
    }

    const handleButtonPress = () => {
        if(toDoText.trim().length >0){
            setToDoListData((value) => value.concat({ text: toDoText }));
            setToDoText("");
        }
    }

    const handleRenderListItem = ({ item }) => {
        return <Text>{item.text}</Text>
    }

    return(
        <SafeAreaView style={ styles.container }>
            <View style={styles.viewContainer}>
                {/* <ScrollView style={styles.container}> */}
                    <View>
                        <TextInput 
                            placeholder="Escribe tu palabra" 
                            style={styles.textInput}
                            placeholderTextColor="#C4C4C4"
                            value={toDoText}
                            onChangeText={handleChangeText}
                        />
                        <Button 
                        title="Enter"
                        style={styles.button}
                        onPress={handleButtonPress}
                        />
                    </View>
                    <View>
                        <FlatList
                        data={toDoListData}
                        renderItem={handleRenderListItem}
                        keyExtractor={(item) => item.text}
                        />
                    </View>
                {/* </ScrollView> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#FFFBFB"
    },
    textInput: {
        backgroundColor: "#F5F5F5",
        color: "#212121",
        fontSize: 16,
        marginBottom: 16
    },
    viewContainer: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    }
});


export default ToDoListScreen;