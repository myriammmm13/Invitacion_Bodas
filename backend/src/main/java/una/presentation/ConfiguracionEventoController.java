package una.presentation;

import una.logic.ConfiguracionEvento;
import una.service.ConfiguracionEventoService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/evento")
public class ConfiguracionEventoController {

    private final ConfiguracionEventoService service;

    public ConfiguracionEventoController(ConfiguracionEventoService service) {
        this.service = service;
    }

    @GetMapping
    public ConfiguracionEvento obtener() {
        return service.obtener();
    }
}