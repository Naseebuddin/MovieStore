//import liraries
import React, { Component, useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
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
} from "../../styles/responsiveSize";

// create a component
const Home = ({ navigation }) => {
  const [discoverMovieData, setDiscoverMovieData] = useState();
  const [nowPlayingData, setNowPlayingData] = useState();
  const [idNumber, setIdNumber] = useState(1);
  const [upcomingData, setUpcomingData] = useState();
  const [toratedMovies, setToratedMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [all_Api_Data, setAll_Api_Data] = useState(nowPlayingData);

  const data = [
    { id: 1, type: strings.NOW_PLAYING },
    { id: 2, type: strings.UPCOMING },
    { id: 3, type: strings.TOP_RATED },
    { id: 4, type: strings.POPULAR },
  ];
  useEffect(() => {
    get_All_Discover_Movie();
    get_Now_playing_Movie();
    get_Upcoming_Movie();
    get_Top_Rated();
    get_Popular_Movies();
    dataCollection();
  }, []);

  const onLogout = () => {
    actions.logout();
  };
  //Api calling
  const get_All_Discover_Movie = async () => {
    await auth.discover_Movie().then((res) => {
      setDiscoverMovieData(res?.results, "res");
      // console.log(res);
    });
  };
  // console.log(discoverMovieData, "data");

  //Now Playing Api function
  const get_Now_playing_Movie = async () => {
    dataCollection();
    await auth.now_playing().then((resposnse) => {
      setNowPlayingData(resposnse?.results);
      console.log(resposnse, "resposnse");
    });
  };
  //Upcoming
  const get_Upcoming_Movie = async () => {
    await auth.upcoming_Movies_List().then((resposnse) => {
      console.log(resposnse?.results, "upcoming");
      setUpcomingData(resposnse?.results);
    });
  };
  //TO_RATED
  const get_Top_Rated = async () => {
    await auth.topRated_Movies_List().then((resposnse) => {
      console.log(resposnse, "TO_RATED");
      setToratedMovies(resposnse?.results);
    });
  };
  //Popular Movies
  const get_Popular_Movies = async () => {
    await auth.popular_Movies_List().then((resposnse) => {
      console.log(resposnse?.results);
      setPopularMovies(resposnse?.results);
    });
  };
  //Flatlist rendering
  const renderItemNowPlaying = useCallback(
    ({ item, index }) => {
      console.log(idNumber, "id");
      return (
        <View style={stylesHome.nowPlaying_View}>
          <TouchableOpacity
            onPress={() => {
              dataCollection(item.id);
              setIdNumber(item.id);
            }}
          >
            <Text style={stylesHome.nowPlaying_Text}>{item.type}</Text>
          </TouchableOpacity>
        </View>
      );
    },
    [data]
  );
  //Assing All Api data applying  Here
  const dataCollection = (idNumber) => {
    if (idNumber === 1) {
      setAll_Api_Data(nowPlayingData);
      return;
    } else if (idNumber === 2) {
      setAll_Api_Data(upcomingData);
      return;
    } else if (idNumber === 3) {
      setAll_Api_Data(toratedMovies);
      return;
    } else if (idNumber === 4) {
      setAll_Api_Data(popularMovies);
    }
  };
  //return
  return (
    <WrapperContainer>
      <HeaderComponent left_Title={strings.WHAT_DO_YOU} />
      <View style={stylesHome.search_View}>
        <SearchComp placeholder={strings.SEARCH} />
      </View>
      <ScrollView>
        <View>
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
              scrollEnabled={false}
              numColumns={3}
              data={all_Api_Data}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    {idNumber === 1 ? (
                      <RenderItem
                        imageStyle={stylesHome.flatList_Image_Style}
                        image={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                      />
                    ) : null}
                    {idNumber === 2 ? (
                      <RenderItem
                        imageStyle={stylesHome.flatList_Image_Style}
                        image={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                      />
                    ) : null}
                    {idNumber === 3 ? (
                      <RenderItem
                        imageStyle={stylesHome.flatList_Image_Style}
                        image={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                      />
                    ) : null}
                    {idNumber === 4 ? (
                      <RenderItem
                        imageStyle={stylesHome.flatList_Image_Style}
                        image={
                          "https://image.tmdb.org/t/p/w500" + item.poster_path
                        }
                      />
                    ) : null}
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
    </WrapperContainer>
  );
};

//make this component available to the app
export default Home;
