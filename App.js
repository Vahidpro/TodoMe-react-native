import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	function addGoalHandler(enteredGoa) {
		setCourseGoals((prevGoals) => [...prevGoals, enteredGoalText]);
	}
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={goalInputHandler}
					style={styles.textInput}
					placeholder="Your course goal!"
				></TextInput>
				<Button onPress={addGoalHandler} title="Add Goal"></Button>
			</View>
			<View style={styles.goalsContainer}>
				{courseGoals.map((goal) => (
					<Text key={goal}>{goal}</Text>
				))}
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
