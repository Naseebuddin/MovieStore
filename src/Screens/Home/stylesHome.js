import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  verticalScale,
} from "../../styles/responsiveSize";

const { StyleSheet } = require("react-native");

const stylesHome = StyleSheet.create({
  search_View: {
    marginTop: moderateScaleVertical(24),
  },
  flatlist_View_Style: {
    marginTop: moderateScaleVertical(24),
  },
  flatList_Image_Style: {
    width: scale(100),
    height: verticalScale(146),
    marginBottom: moderateScaleVertical(18),
  },
  nowPlaying_View: {
    marginRight: moderateScale(24),
  },
  nowPlaying_Text: {
    ...commonStyles.fontSize16,
    color: colors.white,
  },
});
export default stylesHome;
