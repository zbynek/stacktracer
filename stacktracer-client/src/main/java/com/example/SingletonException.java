package com.example;

class SingletonException extends Exception {
    public static final SingletonException INSTANCE = new SingletonException();

    private SingletonException() {
        super("singleton", null, true, false);
    }
}
