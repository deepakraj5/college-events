import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SwipeablePanel } from 'rn-swipeable-panel';

const ENTRIES1 = [
    {
      title: 'Beautiful',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'Landscape',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
];

const {width: screenWidth} = Dimensions.get('window');

export default function Discover(props) {

    const [time, setTime] = useState(new Date().toLocaleString('', { hour12: true }))
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: true,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel()
    });
    const [isPanelActive, setIsPanelActive] = useState(false);
    
    const openPanel = () => {
        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {

        setInterval(() => {
            setTime(new Date().toLocaleString('', { hour12: true }))
        }, 1000)

        setEntries(ENTRIES1);

    }, [])

    const renderItem = ({item, index}, parallaxProps) => {
        return (
          <View style={styles.item}>
            <View style={styles.carouselImageContainer}>
                <ParallaxImage
                source={{uri: item.illustration}}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
                />
            </View>
            <Text style={styles.monthDate}>
                Nov-22
            </Text>
            <Text style={styles.carouselImageTitle} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        );
    };


    return(
        <View style={styles.container}>
            
            <StatusBar style="auto" />

            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.upperContainer}>

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleDate}>{time}</Text>
                            <Text style={styles.title}>Discover events</Text>
                        </View>

                        <View style={styles.titleImageContainer}>
                            <Image style={styles.faceImage} source={{
                                uri: 'https://media.istockphoto.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?b=1&k=20&m=1309405076&s=170667a&w=0&h=28jfs2oOeQfL65kzGPVoPS8xxFJWK1h7LEkTSWKY-lM='
                            }} />
                        </View>

                    </View>

                    <View style={styles.searchContainer}>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View>
                                <TextInput placeholder='Search' clearButtonMode='always' style={styles.searchBar} />
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Pressable style={{ alignItems: 'center' }} onPress={() => openPanel()}><Ionicons name="filter" size={35} color="black" /></Pressable>
                            </View>
                        </View>
                            
                        </View>

                        <View style={styles.topCarousel}>

                        <Text style={styles.topCarouselText}>NEAR BY YOU</Text>

                        <View style={styles.carouselContainer}>
                            {/* <TouchableOpacity onPress={goForward}>
                                <Text>go to next slide</Text>
                            </TouchableOpacity> */}
                            <Carousel
                                ref={carouselRef}
                                sliderWidth={screenWidth}
                                sliderHeight={screenWidth}
                                itemWidth={screenWidth - 60}
                                data={entries}
                                renderItem={renderItem}
                                hasParallaxImages={true}
                            />
                        </View>

                        </View>

                        <View>

                        <Text style={styles.forYouText}>FOR YOU</Text>

                        <View style={styles.forYouContainer}>

                            <View style={styles.forYouInnerContainer}>
                                <View style={{ width: '70%' }}>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', padding: 8 }}>Claim 4 free tickets!</Text>
                                    <Text style={{ fontSize: 20 , color: 'white', padding: 8 }}>Upgrade your account and get 3 tickets instantly</Text>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ padding: 10 }}><Entypo name="new" size={60} color="white" /></Text>
                                    <Text style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, fontWeight: 'bold' }}>Upgrade now</Text>
                                </View>
                            </View>

                        </View>

                        </View>

                        <View>

                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 20 }}>CATEGORIES</Text>

                        <SafeAreaView>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>
                                
                            </ScrollView>
                        </SafeAreaView>

                        <SafeAreaView>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>
                                
                            </ScrollView>
                        </SafeAreaView>

                        <SafeAreaView>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.categoryBox}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                        <View>
                                            <Text><MaterialCommunityIcons name="movie-open" size={60} color="red" /></Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Concerts</Text>
                                            <Text style={{ color: 'grey' }}>15 events</Text>
                                        </View>
                                    </View>
                                </View>
                                
                            </ScrollView>
                        </SafeAreaView>

                    </View>
                </ScrollView>
            </SafeAreaView>

            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <Text style={styles.filterTitle}>Filter events</Text>
            </SwipeablePanel>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        // marginTop: 30,
        // height: '100%'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    faceImage: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    upperContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
        // height: 200
    },
    titleContainer: {
        height: 50
    },
    titleImageContainer: {
        // marginLeft: 80
    },
    titleDate: {
        fontSize: 15,
        color: 'grey'
    },
    topCarousel: {
        marginTop: 40
    },
    topCarouselText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
    item: {
        width: screenWidth - 180,
        height: screenWidth - 210,
        height: 160,
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'black',
        borderRadius: 20,
        width: 300,
    },
    carouselContainer: {
        marginTop: 20,
    },
    carouselImageTitle: {
        fontSize: 30,
        color: 'white',
        top: '60%',
        left: '10%',
        fontWeight: 'bold',
        // marginTop: -40,
        // marginLeft: 10,
    },
    carouselImageContainer: {
        position: 'absolute',
        height: '100%'
    },
    monthDate: {
        color: 'black',
        left: 200,
        top: 10,
        fontSize: 20,
        backgroundColor: 'white',
        width: 80,
        textAlign: 'center',
        borderRadius: 20,
        fontWeight: 'bold'
    },
    forYouText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 20
    },
    forYouContainer: {
        height: 160,
        borderRadius: 20,
        backgroundColor: '#00E5BD',
    },
    forYouInnerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    categoryBox: {
        width: 200,
        height: 100
    },
    searchBar: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        height: 40,
        width: Dimensions.get('window').width - 150
    },
    searchContainer: {
        marginTop: 40,
        height: 60,
        width: '100%',
    },
    filterTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})