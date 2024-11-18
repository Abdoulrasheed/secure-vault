# SecureVault: ASP.NET Core Integration

## Installation

```bash
dotnet add package SecureVault.Core
```

## Configuration

### appsettings.json
```json
{
  "SecureVault": {
    "BotDetection": {
      "Enabled": true,
      "Threshold": 0.85,
      "BlockOnDetection": true
    },
    "DeviceFingerprint": {
      "Enabled": true,
      "LockToDevice": true,
      "MaxDeviceChanges": 2
    },
    "ChallengeResponse": {
      "Enabled": true,
      "KeyRotationInterval": "1h",
      "Algorithm": "RSA-4096"
    }
  }
}
```

## Middleware Registration

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddSecureVault(Configuration.GetSection("SecureVault"));
}

public void Configure(IApplicationBuilder app)
{
    app.UseSecureVault();
}
```

## Controller Protection

```csharp
[SecureEndpoint(BotDetection = true, DeviceLock = true)]
public IActionResult ProtectedAction()
{
    // Secured endpoint logic
}
```

## Client-Side Integration

```csharp
public class SecuredHttpClient
{
    private readonly HttpClient _client;

    public SecuredHttpClient(SecureVaultClient secureVaultClient)
    {
        _client = secureVaultClient.CreateClient();
    }
}
```

## Advanced Security Features

### Custom Bot Detection
```csharp
public class CustomBotDetector : IBotDetector
{
    public async Task<double> AnalyzeAsync(HttpContext context)
    {
        // Implement custom bot detection logic
        return botScore;
    }
}
```

## Logging and Monitoring
```csharp
services.AddLogging(configure => 
{
    configure.AddSecureVaultLogging();
});
```