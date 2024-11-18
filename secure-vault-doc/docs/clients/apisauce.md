# SecureVault: ApiSauce Integration

## Installation
```bash
npm install securevault-apisauce
```

## Configuration
```javascript
import { create } from 'apisauce';
import { SecureVault } from 'securevault-apisauce';

const api = create({
  baseURL: 'https://api.example.com'
});

const securedApi = SecureVault.wrap(api, {
  botDetection: true,
  deviceFingerprint: {
    enabled: true,
    lockToDevice: true
  },
  challengeResponse: {
    enabled: true
  }
});

// Use like normal ApiSauce
securedApi.get('/protected')
  .then(response => {
    // Secured response handling
  });
```