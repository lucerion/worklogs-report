# Worklogs report

Worklogs report generator


## Setup

### Locally

* Install dependencies: `yarn install`
* Prepare fields file: `yarn setup`
* Edit `fields.json`
* Run application: `yarn start`
* Open [http://localhost:8080](http://localhost:8080) in your browser.

### Docker

* [Install Docker](https://docs.docker.com/get-docker/) on your machine.
* Build image: `docker build -t worklogs-report .`
* Run application: `docker run -p 8080:8080 worklogs-report`
* Open [http://localhost:8000](http://localhost:8080) in your browser.

## License

[BSD-3-Clause](LICENSE)
