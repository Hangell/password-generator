import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
    },
    logoContainer: {
        flexDirection: 'column',
        width: '100%',
        borderWidth: 2, justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop: 16,
    },
    inputContainer: {
        width: '88%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    inputBtn: {
        display: 'flex',
        marginTop: 16,
        width: '88%',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16
    }
});
