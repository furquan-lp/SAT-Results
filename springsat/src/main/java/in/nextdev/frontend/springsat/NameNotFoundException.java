package in.nextdev.frontend.springsat;

public class NameNotFoundException extends RuntimeException {
    public NameNotFoundException(String name) {
        super("Could not find candiate by name " + name);
    }
}
