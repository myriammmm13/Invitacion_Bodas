package una.invitacion_boda.presentation.api;

import una.invitacion_boda.logic.ConfiguracionEvento;
import una.invitacion_boda.service.ConfiguracionEventoService;
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