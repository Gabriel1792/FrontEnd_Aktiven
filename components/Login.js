import * as React from 'react';
import { Platform, StyleSheet, Button,  Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Image, Component } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
  
export default Login = () => {
    return (
        <View style={StyleSheet.container}>
            {/* Robot */}
            <View style={styles.robot}>
                <View style={styles.robotEyeLeft}/>
                <View style={styles.robotEyeRight}/>
                <View style={styles.robotAntena1}/>
                <View style={styles.robotAntena2}/>
                <View style={styles.robotAntena1}/>
                <View style={styles.robotAntena2}/>
                <View style={styles.robotBola1}/>
                <View style={styles.robotBola2}/>
            </View>

            {/* Titles */}
            <View style={styles.titlesWrapper}>
                <Text style={styles.sectionTitle}>AKTIVEN</Text>
                <Text style={styles.sectionSubtitle}>ou acesse com</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 407,
        height: 882,
        backgroundColor: '#F5F5F5',
    },
    robot: {
        position: 'absolute',
        width: 109,
        height: 109,
        left: 149,
        top: 95,
        backgroundColor: '#EBEBEB',
        borderRadius: 70,
        justifyContent: 'center',
      },
      robotEyeLeft: {
        position: 'absolute',
        width: 11.38,
        height: 18.21,
        left: 30,
        top: 30,
        backgroundColor: '#C4C4C4',
        borderRadius: 50 ,
        transform: [{ rotate: '10.82deg'}]
      },
      robotEyeRight: {
        position: 'absolute',
        width: 11.38,
        height: 18.21,
        left: 65,
        top: 30,
        backgroundColor: '#C4C4C4',
        borderRadius: 50,
        transform: [{ rotate: '-10.82deg'}]
      },
      robotAntena1: {
        position: 'absolute',
        width: 24,
        height: 3,
        left: 106,
        top: 40,
        backgroundColor: '#C4C4C4',
      },
      robotAntena2: {
        position: 'absolute',
        width: 24,
        height: 3,
        left: -22,
        top: 40,
        backgroundColor: '#C4C4C4',
      },
      robotBola1: {
        position: 'absolute',
        width: 7.02,
        height: 7.02,
        left: -29,
        top: 38,
        backgroundColor: '#C4C4C4',
        borderRadius: 50,
        transform: [{ rotate: '0.22deg'}]
      },
      robotBola2: {
        position: 'absolute',
        width: 7.02,
        height: 7.02,
        left: 130,
        top: 38,
        backgroundColor: '#C4C4C4',
        borderRadius: 50,
        transform: [{ rotate: '0.22deg'}]
      },
      titlesWrapper: {
        paddingTop: 215,
        paddingHorizontal: 122,
      },
      sectionTitle: {
        fontSize: 40,
        fontFamily: 'YanoneKaffeesatz-Bold',
        fontWeight: 'bold',
        color: '#8BC1A5',
      },
      sectionSubtitle: {
        position: 'absolute',
        width: 100,
        height: 20,
        left: 154,
        top: 560,
        fontSize: 13,
        fontFamily: "Poppins",
        fontWeight: 'normal',
        color: '#5E5E5E',
      },
});

        /*  
        { BUTTON }
  
        { IMAGENS }
        <View style={styles.container}>
          <Image source={require('./assets/images/logoFacebook.png')} style={styles.logoFacebook}/>
          <Image source={require('./assets/images/logoGoogle.png')}style={styles.logoGoogle}/>
        </View>
  
        { AKTIVEN }
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>AKTIVEN</Text>
          <Text style={styles.sectionSubtitle}>ou acesse com</Text>
  
          <View style={styles.items}>
          { LOGIN|CADASTRO }
          </View>
  
        </View>
  
        { ESCREVER LOGIN }
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeLogin}
          >
            <TextInput style={styles.input1} placeholder={'Nome de usuário'} />
          </KeyboardAvoidingView>
  
        { ESCREVER SENHA }
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeSenha}
          >
            <TextInput style={styles.input2} placeholder={'Senha'} />
  
            { BOTÃO }
            <TouchableOpacity >
              <View style={styles.addContinuar}>
                <Text style={styles.addText1}>Continuar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text style={styles.addTex2t}>cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.addFacebook}>
                <Text style={styles.addText3}>Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity >
              <View style={styles.addGoogle}>
                <Text style={styles.addText4}>Google</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
  
      </View>
    ;
}

*/

/*
    const AppButton = ({ onPress, title }) => (
        <TouchableOpacity onPress={onPress} style={style.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    
    tasksWrapper: {
      paddingTop: 215,
      paddingHorizontal: 122,
    },
    sectionTitle: {
      fontSize: 40,
      fontFamily: 'YanoneKaffeesatz-Bold',
      fontWeight: 'bold',
      color: '#8BC1A5',
    },
    sectionSubtitle: {
      position: 'absolute',
      width: 100,
      height: 20,
      left: 154,
      top: 560,
      fontSize: 13,
      fontFamily: "Poppins",
      fontWeight: 'normal',
      color: '#5E5E5E',
    },
    items: {},
    writeLogin: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#000000',
      opacity: 0.6,
    },
    input1: {
      position: 'absolute',
      width: 226,
      height: 53,
      left: 90,
      top: 90,
      paddingVertical: 13,
      paddingHorizontal: 21,
      backgroundColor: '#EBEBEB',
      borderRadius: 20,
    },
    writeSenha: {
      position: 'absolute',
      bottom: 90,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    input2: {
      position: 'absolute',
      width: 226,
      height: 53,
      left: 91,
      top: 240,
      paddingVertical: 13,
      paddingHorizontal: 21,
      backgroundColor: '#EBEBEB',
      borderRadius: 20,
    },
    addContinuar: {
      width: 155,
      height: 47,
      left: 126,
      top: 315,
      backgroundColor: '#8BC1A5',
      borderRadius: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    addText1: {
      color: '#5E5E5E',
      fontSize: 15,
      top: 15,
    },
    addText2: {
      color: '#5E5E5E',
      fontSize: 13,
      top: 700,
      textDecorationLine: 'underline',
    },
    addFacebook: {
      width: 217,
      height: 47,
      right: 130,
      top: 450,
      backgroundColor: '#345CA7',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    addText3: {
      paddingVertical: 15,
      paddingHorizontal: 30,
      width: 126,
      fontSize: 15,
      color: '#F5F5F5',
    },
    addGoogle: {
      width: 217,
      height: 47,
      right: 345,
      top: 515,
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText4: {
      color: '#414141',
      fontSize: 15,
    },
    logoFacebook: {
      width: 29.5,
      height: 30.6,
      left: 65,
      top: 590,
      resizeMode: 'contain',
    },
    logoGoogle: {
      width: 34,
      height: 39,
      left: 70,
      top: 620,
      resizeMode: 'contain',
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
  });
  
*/
  