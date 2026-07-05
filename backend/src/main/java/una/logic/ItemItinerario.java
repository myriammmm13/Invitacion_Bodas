package una.logic;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalTime;

@Entity
@Table(name = "itinerario")
@Getter
@Setter
public class ItemItinerario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalTime hora;

    @Column(nullable = false)
    private String actividad;

    private String zona;

    @Column(nullable = false)
    private Integer orden;
}