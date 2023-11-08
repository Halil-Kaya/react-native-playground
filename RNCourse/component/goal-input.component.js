import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"

export default function GoalInput(props) {
    const { visible, onCloseModal, onGoalAdded } = props

    const [inputText, setInputText] = useState("")
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.rootContainer}>
                <Image
                    source={require("../assets/image/logo.png")}
                    style={{
                        width: 100,
                        height: 100,
                        margin: 20,
                    }}
                />
                <TextInput
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                    style={styles.textInput}
                    placeholder={"Type a new goal..."}
                />
                <View style={styles.decisionContainer}>
                    <Pressable onPress={onCloseModal}>
                        <Text style={styles.closeBtn}>Cancel</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            if (inputText) {
                                onGoalAdded(inputText)
                                setInputText("")
                            }
                        }}>
                        <Text style={styles.addBtn(!!inputText)}>Add Goal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1E1E62",
        paddingVertical: 32,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        backgroundColor: "white",
        width: "80%",
        paddingHorizontal: 15,
        padding: 10,
        borderRadius: 10,
    },
    decisionContainer: {
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-between",
        width: "56%",
    },
    closeBtn: {
        color: "red",
        fontSize: 18,
    },
    addBtn: (canAdd) => ({
        color: canAdd ? "cyan" : "gray",
        fontSize: 18,
    }),
})
