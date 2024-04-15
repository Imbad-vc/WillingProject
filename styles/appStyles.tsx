import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    directionContainer:{
        width:200,
        justifyContent:'flex-start',
        // flexDirection: "column",
        alignItems:'center',
        backgroundColor: "gray",
    },

    buttonStyle:{
        width:80,
        height:80,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
});
  