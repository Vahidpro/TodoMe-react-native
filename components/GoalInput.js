import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

function GoalInput(props) {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	function addGoalHandler() {
		props.onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				onChangeText={goalInputHandler}
				style={styles.textInput}
				placeholder="Your course goal!"
				value={enteredGoalText}
			></TextInput>
			<Button onPress={addGoalHandler} title="Add Goal"></Button>
		</View>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
