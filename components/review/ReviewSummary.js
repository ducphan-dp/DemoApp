import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import HeadingText from "./../common/HeadingText";
import NormalText from "./../common/NormalText";
import Button from "./../common/Button";
import colors from "./../../styles/colors";

const mkReviewSummary = (percentCorrect, quitFunc) => {
  return (
    <View style={styles.done}>
      <HeadingText style={styles.alternate}>
        Reviews cleared!
      </HeadingText>
      <NormalText style={styles.alternate}>
        {Math.round(percentCorrect * 100)}% correct
      </NormalText>
      <Button onPress={quitFunc} style={styles.doneButton}>
        <NormalText>Done</NormalText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  alternate: { color: "#FFFFFF" },
  done: { alignItems: "center" },
  doneButton: { backgroundColor: colors.tan }
});

export { mkReviewSummary };
