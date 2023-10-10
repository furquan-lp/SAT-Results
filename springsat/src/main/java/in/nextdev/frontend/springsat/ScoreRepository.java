package in.nextdev.frontend.springsat;

import org.springframework.data.jpa.repository.JpaRepository;


interface ScoreRepository extends JpaRepository<SatResult, Long>{
    
}
