import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((prevGoals) => [
			...prevGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);
	}
	return (
		<View style={styles.appContainer}>
			<GoalInput onAddGoal={addGoalHandler}></GoalInput>
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return <GoalItem text={itemData.item.text}></GoalItem>;
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

	goalsContainer: {
		flex: 4,
	},
});
