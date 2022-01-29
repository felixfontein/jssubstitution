# Substitution Cipher Workbench
[![CI](https://github.com/felixfontein/jssubstitution/workflows/Test%20Angular%20app/badge.svg?event=push)](https://github.com/felixfontein/jssubstitution/actions)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## URL parameters

* `?lang=de`, `?lang=en`: select language
* `?header=off`: disable header
* `?kiosk=on`: enable kiosk mode; implies `?header=off`
* `?mode=coding`: instead of substitution, allow to decode something
* `?mode=caesar`: instead of substitution, allow to decrypt Caesar-3
* `?mode=rot13`: instead of substitution, allow to encrypt/decrypt ROT-13
* `?mode=vigenere`: instead of substitution, allow to decrypt Vigenère

## License

GNU General Public License v3.0 or later.

See [LICENSE.txt](./LICENSE.txt) to see the full text.
