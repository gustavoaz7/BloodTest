# BloodTest

## Setup

1. Install [Docker](https://docs.docker.com/install/) if you haven't already

2. Run the following command *(this is necessary to consume the API)*
```sh
docker-compose up
```

3. Clone this repository
```sh
git@github.com:gustavoaz7/BloodTest.git
```

4. Install dependencies
```sh
yarn
# or npm i
```

5. Create a `.env` file in the project root directory and place you current IP address in a `IP_ADDRESS` variable.
```sh
IP_ADDRESS=XXX.XXX.X.XX
```

6. Run the app
```sh
yarn start
# or npm start
```

## Stack
- Expo
- React-Native
- React-Navigation
- Redux & Redux-Thunk & Redux-Promise-Middleware
- Reselect
- Styled-Components

### Dev Stack
- Jest
- Enzyme
- Redux-Mock-Store
- ESLint
- Prettier

