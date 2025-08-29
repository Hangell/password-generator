// src/core/design-system/components/Button/Button.tsx
import React from 'react';
import { ActivityIndicator, Pressable, Text, ViewStyle } from 'react-native';

type Variant = 'primary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type Props = {
    title: string;
    onPress?: () => void;
    loading?: boolean;
    disabled?: boolean;
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    style?: ViewStyle;
};

const GREEN = '#22C35F';
const DARK = '#282828';
const WHITE = '#fff';

const sizes = {
    sm: { ph: 12, pv: 10, fs: 14, h: 40, r: 8 },
    md: { ph: 16, pv: 12, fs: 16, h: 48, r: 10 },
    lg: { ph: 20, pv: 14, fs: 18, h: 56, r: 12 },
};

export default function Button({
                                   title,
                                   onPress,
                                   loading,
                                   disabled,
                                   variant = 'primary',
                                   size = 'md',
                                   fullWidth,
                                   style,
                               }: Props) {
    const s = sizes[size];
    return (
        <Pressable
            accessibilityRole="button"
            disabled={disabled || loading}
            onPress={onPress}
            android_ripple={{ color: '#00000022', borderless: false }}
            style={({ pressed }) => [
                {
                    minHeight: s.h,
                    paddingHorizontal: s.ph,
                    paddingVertical: s.pv,
                    borderRadius: s.r,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: fullWidth ? 'stretch' : 'auto',
                    opacity: disabled ? 0.5 : 1,
                    borderWidth: variant === 'outline' ? 2 : 0,
                    backgroundColor:
                        variant === 'primary'
                            ? (pressed ? '#1AA54F' : GREEN)
                            : variant === 'ghost'
                                ? 'transparent'
                                : 'transparent',
                    borderColor: variant === 'outline' ? GREEN : 'transparent',
                },
                style,
            ]}
            hitSlop={8}
        >
            {loading ? (
                <ActivityIndicator />
            ) : (
                <Text
                    style={{
                        fontSize: s.fs,
                        fontWeight: '600',
                        color:
                            variant === 'primary'
                                ? WHITE
                                : variant === 'outline'
                                    ? GREEN
                                    : GREEN,
                    }}
                >
                    {title}
                </Text>
            )}
        </Pressable>
    );
}
