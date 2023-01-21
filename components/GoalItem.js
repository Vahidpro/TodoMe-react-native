import { StyleSheet, Text } from "react-native";

function GoalItem(props) {
	return <Text style={styles.goalItem}>{props.text}</Text>;
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 5,
		padding: 15,
		borderRadius: 25,
		backgroundColor: "#d1d1d1ff",
		color: "#00001d",
		fontSize: 20,
	},
});
