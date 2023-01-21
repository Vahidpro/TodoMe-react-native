import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}
	function endAddGoalHandler() {
		setModalIsVisible(false);
	}
	function addGoalHandler(enteredGoalText) {
		setCourseGoals((prevGoals) => [
			...prevGoals,
			{ text: enteredGoalText, id: Math.random().toString() },
		]);

		endAddGoalHandler();
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}
	return (
		<View style={styles.appContainer}>
			<Button title="Add New Goal" color="red" onPress={startAddGoalHandler} />
			{modalIsVisible && (
				<GoalInput
					visible={modalIsVisible}
					onAddGoal={addGoalHandler}
					onCancel={endAddGoalHandler}
				/>
			)}
			<View style={styles.goalsContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								onDeleteItem={deleteGoalHandler}
								id={itemData.item.id}
							></GoalItem>
						);
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
