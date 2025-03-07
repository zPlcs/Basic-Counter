import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },

      bar:{
        gap: "10%",
        flexDirection: 'row',
      },

    mainTxt:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: "10%",
        
    },

    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 100,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        
    }
})

export default Styles