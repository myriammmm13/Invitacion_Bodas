package una.dto;

import una.logic.EstadoConfirmacion;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class InvitadoResponseDTO {
    private Long id;
    private String nombreCompleto;
    private Boolean tieneAcompanante;
    private String nombreAcompanante;
    private EstadoConfirmacion confirmacionInvitado;
    private EstadoConfirmacion confirmacionAcompanante;
}