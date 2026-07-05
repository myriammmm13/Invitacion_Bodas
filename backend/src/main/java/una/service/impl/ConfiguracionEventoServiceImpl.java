package una.invitacion_boda.service.impl;

import una.invitacion_boda.data.ConfiguracionEventoRepository;
import una.invitacion_boda.logic.ConfiguracionEvento;
import una.invitacion_boda.service.ConfiguracionEventoService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ConfiguracionEventoServiceImpl implements ConfiguracionEventoService {

    private final ConfiguracionEventoRepository repository;

    public ConfiguracionEventoServiceImpl(ConfiguracionEventoRepository repository) {
        this.repository = repository;
    }

    @Override
    public ConfiguracionEvento obtener() {
        return repository.findById(1)
                .orElseThrow(() -> new EntityNotFoundException("Configuración del evento no encontrada"));
    }
}