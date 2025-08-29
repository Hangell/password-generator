import { StyleSheet } from 'react-native';

export const rangeStyles = StyleSheet.create({
    container: { width: '100%', gap: 8 },

    headerCentered: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        marginBottom: 4,
    },

    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    label: { fontFamily: 'Glitch', fontSize: 14, opacity: 0.9 },
    separator: { fontSize: 14, opacity: 0.9 },

    badge: {
        fontFamily: 'Glitch',
        fontSize: 18,
        padding: 8,
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
    btnText: { fontSize: 18, fontWeight: '800' },
    scale: { flexDirection: 'row', justifyContent: 'space-between', marginTop: -4 },
    scaleText: { fontSize: 12, opacity: 0.6 },
});
