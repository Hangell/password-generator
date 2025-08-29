import React, { useState } from "react";
import {View, Alert} from "react-native";
import Logo from "@shared/components/Logo/Logo";
import {StatusBar} from "expo-status-bar";
import {globalStyles} from "@styles/globalStyles";
import SenhaInput from "@shared/components/SenhaInput/SenhaInput";
import Button from "@shared/components/Button/Button";
import PasswordGenerator from "@shared/services/passwordService";
import * as Clipboard from "expo-clipboard";
import ValueRange from "@shared/components/ValueRange/ValueRange";

export default function Home() {
    const [pass, setPass] = React.useState("");
    const [copying, setCopying] = React.useState(false);
    const [length, setLength] = React.useState(12);
    const [alterImage, setalterImage] = React.useState(false);

    function handleGenerateButton() {
        setPass("");
        setalterImage(false);
        setTimeout(() => {
            setPass(PasswordGenerator.generate(length));
        }, 500);

        setTimeout(() => setalterImage(true), 500);
    }

    function isCopyDisabled(): boolean {
        return pass.trim().length === 0 || copying;
    }

    async function handleCopyButton() {
        if (isCopyDisabled()) return;

        try {
            setCopying(true);
            await Clipboard.setStringAsync(pass);
            //Alert.alert("Copiado!", "Senha copiada para a área de transferência.");
        } catch (err) {
            //Alert.alert("Erro", "Não foi possível copiar a senha. Tente novamente.");
        } finally {
            setCopying(false);
        }
    }

    function clearPassword() {
        setPass("");
        setalterImage(false);
    }

    return(
        <View style={globalStyles.appContainer}>
            <View style={globalStyles.logoContainer}>
                <Logo generated={alterImage} />
            </View>
            <View style={globalStyles.inputContainer}>
                <SenhaInput pass={pass} />
            </View>
            <View style={{ width: '100%', marginTop: 20, marginBottom: 8 }}>
                <ValueRange
                    label="PASSWORD LENGTH"
                    min={4}
                    max={32}
                    value={length}
                    onChange={v => setLength(Math.round(v))}
                />
            </View>
            <View style={globalStyles.inputBtn}>
                <Button
                    fullWidth
                    title={'GENERATE'}
                    onPress={handleGenerateButton}
                    variant="outline"
                />
                <Button
                    fullWidth
                    title={'CLEAR'}
                    onPress={clearPassword}
                    variant="outline"
                />
                <Button
                    fullWidth
                    disabled={isCopyDisabled()}
                    title={copying ? "COPYING..." : "COPY"}
                    onPress={handleCopyButton}
                    variant="primary"
                />
            </View>
            <StatusBar style="light"/>
        </View>
    )
}
