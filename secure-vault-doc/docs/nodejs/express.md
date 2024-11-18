# SecureVault: Express.js Integration

## Installation

```bash
npm install secure-vault-express
```

## Middleware Configuration

```javascript
const express = require('express');
const { SecureVault } = require('secure-vault-express');

const app = express();

app.use(SecureVault.middleware({
  botDetection: {
    enabled: true,
    threshold: 0.85,
    blockOnDetection: true
  },
  deviceFingerprint: {
    enabled: true,
    lockToDevice: true,
    maxDeviceChanges: 2
  },
  challengeResponse: {
    enabled: true,
    keyRotationInterval: '1h',
    algorithm: 'RSA-4096'
  }
}));
```

## Route Protection

```javascript
app.get('/protected', SecureVault.protect(), (req, res) => {
  // Secured route logic
});
```

## Custom Security Handlers

```javascript
const customBotDetector = async (req) => {
  // Implement advanced bot detection
  return botScore;
};

SecureVault.registerBotDetector(customBotDetector);
```

## Client Configuration

```javascript
const secureAxios = SecureVault.createClient(axiosInstance, {
  deviceFingerprint: true,
  botProtection: true
});
```