import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./components/CarItem";

export default function App() {
	return (
		<View style={styles.container}>
			<CarItem
				name={"Model X"}
				image={require("./assets/images/Model3.jpeg")}
				tagline={"Order Online For"}
				taglineCTA={"Touchless Delivery"}
			/>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
