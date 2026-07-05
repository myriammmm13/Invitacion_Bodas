package com.boda.api.invitado;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "invitados")
@Getter
@Setter
public class Invitado {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre_completo", nullable = false, length = 150)
    private String nombreCompleto;

    @Column(name = "tiene_acompanante", nullable = false)
    private Boolean tieneAcompanante = false;

    @Column(name = "nombre_acompanante", length = 150)
    private String nombreAcompanante;

    @Enumerated(EnumType.STRING)
    @Column(name = "confirmacion_invitado", nullable = false)
    private EstadoConfirmacion confirmacionInvitado = EstadoConfirmacion.pendiente;

    @Enumerated(EnumType.STRING)
    @Column(name = "confirmacion_acompanante")
    private EstadoConfirmacion confirmacionAcompanante;

    @Column(name = "mensaje_felicitacion", columnDefinition = "TEXT")
    private String mensajeFelicitacion;

    @Column(name = "fecha_confirmacion")
    private LocalDateTime fechaConfirmacion;

    @Column(name = "creado_en", insertable = false, updatable = false)
    private LocalDateTime creadoEn;
}