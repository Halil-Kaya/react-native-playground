import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constant/colors"
import PrimaryButton from "../components/ui/primary.button"

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text styles={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{" "}
                    <Text styles={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
    },
})
