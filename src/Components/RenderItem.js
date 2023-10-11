import { View, Text, Image, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { moderateScale, scale, verticalScale } from "../styles/responsiveSize";
import commonStyles from "../styles/commonStyles";
import colors from "../styles/colors";

const RenderItem = ({ image, id, width, height, imageStyle }) => {
  return (
    <View>
      <Image
        style={{ ...styles.image_Style, ...imageStyle }}
        // resizeMode="center"
        source={{ uri: image }}
      />
      {id ? <Text style={styles.text_Style}>{id}</Text> : null}
    </View>
  );
};

export default React.memo(RenderItem);

//style
const styles = StyleSheet.create({
  image_Style: {
    height: verticalScale(210),
    width: scale(140),
    borderRadius: moderateScale(16),
    marginLeft: moderateScale(12),
    resizeMode: "center",
  },
  text_Style: {
    ...commonStyles.fontSize40,
    position: "relative",
    fontSize: moderateScale(62),
    alignSelf: "flex-start",
    color: colors.blackOpacity80,
    marginHorizontal: moderateScale(0),
    marginTop: moderateScale(-42),
    textShadowColor: colors.blue,
    textShadowRadius: moderateScale(2),
  },
});
