# SecureVault: FastAPI Integration

## Installation
```bash
pip install fastapi-securevault
```

## Configuration
```python
from fastapi import FastAPI
from securevault.fastapi import SecureVaultMiddleware

app = FastAPI()

# Configure security middleware
app.add_middleware(SecureVaultMiddleware, 
    config={
        "bot_detection": {
            "enabled": True,
            "threshold": 0.85
        },
        "device_fingerprint": {
            "lock_to_device": True
        }
    }
)
```

## Endpoint Protection
```python
from securevault.decorators import secure_endpoint

@app.get("/protected")
@secure_endpoint(
    bot_detection=True, 
    device_lock=True
)
async def protected_route():
    return {"message": "Secure endpoint"}
```