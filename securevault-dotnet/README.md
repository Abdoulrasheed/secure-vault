### .NET Core

## Installation
```bash
dotnet add package SecureVault.Core
```


## Configure Settings

```csharp
// appsettings.json
{
  "SecureVault": {
    "BotDetection": true,
    "DeviceFingerprint": {
      "LockToDevice": true
    },
    "ChallengeResponse": {
      "KeyRotationInterval": "1h"
    }
  }
}
```
