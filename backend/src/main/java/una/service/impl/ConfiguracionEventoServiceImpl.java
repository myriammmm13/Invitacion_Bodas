package una.service.impl;

import una.data.ConfiguracionEventoRepository;
import una.logic.ConfiguracionEvento;
import una.service.ConfiguracionEventoService;
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
        return repository.findById((byte) 1)
                .orElseThrow(() -> new EntityNotFoundException("Configuración del evento no encontrada"));
    }
}