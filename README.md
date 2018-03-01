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

1. Start the bundler: `yarn start`
2. Run a simulator: `yarn ios` or `yarn android`

In development mode, this app communicates with the staging API server `https://em-casa-backend-staging.herokuapp.com` by default.
Optionally, to use a local instance of the backend server:

3. Download and run [em-casa/backend](https://github.com/em-casa/backend)
4. Find your external ip address by running `curl ipinfo.io/ip`
5. `export REACT_NATIVE_API_CLIENT=https://{your-external-ip}:4000`
6. Restart the bundler

## Contribute

Feel free to open issues and PRs.

At the moment, we're tracking tasks at https://www.pivotaltracker.com/n/projects/2125081

---

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).
