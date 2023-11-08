import { FlatList, Modal, Pressable, StyleSheet, Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import GoalList from "./component/goal-list.component"
import GoalInput from "./component/goal-input.component"
import { useState } from "react"

const generateId = () => {
    return Math.random().toString()
}

export default function App() {
    const [showInputModal, setShowInputModal] = useState(false)
    const [goals, setGoals] = useState([])
    function onCloseModalHandler() {
        setShowInputModal(false)
    }
    function goalAddedHandler(newGoalText) {
        if (!newGoalText) {
            return
        }
        setGoals((currentGoals) => currentGoals.concat({ id: generateId(), content: newGoalText }))
        setShowInputModal(false)
    }

    function goalDeleteHandler(id) {
        if (!id) {
            return
        }
        setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id))
    }

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <View>
                    <GoalInput
                        visible={showInputModal}
                        onCloseModal={onCloseModalHandler}
                        onGoalAdded={goalAddedHandler}
                    />
                    <Pressable onPress={() => setShowInputModal(!showInputModal)}>
                        {({ pressed }) => (
                            <View style={styles.modalViewContainer(pressed)}>
                                <Text style={{ color: "white" }}>ADD NEW GOAL</Text>
                            </View>
                        )}
                    </Pressable>
                </View>
                <View style={{ height: "100%" }}>
                    <FlatList
                        data={goals}
                        renderItem={({ item }) => <GoalList value={item} onGoalDeleted={goalDeleteHandler} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1E1E62",
        paddingVertical: 32,
        paddingHorizontal: 20,
    },
    modalViewContainer: (pressed) => ({
        backgroundColor: pressed ? "#6F6FBB" : "#5958D6",
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
    }),
})
