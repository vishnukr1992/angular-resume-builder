# ResumeBuilder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.
and application to learn angular framework

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## RUNNING IN IDE AND TEST IN CONSOLE**
`note: To setting up the code base for console testing we have to change few files in the code first`

+ Step 1
    - Change the following file with the properties
       ```java
         public static final Boolean IS_SECURE_CONNECTION=false;
         public static final boolean IS_RASPBERRY_DEVICE=false;
         public static final Boolean IS_PROXY_ENABLE=false;
         public static Boolean IS_WATCHDOG_AVAILABLE=false;
+ Step 2
    - Go to `MTicketApplication.java` and modify the `openScanner()` method as showing below. This will helps to read texts from console.
        ```java
        private static void openScanner() {
               readScanner();
               /*if (Objects.isNull(serialPort) || !serialPort.isOpened())
              readQR();
             sendSignalToScanner();*/
        }
