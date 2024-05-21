package com.example;

public class Ephemeral {

    private final double index;

    public Ephemeral(int index) {
        this.index = index;
    }

    @Override
    public String toString() {
        return "Ephemeral " + index;
    }

    public void checkEven() throws Exception {
        if (index % 2 == 1) {
            throw SingletonException.INSTANCE;
        }
    }

}
