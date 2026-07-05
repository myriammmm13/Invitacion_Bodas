package una.invitacion_boda.data;

import una.invitacion_boda.logic.Invitado;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface InvitadoRepository extends JpaRepository<Invitado, Long> {
    List<Invitado> findByNombreCompletoContainingIgnoreCase(String nombre);
}