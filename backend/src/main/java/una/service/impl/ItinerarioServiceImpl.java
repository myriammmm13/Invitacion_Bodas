package una.service.impl;

import una.data.ItinerarioRepository;
import una.logic.ItemItinerario;
import una.service.ItinerarioService;
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