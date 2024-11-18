---
sidebar_position: 2
---

# Axios Interceptor

## Installation

```bash
npm install secure-vault-axios
```

## Basic Configuration

```javascript
import axios from 'axios';
import SecureVault from 'secure-vault-axios';

const securedAxios = SecureVault.create({
  baseURL: 'https://api.example.com',
  securityOptions: {
    botDetection: true,
    deviceFingerprint: {
      enabled: true,
      lockToDevice: true
    },
    challengeResponse: {
      enabled: true
    }
  }
});
```

## Advanced Interceptor Usage

```javascript
// Add custom security headers
securedAxios.interceptors.request.use(config => {
  config.headers['X-Device-Fingerprint'] = generateFingerprint();
  return config;
});
```

## Error Handling

```javascript
securedAxios.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 403) {
      // Handle security block
      handleSecurityViolation(error);
    }
    return Promise.reject(error);
  }
);
```