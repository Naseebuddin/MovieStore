import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import imagePath from "../constants/imagePath";
import { moderateScale, scale, verticalScale } from "../styles/responsiveSize";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";

const SearchComp = ({ placeholder, value, onChangeText }) => {
  return (
    <View style={styles.main_View}>
      <TextInput
        style={styles.textInput_Style}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors.white}
      />
      <Image style={styles.ic_zoom_Style} source={imagePath.ic_zoom} />
    </View>
  );
};
//Export the Components
export default React.memo(SearchComp);

const styles = StyleSheet.create({
  main_View: {
    flexDirection: "row",
    width: "100%",
    marginHorizontal: moderateScale(1),
    height: verticalScale(54),
    borderRadius: moderateScale(16),
    backgroundColor: colors.darkGray,
  },
  textInput_Style: {
    flex: moderateScale(1),
    marginLeft: moderateScale(14),
    alignSelf: "center",
    // color: colors.white,
    fontSize: moderateScale(15),
  },
  ic_zoom_Style: {
    width: scale(18),
    height: verticalScale(18),
    justifyContent: "center",
    alignSelf: "center",
    marginRight: moderateScale(12),
  },
});
