import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';

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

function ValueRangeBase({
                            label = 'Tamanho',
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
        <View style={styles.container} accessibilityLabel={`${label} da senha`}>
            <View style={styles.header}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.badge}>{value}</Text>
            </View>

            <View style={styles.row}>
                <Pressable onPress={dec} disabled={disabled} style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
                    <Text style={styles.btnText}>−</Text>
                </Pressable>

                <Slider
                    style={styles.slider}
                    minimumValue={min}
                    maximumValue={max}
                    step={step}
                    value={value}
                    onValueChange={onChange}
                    onSlidingComplete={onChangeEnd}
                    disabled={disabled}
                />

                <Pressable onPress={inc} disabled={disabled} style={({ pressed }) => [styles.btn, pressed && styles.pressed]}>
                    <Text style={styles.btnText}>＋</Text>
                </Pressable>
            </View>

            <View style={styles.scale}>
                <Text style={styles.scaleText}>{min}</Text>
                <Text style={styles.scaleText}>{max}</Text>
            </View>
        </View>
    );
}

export default memo(ValueRangeBase);

const styles = StyleSheet.create({
    container: { width: '100%', gap: 8 },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    label: { fontSize: 14, opacity: 0.9 },
    badge: {
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 8,
        borderWidth: 1,
        opacity: 0.9,
    },
    row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    slider: { flex: 1, height: 40 },
    btn: {
        width: 40, height: 40, borderRadius: 8,
        alignItems: 'center', justifyContent: 'center',
        borderWidth: 1,
    },
    pressed: { opacity: 0.5 },
    btnText: { fontSize: 22, fontWeight: '600' },
    scale: { flexDirection: 'row', justifyContent: 'space-between', marginTop: -4 },
    scaleText: { fontSize: 12, opacity: 0.6 },
});
