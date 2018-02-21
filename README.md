[![Build Status](https://travis-ci.org/rodrigowirth/supertest-prefix.svg?branch=master)](https://travis-ci.org/rodrigowirth/supertest-prefix)

# Supertest Prefix
An extension to supertest which adds a prefix to the routes

## Usage
```javascript
import request from 'supertest';
import supertestPrefix from 'supertest-prefix';

// Creates the prefix
const prefix = supertestPrefix('/api');

// Uses the prefix
await request
  .get('/cars') // Becomes /api/cars
  .use(prefix)
  .expect(200);

await request
  .get('http://localhost:3000/cars') // Becomes http://localhost:3000/api/cars
  .use(prefix)
  .expect(200);
```

## Using with npm 'superagent-defaults'
https://www.npmjs.com/package/superagent-defaults
```javascript
import supertest from 'supertest';
import defaults from 'superagent-defaults';
import supertestPrefix from 'supertest-prefix';

// Creates the prefix
const prefix = supertestPrefix('/api');

// Create a defaults context
var request = defaults();

// Setup prefix as a default config
request
  .use(prefix);

// Use supertest like you always have; the prefix will be applied to each request automatically
await request
  .get('/cars')
  .expect(200);
```

## Contributors
Would you like to contribute to this library? Don't be shy! [Contact me](mailto:rodrigowirth90@gmail.com) if you are interested on it.
