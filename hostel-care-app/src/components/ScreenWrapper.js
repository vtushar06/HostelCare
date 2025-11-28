import React from 'react';
import { StyleSheet, ScrollView, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useTheme } from 'react-native-paper'; 
import colors from '../utils/colors'; 

const ScreenWrapper = ({ 
  children, 
  isScrollable = true, 
  style = {},
  contentContainerStyle = {},
  backgroundColor = colors.WHITE, 
}) => {
  const { colors: paperColors } = useTheme();

  const containerStyle = {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
  };

  if (isScrollable) {
    return (
      <SafeAreaView style={containerStyle}>
        <ScrollView 
          contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
          keyboardShouldPersistTaps="handled" // Good for forms
        >
          <View style={[styles.innerView, style]}>
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={containerStyle}>
      <View style={[styles.innerView, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1, 
  },
  innerView: {
    flex: 1,
    paddingHorizontal: 16, 
  }
});

export default ScreenWrapper;