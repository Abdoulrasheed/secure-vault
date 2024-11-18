---
sidebar_position: 2
---

# Django Integration

## Installation

```bash
pip install django-securevault
```

## Configuration

### settings.py
```python
INSTALLED_APPS = [
    ...
    'securevault',
]

SECUREVAULT_CONFIG = {
    'BOT_DETECTION': {
        'ENABLED': True,
        'THRESHOLD': 0.85,
        'BLOCK_ON_DETECTION': True
    },
    'DEVICE_FINGERPRINT': {
        'ENABLED': True,
        'LOCK_TO_DEVICE': True,
        'MAX_DEVICE_CHANGES': 2
    },
    'CHALLENGE_RESPONSE': {
        'ENABLED': True,
        'KEY_ROTATION_INTERVAL': '1h',
        'ALGORITHM': 'RSA-4096'
    }
}
```

## Middleware Integration

```python
# middleware.py
from securevault.middleware import SecureVaultMiddleware

class CustomSecurityMiddleware(SecureVaultMiddleware):
    def process_request(self, request):
        # Additional custom security logic
        pass

# settings.py
MIDDLEWARE = [
    ...
    'securevault.middleware.SecureVaultMiddleware',
]
```

## View Protection

```python
from securevault.decorators import secure_endpoint

class ProtectedView(APIView):
    @secure_endpoint(
        bot_detection=True,
        device_lock=True
    )
    def get(self, request):
        # Protected endpoint logic
        pass
```

## Frontend Integration (Django GraphQL)

```python
# client.py
from securevault.clients import SecureGraphQLClient

client = SecureGraphQLClient(
    endpoint='https://api.yourserver.com/graphql',
    headers={
        'X-Device-Fingerprint': generate_device_fingerprint(),
        'X-Challenge-Response': generate_challenge_response()
    }
)
```

## Advanced Configuration

### Custom Bot Detection
```python
# bot_detection.py
from securevault.detection import BotDetector

class CustomBotDetector(BotDetector):
    def analyze(self, request):
        # Implement custom bot detection logic
        return self.bot_score
```

## Monitoring and Logging

```python
# settings.py
LOGGING = {
    'securevault': {
        'handlers': ['security_log'],
        'level': 'WARNING',
        'propagate': False
    }
}
```

## Compliance Features
- GDPR Compliant
- Configurable Data Handling
- Transparent Security Mechanisms