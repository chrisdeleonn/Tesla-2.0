import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
	const { name, tagline, taglineCTA, image } = props;

	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline}
					{""}
				</Text>
				<Text style={styles.subtitleCTA}>{taglineCTA}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<StyledButton
					type="primary"
					content={"Custom Order"}
					onPress={() => {
						console.log("button was pressed");
					}}
				/>
				<StyledButton
					type="secondary"
					content={"Existing Inventory"}
					onPress={() => {
						console.log("this button was pressed");
					}}
				/>
			</View>
		</View>
	);
};

export default CarItem;
