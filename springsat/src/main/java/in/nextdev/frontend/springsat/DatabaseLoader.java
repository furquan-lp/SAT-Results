package in.nextdev.frontend.springsat;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseLoader {
  private static final Logger log = LoggerFactory.getLogger(DatabaseLoader.class);
  private static final String STUDENTS_CSV = """
      "Anjali Singh","B-2, Sector-3","Noida",92,201301
      "Rajesh Kumar","C-4, Sector-5","Ghaziabad",78,201005
      "Shivani Gupta","D-1, Sector-7","Noida",85,201301
      "Vikas Sharma","E-2, Sector-8","Ghaziabad",67,201005
      "Rashmi Singh","F-3, Sector-9","Noida",91,201301
      "Rahul Verma","G-4, Sector-10","Ghaziabad",72,201005
      "Kavita Singh","H-5, Sector-11","Noida",89,201301
      "Ankit Gupta","I-6, Sector-12","Ghaziabad",80,201005
      "Shalini Singh","J-7, Sector-13","Noida",93,201301
      "Amit Kumar","K-8, Sector-14","Ghaziabad",75,201005
      "Ritu Gupta","L-9, Sector-15","Noida",87,201301
      "Vivek Singh","M-10, Sector-16","Ghaziabad",68,201005
      "Sneha Sharma","N-11, Sector-17","Noida",90,201301
      "Alok Kumar","O-12, Sector-18","Ghaziabad",73,201005
      "Pooja Singh","P-13, Sector-19","Noida",88,201301
      "Saurabh Gupta","Q-14, Sector-20","Ghaziabad",79,201005
      "Anjali Singh","R-15, Sector-21","Noida",94,201301
      "Rajesh Kumar","S-16, Sector-22","Ghaziabad",77,201005
      "Shivani Gupta","T-17, Sector-23","Noida",86,201301
      "Vikas Sharma","U-18, Sector-24","Ghaziabad",66,201005
      "Rashmi Singh","V-19, Sector-25","Noida",95,201301
      "Rahul Verma","W-20, Sector-26","Ghaziabad",71,201005
      "Kavita Singh","X-21, Sector-27","Noida",84,201301
      "Ankit Gupta","Y-22,Sector 28A ","Ghaziabad",81,201005
      "Sneha Sharma ","Z -23,Sector 29 ","Noida ",89,201301
      """;

  @Bean
  CommandLineRunner initDatabase(ScoreRepository repository) {
    return args -> {
      log.info("Preloading " + repository.save(new SatResult("Syed Ahmad", "Ashok Rajpath", "Patna",
          "India", 23, 800004)));
      log.info("Preloading "
          + repository.save(new SatResult("John Doe", "Nowhere Street", "The City", "NewLand",
              73, 80085)));
      log.info("Preloading " + repository.save(new SatResult("Jane Doe", "Shinjuku Street", "Tokyo",
          "Japan", 82, 1000001)));
    };
  }
}
