import { StyleSheet, View, StatusBar, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import { Calendar } from 'react-native-calendars';

export default function CalendarScreen() {
    return(
        <View style={{ marginTop: StatusBar.currentHeight }}>

            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Events Calendar</Text>

                <Calendar onDayPress={day => console.log(day)} enableSwipeMonths={true} />
            </SafeAreaView>

            <SafeAreaView style={styles.eventsContainer}>
                <Text style={styles.eventsTitle}>Events</Text>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={styles.eventsBox}></View>
                    </View>
                </ScrollView>

            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        color: 'blue'
    },
    eventsContainer: {
        padding: 10,
        height: 580
    },
    eventsTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'grey',
        padding: 10
    },
    eventsBox: {
        height: 150,
        backgroundColor: 'white'
    }
})