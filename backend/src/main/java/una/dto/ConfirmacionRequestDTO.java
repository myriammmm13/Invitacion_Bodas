package una.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ConfirmacionRequestDTO {
    private Boolean asisteInvitado;
    private Boolean asisteAcompanante;
    private String mensaje;
}