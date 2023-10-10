package in.nextdev.frontend.springsat;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


interface ScoreRepository extends JpaRepository<SatResult, Long>{

    @Query(value = "SELECT * FROM satresult WHERE name=?", nativeQuery = true)
    SatResult findByName(String name);
}
