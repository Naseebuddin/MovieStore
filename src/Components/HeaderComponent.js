import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import imagePath from "../constants/imagePath";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, moderateScaleVertical } from "../styles/responsiveSize";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";
import fontFamily from "../styles/fontFamily";

const HeaderComponent = ({
  left_Icon,
  onPressGoBack,
  title,
  goBack,
  right_icon,
  left_Title,
}) => {
  const navegation = useNavigation();
  return (
    <View style={styles.main_View}>
      {left_Title ? (
        <Text style={styles.left_Title_Style}>{left_Title}</Text>
      ) : null}
      <TouchableOpacity
        onPress={() => {
          navegation.goBack();
          {
            onPressGoBack;
          }
        }}
      >
        {goBack ? <Image source={imagePath.ic_arrow_left} /> : null}
        {!!left_Icon && <Image source={left_Icon} />}
      </TouchableOpacity>
      {title ? <Text style={styles.title_Style}>{title}</Text> : null}
      {right_icon ? (
        <TouchableOpacity>
          <Image source={imagePath.ic_Vector} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

//export File
export default HeaderComponent;

// define your styles
const styles = StyleSheet.create({
  main_View: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(4),
    marginTop: moderateScaleVertical(12),
  },
  title_Style: {
    ...commonStyles.fontSize18,
    fontFamily: fontFamily.bold,
    color: colors.white,
  },
  left_Title_Style: {
    ...commonStyles.fontSize20,
    fontFamily: fontFamily.bold,
    color: colors.white,
  },
});
