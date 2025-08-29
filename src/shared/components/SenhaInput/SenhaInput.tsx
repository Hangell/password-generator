import React  from "react";
import { TextInput } from "react-native";
import {senhaInputStyles} from "@shared/components/SenhaInput/SenhaInputStyles";
import SenhaInputInterfaces from "@shared/interfaces/SenhaInput.interfaces";

export default function SenhaInput(props: SenhaInputInterfaces) {
    return(
       <TextInput
           showSoftInputOnFocus={false}
           style={senhaInputStyles.senha}
            placeholder="PASSWORD"
           value={props.pass}
           caretHidden
           contextMenuHidden
       />
    );
}
