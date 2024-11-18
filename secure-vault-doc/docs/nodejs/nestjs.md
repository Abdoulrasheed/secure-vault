# SecureVault: Nest.js Integration

## Installation
```bash
npm install nestjs-securevault
```

## Module Configuration
```typescript
import { Module } from '@nestjs/common';
import { SecureVaultModule } from 'nestjs-securevault';

@Module({
  imports: [
    SecureVaultModule.register({
      botDetection: {
        enabled: true,
        threshold: 0.85
      },
      deviceFingerprint: {
        lockToDevice: true
      }
    })
  ]
})
export class AppModule {}
```

## Controller Protection
```typescript
import { Controller, Get } from '@nestjs/common';
import { SecureEndpoint } from 'nestjs-securevault';

@Controller()
export class AppController {
  @Get('/protected')
  @SecureEndpoint({
    botDetection: true,
    deviceLock: true
  })
  getProtectedRoute() {
    return { message: 'Secure endpoint' };
  }
}
```