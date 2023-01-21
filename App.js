import { useState } from "react";
import {
	Button,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [courseGoals, setCourseGoals] = useState([]);

	function goalInputHandler(enteredText) {
		setEnteredGoalText(enteredText);
	}
	function addGoalHandler(enteredGoa) {
		setCourseGoals((prevGoals) => [
			...prevGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
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
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <Text style={styles.goalItem}>{itemData.item.text}</Text>;
					}}
					keyExtractor={(item, index) => {
						return item.id;
					}}
				/>
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

	goalItem: {
		margin: 5,
		padding: 15,
		borderRadius: 25,
		backgroundColor: "#d1d1d1ff",
		color: "#00001d",
		fontSize: 20,
	},
});
