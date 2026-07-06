package una.logic;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Table(name = "configuracion_evento")
@Getter
@Setter
public class ConfiguracionEvento {

    @Id
    private Byte id;

    @Column(name = "fecha_hora_boda", nullable = false)
    private LocalDateTime fechaHoraBoda;

    @Column(name = "dress_code", nullable = false)
    private String dressCode;

    @Column(name = "dress_code_descripcion", columnDefinition = "TEXT")
    private String dressCodeDescripcion;

    @Column(name = "texto_invitacion", columnDefinition = "TEXT")
    private String textoInvitacion;

    @Column(name = "autor_frase")
    private String autorFrase;

    @Column(name = "cancion_url")
    private String cancionUrl;

    @Column(name = "direccion_ceremonia")
    private String direccionCeremonia;

    @Column(name = "link_maps_ceremonia")
    private String linkMapsCeremonia;

    @Column(name = "hora_recepcion")
    private LocalTime horaRecepcion;

    @Column(name = "direccion_recepcion")
    private String direccionRecepcion;

    @Column(name = "link_maps_recepcion")
    private String linkMapsRecepcion;

    @Column(name = "link_form_fotos")
    private String linkFormFotos;

    @Column(name = "sinpe")
    private String sinpe;

    @Column(name = "iban")
    private String iban;

    @Column(name = "dress_code_mujeres", columnDefinition = "TEXT")
    private String dressCodeMujeres;

    @Column(name = "dress_code_hombres", columnDefinition = "TEXT")
    private String dressCodeHombres;
}