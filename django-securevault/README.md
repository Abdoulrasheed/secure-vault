### Django (Python)

## Installation

```bash
pip install django-securevault
```

## Configure Settings
```python
# settings.py
SECUREVAULT = {
    'BOT_DETECTION': True,
    'DEVICE_FINGERPRINT': {
        'LOCK_TO_DEVICE': True
    },
    'CHALLENGE_RESPONSE': {
        'KEY_ROTATION_INTERVAL': '1h'
    }
}
```
