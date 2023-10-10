package in.nextdev.frontend.springsat;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {
    private final ScoreRepository repo;

    public ScoreController(ScoreRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/results")
    List<SatResult> all() {
        return repo.findAll();
    }

    @PostMapping("/results")
    SatResult newResult(@RequestBody SatResult newResult) {
        return repo.save(newResult);
    }

    @GetMapping("/results/{name}")
    SatResult oneResult(@PathVariable String name) {
        SatResult result = repo.findByName(name);
        if (result == null) {
            throw new NameNotFoundException(name);
        } else {
            return result;
        }
    }
}
