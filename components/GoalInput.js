import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Modal } from "react-native";

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
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					onChangeText={goalInputHandler}
					style={styles.textInput}
					placeholder="Your course goal!"
					value={enteredGoalText}
				></TextInput>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button onPress={addGoalHandler} title="Add Goal"></Button>
					</View>
					<View style={styles.button}>
						<Button onPress={props.onCancel} title="Cancel"></Button>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		borderRadius: 10,
		alignItems: "center",
		paddingBottom: 25,
		borderBottomWidth: 1,
		borderBottomColor: "#cccccc",
		marginBottom: 24,
		padding: 16,
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#cccccc",
		width: "100%",
		borderRadius: 10,
		padding: 8,
	},
	buttonContainer: {
		flexDirection: "row",
		marginTop: 32,
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
});
