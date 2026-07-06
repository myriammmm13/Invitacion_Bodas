import useContadorRegresivo from '../hooks/useContadorRegresivo';

export default function Contador({ fechaBoda }) {
    const { dias, horas, minutos } = useContadorRegresivo(fechaBoda);

    return (
        <section className="contador">
            <h2>Faltan</h2>
            <div className="contador-numeros">
                <div><span>{dias}</span><small>días</small></div>
                <div><span>{horas}</span><small>horas</small></div>
                <div><span>{minutos}</span><small>min</small></div>
            </div>
        </section>
    );
}