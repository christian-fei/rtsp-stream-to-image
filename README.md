# RTSP Camera Stream to Image

This is a Node.js service that provides a simple HTTP endpoint for capturing a single snapshot from an RTSP camera feed using FFmpeg and serving it as a JPEG image. The service is designed to be lightweight and easy to deploy in a Docker container or on a serverless platform.

## Usage

To run the service locally, follow these steps:

- Install Node.js and FFmpeg on your system.
- Clone this repository and navigate to the project directory.
- Install the dependencies with `npm instal`

Configure the RTSP camera feed URL in a `.npmrc` file (using `rtsp_url`) or using the env variable `RTSP_URL` (e.g. when using docker).

e.g. 'rtsp://username:password@ipaddress/stream'

Run the service using npm:

```
npm start
```

This will start the service on port 8000 by default.

To get a snapshot from the RTSP camera feed, make a HTTP GET request to the service endpoint (best using your browser):

Visit http://localhost:8000

The service will capture a single frame from the camera feed and return it as a JPEG image in the HTTP response body.

## Running with docker

To run the service in a Docker container, follow these steps:

Install Docker on your system.

Build the Docker image using the provided Dockerfile:

```
docker build -t rtsp-snapshot-service .
```

Run the Docker container using the built image:

```
docker run -e RTSP_URL=xyz --network host -p 8000:8000 rtsp-snapshot-service
```

This will start the service in a Docker container and map port 8000 on the host system to port 8000 in the container. You can now access the service by navigating to http://localhost:8000 in your web browser or making GET requests using command line utilities like curl or wget.

