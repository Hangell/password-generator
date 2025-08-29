import React, { memo, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import {rangeStyles} from "@shared/components/ValueRange/ValueRangeStyles";

const GREEN = '#22C35F';
const WHITE = '#FFFFFF';

type Props = {
    label?: string;
    min: number;
    max: number;
    value: number;
    step?: number;
    onChange: (v: number) => void;
    onChangeEnd?: (v: number) => void;
    disabled?: boolean;
};

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

function ValueRange({
                        label = 'PASSWORD LENGTH',
                        min,
                        max,
                        value,
                        step = 1,
                        onChange,
                        onChangeEnd,
                        disabled,
                    }: Props) {
    const dec = useCallback(() => onChange(clamp(value - step, min, max)), [value, step, min, max, onChange]);
    const inc = useCallback(() => onChange(clamp(value + step, min, max)), [value, step, min, max, onChange]);

    return (
        <View style={rangeStyles.container}>
            <View style={rangeStyles.headerCentered}>
                <Text style={[rangeStyles.label, { color: WHITE }]}>{label}</Text>
                <Text style={[rangeStyles.separator, { color: WHITE }]}> : </Text>
                <Text style={[rangeStyles.badge, { color: WHITE, borderColor: GREEN }]}>{value}</Text>
            </View>

            <View style={rangeStyles.row}>
                <Pressable
                    onPress={dec}
                    disabled={disabled}
                    style={({ pressed }) => [rangeStyles.btn, { borderColor: GREEN }, pressed && rangeStyles.pressed]}
                >
                    <Text style={[rangeStyles.btnText, { color: WHITE }]}>−</Text>
                </Pressable>

                <Slider
                    style={rangeStyles.slider}
                    minimumValue={min}
                    maximumValue={max}
                    step={step}
                    value={value}
                    onValueChange={onChange}
                    onSlidingComplete={onChangeEnd}
                    disabled={disabled}
                    thumbTintColor={GREEN}
                    minimumTrackTintColor={GREEN}
                    maximumTrackTintColor={WHITE}
                />

                <Pressable
                    onPress={inc}
                    disabled={disabled}
                    style={({ pressed }) => [rangeStyles.btn, { borderColor: GREEN }, pressed && rangeStyles.pressed]}
                >
                    <Text style={[rangeStyles.btnText, { color: WHITE }]}>＋</Text>
                </Pressable>
            </View>

        </View>
    );
}

export default memo(ValueRange);
