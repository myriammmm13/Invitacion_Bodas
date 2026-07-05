package una.invitacion_boda.service.impl;

import una.invitacion_boda.data.ItinerarioRepository;
import una.invitacion_boda.logic.ItemItinerario;
import una.invitacion_boda.service.ItinerarioService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItinerarioServiceImpl implements ItinerarioService {

    private final ItinerarioRepository repository;

    public ItinerarioServiceImpl(ItinerarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<ItemItinerario> listarOrdenado() {
        return repository.findAllByOrderByOrdenAsc();
    }
}