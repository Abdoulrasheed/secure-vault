# SecureVault: Koa Integration

## Installation
```bash
npm install koa-securevault
```

## Middleware Configuration
```javascript
const Koa = require('koa');
const { SecureVault } = require('koa-securevault');

const app = new Koa();

app.use(SecureVault({
  botDetection: {
    enabled: true,
    threshold: 0.85
  },
  deviceFingerprint: {
    lockToDevice: true
  }
}));

app.use(async (ctx, next) => {
  if (ctx.state.secureVault.isSecure) {
    // Process secure request
    await next();
  } else {
    ctx.status = 403;
    ctx.body = { error: 'Security check failed' };
  }
});
```