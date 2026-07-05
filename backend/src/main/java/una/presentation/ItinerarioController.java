package una.presentation;

import una.logic.ItemItinerario;
import una.service.ItinerarioService;
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