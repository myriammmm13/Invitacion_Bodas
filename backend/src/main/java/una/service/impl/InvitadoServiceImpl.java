package una.invitacion_boda.service.impl;

import una.invitacion_boda.data.InvitadoRepository;
import una.invitacion_boda.dto.ConfirmacionRequestDTO;
import una.invitacion_boda.dto.InvitadoResponseDTO;
import una.invitacion_boda.logic.EstadoConfirmacion;
import una.invitacion_boda.logic.Invitado;
import una.invitacion_boda.service.InvitadoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class InvitadoServiceImpl implements InvitadoService {

    private final InvitadoRepository repository;

    public InvitadoServiceImpl(InvitadoRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<InvitadoResponseDTO> buscarPorNombre(String nombre) {
        if (nombre == null || nombre.trim().length() < 3) {
            throw new IllegalArgumentException("Ingresa al menos 3 letras del nombre.");
        }

        return repository.findByNombreCompletoContainingIgnoreCase(nombre.trim())
                .stream()
                .map(this::aResponseDTO)
                .toList();
    }

    @Override
    public InvitadoResponseDTO confirmar(Long id, ConfirmacionRequestDTO request) {
        Invitado invitado = repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Invitado no encontrado"));

        invitado.setConfirmacionInvitado(
                Boolean.TRUE.equals(request.getAsisteInvitado())
                        ? EstadoConfirmacion.asiste
                        : EstadoConfirmacion.no_asiste
        );

        if (Boolean.TRUE.equals(invitado.getTieneAcompanante())) {
            invitado.setConfirmacionAcompanante(
                    Boolean.TRUE.equals(request.getAsisteAcompanante())
                            ? EstadoConfirmacion.asiste
                            : EstadoConfirmacion.no_asiste
            );
        }

        if (request.getMensaje() != null && !request.getMensaje().isBlank()) {
            invitado.setMensajeFelicitacion(request.getMensaje().trim());
        }

        invitado.setFechaConfirmacion(LocalDateTime.now());

        Invitado guardado = repository.save(invitado);
        return aResponseDTO(guardado);
    }

    private InvitadoResponseDTO aResponseDTO(Invitado i) {
        return new InvitadoResponseDTO(
                i.getId(),
                i.getNombreCompleto(),
                i.getTieneAcompanante(),
                i.getNombreAcompanante(),
                i.getConfirmacionInvitado(),
                i.getConfirmacionAcompanante()
        );
    }
}