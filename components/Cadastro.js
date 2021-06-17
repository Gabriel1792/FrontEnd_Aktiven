import * as React from 'react';
import { Platform, StyleSheet, Button,  Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Image, Component } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
  
export default Cadastro = () => {
    return (
        <View style={StyleSheet.container}>
            {/* Header */}
            <SafeAreaView>
                <View style={StyleSheet.headerWrapper}>
                    <Text>
                        Queremos conhecer
                        você um pouco
                        melhor!
                    </Text>
                </View>
            </SafeAreaView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
