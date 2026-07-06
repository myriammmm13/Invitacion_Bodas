import { useRef, useState } from 'react';

export default function Portada({ cancionUrl, children }) {
    const audioRef = useRef(null);
    const [abierta, setAbierta] = useState(false);

    const abrirInvitacion = () => {
        setAbierta(true);
        if (audioRef.current) {
            audioRef.current.play().catch(() => {
                // Algunos navegadores pueden bloquear igual; se ignora el error silenciosamente
            });
        }
    };

    return (
        <div className="portada">
            {cancionUrl && <audio ref={audioRef} src={cancionUrl} loop />}

            {!abierta ? (
                <button className="btn-abrir-invitacion" onClick={abrirInvitacion}>
                    Abrir invitación 💌
                </button>
            ) : (
                children
            )}
        </div>
    );
}