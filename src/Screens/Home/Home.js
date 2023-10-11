//import liraries
import React, { Component, useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ButtonComp from "../../Components/ButtonComp";
import actions from "../../redux/actions";
import colors from "../../styles/colors";
import WrapperContainer from "../../Components/WrapperContainer";
import HeaderComponent from "../../Components/HeaderComponent";
import strings from "../../constants/lang";
import SearchComp from "../../Components/SearchComp";
import stylesHome from "./stylesHome";
import navigationStrings from "../../constants/navigationStrings";
import RenderItem from "../../Components/RenderItem";
import auth from "../../redux/actions/auth";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  verticalScale,
} from "../../styles/responsiveSize";

// create a component
const Home = ({ navigation }) => {
  const [discoverMovieData, setDiscoverMovieData] = useState();
  const [nowPlayingData, setNowPlayingData] = useState();
  const data = [
    { id: 1, type: strings.NOW_PLAYING },
    { id: 2, type: strings.UPCOMING },
    { id: 3, type: strings.TOP_RATED },
    { id: 4, type: strings.POPULAR },
  ];
  useEffect(() => {
    get_All_Discover_Moview();
    get_Now_playing_Moview();
  }, []);

  const onLogout = () => {
    actions.logout();
  };
  //Api calling
  const get_All_Discover_Moview = async () => {
    await auth.discover_Movie().then((res) => {
      setDiscoverMovieData(res?.results, "res");
      // console.log(res);
    });
  };
  // console.log(discoverMovieData, "data");

  const get_Now_playing_Moview = async () => {
    await auth.now_playing().then((resposnse) => {
      setNowPlayingData(resposnse?.results);
      console.log(resposnse, "resposnse");
    });
  };

  const renderItemNowPlaying = useCallback(
    ({ item, index }) => {
      return (
        <View style={stylesHome.nowPlaying_View}>
          <Text style={stylesHome.nowPlaying_Text}>{item.type}</Text>
        </View>
      );
    },
    [data]
  );

  return (
    <WrapperContainer>
      <HeaderComponent left_Title={strings.WHAT_DO_YOU} />
      <View style={stylesHome.search_View}>
        <SearchComp placeholder={strings.SEARCH} />
      </View>
      <View style={stylesHome.flatlist_View_Style}>
        <FlatList
          data={discoverMovieData}
          horizontal
          renderItem={({ item }) => {
            return (
              <RenderItem
                image={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                id={discoverMovieData.length}
              />
            );
          }}
        />
      </View>
      <View>
        {/* Now playing  */}
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            contentContainerStyle={stylesHome.contain_Conatiner_STyle}
            horizontal
            renderItem={renderItemNowPlaying}
            keyExtractor={(item) => item.id}
          />
        </View>
        <FlatList
          numColumns={3}
          data={nowPlayingData}
          renderItem={({ item, index }) => {
            return (
              <RenderItem
                imageStyle={stylesHome.flatList_Image_Style}
                image={"https://image.tmdb.org/t/p/w500" + item.poster_path}
              />
            );
          }}
        />
      </View>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Home;
