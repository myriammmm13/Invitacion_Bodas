import { useRef, useState } from 'react';
import './Portada.css';

export default function Portada({ nombresNovios = 'Ana & Carlos', cancionUrl, children }) {
    const audioRef = useRef(null);
    const [abriendo, setAbriendo] = useState(false);
    const [abierta, setAbierta] = useState(false);

    const abrirInvitacion = () => {
        if (abriendo || abierta) return;
        setAbriendo(true);

        if (audioRef.current) {
            audioRef.current.play().catch(() => {});
        }

        setTimeout(() => setAbierta(true), 1400);
    };

    return (
        <>
            {cancionUrl && <audio ref={audioRef} src={cancionUrl} loop />}

            {abierta ? (
                <div className="invitacion-scroll">{children}</div>
            ) : (
                <div className="portada-envoltorio">
                    <div className="portada-ornamento portada-ornamento--arriba" aria-hidden="true" />
                    <div className="portada-ornamento portada-ornamento--abajo" aria-hidden="true" />

                    <button
                        className={`sobre ${abriendo ? 'sobre--abriendo' : ''}`}
                        onClick={abrirInvitacion}
                        aria-label="Abrir invitación de boda"
                    >
                        <div className="sobre-cuerpo">
                            <div className="sobre-solapa" />
                            <div className="sobre-sello">
                                {nombresNovios
                                    .split('&')
                                    .map(n => n.trim()[0])
                                    .join('')}
                            </div>

                            <div className="carta">
                                <p className="carta-script">Te invitamos</p>
                                <p className="carta-titulo">a nuestra boda</p>
                                {!abriendo && <p className="carta-cta">toca para abrir</p>}
                            </div>
                        </div>
                    </button>
                </div>
            )}
        </>
    );
}