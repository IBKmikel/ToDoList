import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, TextInput, View } from "react-native";

const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSignInPress = () => {
        if(user.trim().length > 0 && password.trim().length > 0){
            if(user === "userFacilito" && password === "codigo123"){
                navigation.navigate("Home");
            }else{
                Alert.alert("Error", "El usuario y/o contrasena son incorrectos");
                setPassword("");
                setUser("");
            }
        }
    }

    const handleUserTextChange = (text) => {
        setUser(text);
    }

    const handlePasswordTextChange = (text) => {
        setPassword(text);
    };

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={styles.image}
                />
            </View>
            <View style={styles.inputsContainer}>
                <TextInput 
                    placeholder="User" 
                    style={styles.textInput} 
                    onChangeText={handleUserTextChange} 
                    value={user}
                />
                <TextInput 
                    placeholder="Password" 
                    style={styles.textInput} 
                    secureTextEntry 
                    onChangeText={handlePasswordTextChange} 
                    value={password}
                />
            </View>
            <Button
                style={styles.button}
                title="Sign In"
                onPress={handleSignInPress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        alignSelf: "center"
    },
    imageContainer: {
        marginTop: 10,
        marginLeft: 10
    },
    inputsContainer:{

    },
    textInput:{
        backgroundColor: "#fff",
        padding: 6,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16
    },
    button:{
        backgroundColor: "#1976D2"
    },
    container:{
        flex:1,
        justifyContent: "center",
        marginLeft: 18,
        marginRight: 18
    }
});

export default LoginScreen;