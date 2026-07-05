package una.invitacion_boda.service;

import una.invitacion_boda.dto.ConfirmacionRequestDTO;
import una.invitacion_boda.dto.InvitadoResponseDTO;
import java.util.List;

public interface InvitadoService {
    List<InvitadoResponseDTO> buscarPorNombre(String nombre);
    InvitadoResponseDTO confirmar(Long id, ConfirmacionRequestDTO request);
}