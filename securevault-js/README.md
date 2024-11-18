### Node.js

# Installation
```bash
npm install secure-vault-js
```

## Update Config

```javascript
// config.js
module.exports = {
  securevault: {
    botDetection: true,
    deviceFingerprint: {
      lockToDevice: true
    },
    challengeResponse: {
      keyRotationInterval: '1h'
    }
  }
}
```