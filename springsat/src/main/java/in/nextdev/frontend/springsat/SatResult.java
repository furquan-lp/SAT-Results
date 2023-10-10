package in.nextdev.frontend.springsat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class SatResult {
    private @Id @GeneratedValue Long id;
    private String name, address, city, country;
    private int score;
    private long pincode;

    public SatResult() {}

    public SatResult(String name, String address, String city, String country, int score, long pincode) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.country = country;
        this.score = score;
        this.pincode = pincode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public long getPincode() {
        return pincode;
    }

    public void setPincode(long pincode) {
        this.pincode = pincode;
    }

    public boolean getPassed() {
        return score > 30;
    }

    @Override
    public String toString() {
        return String.format("Result{id=%d, name=\'%s\', address=\'%s\', city=\'%s\', country=\'%s\', score=%d, pincode=%d, passed=%b}",
        id, name, address, city, country, score, pincode, getPassed());
    }
}
