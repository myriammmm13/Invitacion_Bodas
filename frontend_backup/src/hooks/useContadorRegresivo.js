import { useState, useEffect } from 'react';

export default function useContadorRegresivo(fechaObjetivo) {
    const [tiempoRestante, setTiempoRestante] = useState({
        dias: 0,
        horas: 0,
        minutos: 0,
    });

    useEffect(() => {
        if (!fechaObjetivo) return;

        const calcular = () => {
            const diferencia = new Date(fechaObjetivo) - new Date();

            if (diferencia <= 0) {
                setTiempoRestante({ dias: 0, horas: 0, minutos: 0 });
                return;
            }

            setTiempoRestante({
                dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
                horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
            });
        };

        calcular(); // primer cálculo inmediato al montar
        const intervalo = setInterval(calcular, 60000); // se actualiza cada minuto

        return () => clearInterval(intervalo);
    }, [fechaObjetivo]);

    return tiempoRestante;
}