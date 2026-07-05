package una.presentation;

import una.dto.ConfirmacionRequestDTO;
import una.dto.InvitadoResponseDTO;
import una.service.InvitadoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/invitados")
public class InvitadoController {

    private final InvitadoService service;

    public InvitadoController(InvitadoService service) {
        this.service = service;
    }

    @GetMapping("/buscar")
    public List<InvitadoResponseDTO> buscar(@RequestParam String nombre) {
        return service.buscarPorNombre(nombre);
    }

    @PutMapping("/{id}/confirmar")
    public InvitadoResponseDTO confirmar(
            @PathVariable Long id,
            @RequestBody ConfirmacionRequestDTO request) {
        return service.confirmar(id, request);
    }
}