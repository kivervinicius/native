# Real Estate Mobile Client

## Install

1. Clone this repository

```sh
git clone https://github.com/em-casa/native.git
cd native
```

2. Install dependencies

```sh
yarn install
```

## Run

To run and develop the app locally:

1. Download the [Expo](https://expo.io/) client on your mobile device
2. Run `yarn start`
3. Scan the QR code with the Expo client

In development mode, this app communicates with the staging API server `https://em-casa-backend-staging.herokuapp.com` by default.
Optionally, to use a local instance of the backend server:

4. Download and run [em-casa/backend](https://github.com/em-casa/backend)
5. Find your external ip address by running `curl ipinfo.io/ip`
6. `export REACT_NATIVE_API_CLIENT=https://{your-external-ip}:4000`
7. Restart the app

## Contribute

Feel free to open issues and PRs.

At the moment, we're tracking tasks at https://www.pivotaltracker.com/n/projects/2125081

---

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
