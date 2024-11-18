# SecureVault: GraphQL Clients Integration

## Installation
```bash
npm install securevault-graphql
```

## Apollo Client Configuration
```javascript
import { SecureVaultLink } from 'securevault-graphql';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const secureVaultLink = new SecureVaultLink({
  botDetection: true,
  deviceFingerprint: {
    enabled: true,
    lockToDevice: true
  }
});

const client = new ApolloClient({
  link: secureVaultLink,
  cache: new InMemoryCache()
});
```

## Relay Modern Integration
```javascript
import { SecureVaultNetwork } from 'securevault-graphql';

const network = SecureVaultNetwork.create({
  fetchQuery: async (operation, variables) => {
    return await securedFetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text,
        variables
      })
    });
  },
  securityOptions: {
    challengeResponse: {
      enabled: true
    }
  }
});
```