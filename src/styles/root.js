import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: 50,
        flex: 1,
        flexDirection: 'row'
        // justifyContent: "center", 
        // alignItems: "center",
        
    },
    input: {
        flex: 6,
        height: 50,
        paddingLeft: 20,
        backgroundColor: '#ccc',
    },
    button: {
        flex: 1,
        height: 50,
        backgroundColor: 'green',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: '#fff'
    },
    taskContainer: {
        marginTop: 75
    },
    taskItems: {
        height: 50,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: "center",
        borderColor: '#ccc',
        borderBottomWidth: 1
    },
    taskText: {
        fontSize: 17
    }
});