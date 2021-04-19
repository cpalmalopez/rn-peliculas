import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies'

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {

    const { peliculasCine, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>
                {/* Carousel Principal */}
                <View style={{height: 440}}>
                    <Carousel
                        data={peliculasCine}
                        renderItem={({item}: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>
                {/* Películas en Cine */}
                <HorizontalSlider title="En Cine" movies={peliculasCine} />
            </View>
        </ScrollView>
    )
}
