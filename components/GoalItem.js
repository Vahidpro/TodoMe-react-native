import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#ff000075", borderless: true }}
				onPress={props.onDeleteItem.bind(this, props.id)}
			>
				<Text style={styles.goalText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		margin: 5,
		borderRadius: 25,
		backgroundColor: "#d1d1d1ff",
		color: "#00001d",
	},
	goalText: {
		fontSize: 25,
		padding: 15,
	},
});
