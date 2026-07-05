package una.data;

import una.logic.ItemItinerario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ItinerarioRepository extends JpaRepository<ItemItinerario, Long> {
    List<ItemItinerario> findAllByOrderByOrdenAsc();
}