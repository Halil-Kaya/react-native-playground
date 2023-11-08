import { Pressable, StyleSheet, Text, View } from "react-native"

export default function GoalList(props) {
    const { value, onGoalDeleted } = props
    return (
        <Pressable onPress={() => onGoalDeleted(value.id)}>
            {({ pressed }) => (
                <View style={styles.rootContainer(pressed)}>
                    <Text style={styles.textContainer}> {value.content} </Text>
                </View>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    rootContainer: (pressed) => ({
        backgroundColor: pressed ? "#BB6F8E" : "white",
        padding: 10,
        marginTop: 10,
        marginHorizontal: 6,
        borderRadius: 10,
    }),
    textContainer: {
        fontStyle: "italic",
    },
})
