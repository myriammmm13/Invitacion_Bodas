package una.invitacion_boda.presentation.api;

import una.invitacion_boda.logic.ItemItinerario;
import una.invitacion_boda.service.ItinerarioService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/itinerario")
public class ItinerarioController {

    private final ItinerarioService service;

    public ItinerarioController(ItinerarioService service) {
        this.service = service;
    }

    @GetMapping
    public List<ItemItinerario> listar() {
        return service.listarOrdenado();
    }
}