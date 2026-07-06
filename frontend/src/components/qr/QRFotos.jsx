import { QRCodeSVG } from 'qrcode.react';
import OrnamentoHoja from '../OrnamentoHoja';
import './QRFotos.css';

export default function QRFotos({ linkForm }) {
    return (
        <section className="tarjeta-seccion tarjeta-seccion--clara">
            <OrnamentoHoja posicion="sup-izq" color="#8FA888" />
            <OrnamentoHoja posicion="inf-der" color="#8FA888" />

            <p className="tarjeta-titulo">Comparte tus fotos</p>
            <p className="qr-texto">
                Nos gustaría que el día de la boda compartas las fotos que tomes con
                nosotros. Puedes hacerlo escaneando este código.
            </p>

            {linkForm && (
                <div className="qr-caja">
                    <QRCodeSVG value={linkForm} size={180} />
                </div>
            )}
        </section>
    );
}