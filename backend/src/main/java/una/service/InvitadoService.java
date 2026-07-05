package una.service;

import una.dto.ConfirmacionRequestDTO;
import una.dto.InvitadoResponseDTO;
import java.util.List;

public interface InvitadoService {
    List<InvitadoResponseDTO> buscarPorNombre(String nombre);
    InvitadoResponseDTO confirmar(Long id, ConfirmacionRequestDTO request);
}