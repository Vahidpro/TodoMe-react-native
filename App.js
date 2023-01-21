import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Text
				style={{
					margin: 16,
					borderWidth: 2,
					borderColor: "green",
					borderRadius: 10,
					fontSize: 25,
					padding: 10,
				}}
			>
				Hello World!
			</Text>
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
