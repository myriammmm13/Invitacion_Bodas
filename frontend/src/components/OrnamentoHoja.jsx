export default function OrnamentoHoja({ posicion = 'sup-izq', color = '#8FA888' }) {
    return (
        <svg
            className={`ornamento-hoja ornamento-hoja--${posicion}`}
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 10 Q 40 5, 55 30 Q 65 55, 45 70 Q 25 60, 15 40 Q 8 25, 10 10 Z"
                fill={color}
                opacity="0.5"
            />
            <path
                d="M15 15 Q 45 20, 50 45 Q 52 65, 30 68 Q 15 55, 12 35 Q 10 22, 15 15 Z"
                fill={color}
                opacity="0.8"
            />
            <path d="M12 12 L 48 48" stroke={color} strokeWidth="1.5" opacity="0.6" />
        </svg>
    );
}