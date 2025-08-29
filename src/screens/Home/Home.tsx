import React from "react";
import {View, Text, Image, Alert} from "react-native";
import {globalStyles} from "@styles/globalStyles";
import pass from "@assets/gif/pass.gif";
import Button from "@shared/components/Button/Button";

export default function Home() {
    return(
        <View style={globalStyles.containerFluid}>
            <Text style={globalStyles.title}>Pass Generator</Text>
            <Image source={pass}/>
            <View style={globalStyles.container}>
                <Text style={globalStyles.senha}>AbcDeFgH</Text>
                <Button
                    fullWidth
                    title="GENERATE"
                    onPress={() => Alert.alert('Generate')}
                    variant="outline"
                />
                <Button
                    fullWidth
                    title="COPY"
                    onPress={() => Alert.alert('COPY')}
                    variant="outline"
                />
            </View>
        </View>
    )
}
