package in.nextdev.frontend.springsat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseLoader {

    private static final Logger log = LoggerFactory.getLogger(DatabaseLoader.class);
    
    @Bean
    CommandLineRunner initDatabase(ScoreRepository repository) {

    return args -> {
      log.info("Preloading " + repository.save(new SatResult("John Doe", "Nowhere Street", "The City", "NewLand", 73, 80085)));
      log.info("Preloading " + repository.save(new SatResult("Jane Doe", "Shinjuku Street", "Tokyo", "Japan", 82, 1000001)));
    };
  }
}
