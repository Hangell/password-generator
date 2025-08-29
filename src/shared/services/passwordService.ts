export default class PasswordGenerator {
    static generate(length?: number): string {
        const LOWER   = 'abcdefghijklmnopqrstuvwxyz';
        const UPPER   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const DIGITS  = '0123456789';
        const SYMBOLS = '@$!%*?&#^+-_=<>';

        const POOL = LOWER + UPPER + DIGITS + SYMBOLS;

        const len = PasswordGenerator._normalizeLength(length);

        // Garante pelo menos 1 de cada categoria
        const chars: string[] = [
            PasswordGenerator._pick(LOWER),
            PasswordGenerator._pick(UPPER),
            PasswordGenerator._pick(DIGITS),
            PasswordGenerator._pick(SYMBOLS),
        ];

        for (let i = chars.length; i < len; i++) {
            chars.push(PasswordGenerator._pick(POOL));
        }

        PasswordGenerator._shuffle(chars);

        return chars.join('');
    }
    static readonly MIN = 4;
    static readonly MAX = 32;

    private static _normalizeLength(length?: number): number {
        if (typeof length !== 'number' || Number.isNaN(length)) {
            return 8 + PasswordGenerator._randInt(9); // ou use MIN/MAX se preferir
        }
        return Math.max(PasswordGenerator.MIN, Math.min(PasswordGenerator.MAX, Math.floor(length)));
    }

    private static _pick(source: string): string {
        const idx = PasswordGenerator._randInt(source.length);
        return source.charAt(idx);
    }

    private static _randInt(max: number): number {
        const crypto = (globalThis as any).crypto;
        if (crypto && typeof crypto.getRandomValues === 'function') {
            const buf = new Uint32Array(1);
            crypto.getRandomValues(buf);
            return buf[0] % max;
        }
        return Math.floor(Math.random() * max);
    }

    private static _shuffle<T>(arr: T[]): void {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = PasswordGenerator._randInt(i + 1);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
}
