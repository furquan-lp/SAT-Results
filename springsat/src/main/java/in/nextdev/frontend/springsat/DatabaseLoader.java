package in.nextdev.frontend.springsat;

import java.io.IOException;
import java.io.StringReader;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.opencsv.CSVReader;

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
      "Vikas Verma","U-18, Sector-24","Ghaziabad",66,201005
      "Rashmi Kumar","V-19, Sector-25","Noida",95,201301
      "Rahul Raj","W-20, Sector-26","Ghaziabad",71,201005
      "Kavita Sharma","X-21, Sector-27","Noida",84,201301
      "Ankit Mandal","Y-22,Sector 28A ","Ghaziabad",81,201005
      "Sneha Kumari ","Z -23,Sector 29 ","Noida ",89,201301
      """;

  @Bean
  CommandLineRunner initDatabase(ScoreRepository repository) {
    try (CSVReader reader = new CSVReader(new StringReader(STUDENTS_CSV))) {
      try {
        List<String[]> lines = reader.readAll();
        return args -> {
          log.info("Preloading " + repository.save(new SatResult("Syed Ahmad", "Ashok Rajpath", "Patna",
              "India", 23, 800004)));
          log.info("Preloading "
              + repository.save(new SatResult("John Doe", "Nowhere Street", "The City", "NewLand",
                  73, 80085)));
          log.info("Preloading " + repository.save(new SatResult("Jane Doe", "Shinjuku Street", "Tokyo",
              "Japan", 82, 1000001)));
          if (lines != null) {
            for (String[] l : lines) {
              log.info("Preloading CSV value " + repository.save(new SatResult(l[0], l[1], l[2], "India",
                  Integer.parseInt(l[3]), Long.parseLong(l[4]))));
            }
          }
        };
      } catch (IOException ioe) {
        System.err.println("IOException occurred while reading from the Students CSV,");
        ioe.printStackTrace(System.err);
      }
    } catch (IOException ioe) {
      ioe.printStackTrace(System.err);
    }
    return null;
  }
}
