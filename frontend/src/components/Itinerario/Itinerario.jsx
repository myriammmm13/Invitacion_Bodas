import { useEffect, useState } from 'react';
import client from '../../api/client';
import OrnamentoHoja from '../OrnamentoHoja';
import './Itinerario.css';

function formatearHora([h, m]) {
    const periodo = h >= 12 ? 'pm' : 'am';
    const hora12 = h % 12 === 0 ? 12 : h % 12;
    return `${hora12}:${String(m).padStart(2, '0')}${periodo}`;
}

export default function Itinerario() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        client.get('/api/itinerario').then(res => setItems(res.data));
    }, []);

    return (
        <section className="tarjeta-seccion tarjeta-seccion--oscura">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="tarjeta-titulo">Itinerario</p>

            <div className="itinerario-lista">
                {items.map(item => (
                    <div key={item.id} className="itinerario-item">
                        <p className="itinerario-hora">{formatearHora(item.hora)}</p>
                        <p className="itinerario-actividad">{item.actividad}</p>
                        {item.zona && <p className="itinerario-zona">{item.zona}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}