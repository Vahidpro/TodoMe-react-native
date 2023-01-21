import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
				></TextInput>
				<Button title="Add Goal"></Button>
			</View>
			<View style={styles.goalsContainer}>
				<Text>List of goals...</Text>
			</View>
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

	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 10,
		alignItems: "center",
		paddingBottom: 25,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
		marginBottom: 24,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "70%",
		borderRadius: 10,
		marginRight: 8,
		padding: 8,
	},
	goalsContainer: {
		flex: 4,
	},
});
