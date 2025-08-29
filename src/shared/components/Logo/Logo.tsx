import React  from "react";
import {Image, Text} from "react-native";
import {logoStyles} from "@shared/components/Logo/LogoStyles";
import aberto from '@assets/img/cadeado-aberto.png';
import fechado from '@assets/img/cadeado-fechado.png';

type Props = { generated?: boolean };

export default function Logo({ generated = false }: Props) {
    return (
        <>
            <Text style={logoStyles.title}>PASSWORD GENERATOR</Text>
                <Image style={logoStyles.img} source={ generated ? fechado : aberto} />
        </>
    );
}
