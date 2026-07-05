package una.data;

import una.logic.Invitado;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InvitadoRepository extends JpaRepository<Invitado, Long> {
    List<Invitado> findByNombreCompletoContainingIgnoreCase(String nombre);
}