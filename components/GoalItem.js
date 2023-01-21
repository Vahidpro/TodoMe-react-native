import { Pressable, StyleSheet, Text } from "react-native";

function GoalItem(props) {
	return (
		<Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
			<Text style={styles.goalItem}>{props.text}</Text>
		</Pressable>
	);
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
