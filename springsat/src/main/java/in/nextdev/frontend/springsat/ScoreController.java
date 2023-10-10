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
    public static class ScoreBody {
        private int score;
        public ScoreBody() {}
        public ScoreBody(int score) { this.score = score; }
        public int getScore() { return score; }
        public void setScore(int score) { this.score = score; }
    }

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

    @PutMapping("/results/{name}")
    SatResult updateResult(@RequestBody ScoreBody scoreBody, @PathVariable String name) {
        SatResult result = repo.findByName(name);
        if (result == null) {
            throw new NameNotFoundException(name);
        } else {
            return repo.findById(result.getId()).map(satresult -> {
                satresult.setScore(scoreBody.getScore());
                return repo.save(satresult);
            }).orElseThrow(() -> new NameNotFoundException(name));
        }
    }

    @DeleteMapping("/results/{name}")
    void deleteSatResult(@PathVariable String name) {
        repo.deleteById(repo.findByName(name).getId());
    }
}
