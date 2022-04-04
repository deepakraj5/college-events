import { useNavigation } from '@react-navigation/native';
import { Button, Dimensions, Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'

export default function Profile() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View>

                <Image source={require('../assets/profile-welcome.png')} style={styles.image} />

            </View>

            <View style={styles.textContainer}>

                <Text style={styles.title}>Discover your events here</Text>
                <Text style={styles.subTitle}>Explore all the most exiting events based on your interest and study major</Text>

            </View>

            <View style={{ height: 70 }}>

                <View style={styles.btnContainer}>
                    <Text onPress={() => navigation.navigate('Register')} style={{ backgroundColor: 'white', fontSize: 20, fontWeight: 'bold', width: '50%', textAlign: 'center', height: '100%', textAlignVertical: 'center', borderRadius: 20 }}>Register</Text>
                    <Text onPress={() => alert('sign in')} style={{ backgroundColor: 'whitesmoke', fontSize: 20, fontWeight: 'bold', width: '50%', textAlign: 'center', height: '100%', textAlignVertical: 'center', borderTopRightRadius: 20, borderBottomRightRadius: 20 }}>Sign in</Text>                
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: StatusBar.currentHeight
    },
    image: {
        height: Math.round(Dimensions.get('window').height) / 2,
        width: '100%',
        borderRadius: 30
    },
    textContainer: {
        padding: 20
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        padding: 30,
        paddingBottom: 0,
        paddingTop: 70,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center',
        padding: 10,
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10
    }
})