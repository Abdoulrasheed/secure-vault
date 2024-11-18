---
sidebar_position: 1
---

# What is SecureVault?

**SecureVault** is an open-source security middleware that provides a comprehensive solution for securing web applications. It seamlessly integrates with existing frameworks and complements security measures like TLS or mTLS to add an additional layer of protection. SecureVault ensures that sensitive data is encrypted end-to-end from the client to the application process.

# Why is it needed?

While traditional tools like TLS or mTLS provide robust encryption at the transport layer (load balancers, proxies, etc.), they do not protect data once it reaches the application process. SecureVault ensures that data remains encrypted at all stages, protecting sensitive information from internal threats and ensuring the security of applications in high-security environments like banking, healthcare, government, etc.

![Picture Shwoing where and how SecureVault operates vs TLS and mTLS](https://raw.githubusercontent.com/Abdoulrasheed/secure-vault/refs/heads/main/secure-vault-doc/static/img/mtls-tls-securevault.png)

# Key Features

- **End-to-End Encryption**: Encrypts data between the client and the application process, ensuring that sensitive data remains protected even after passing through internal infrastructure.
- **Bot Detection**: Detect and prevent malicious bot activity using machine learning-based detection with configurable thresholds.
- **Device Fingerprinting**: Securely associate requests with specific devices using unique device identifiers, with options for device locking.
- **Cryptographic Challenge-Response**: Enhance authentication with a secure challenge-response mechanism that uses public key encryption and automatic key rotation.
- **Cross-Platform Support**: Works with backend frameworks like Django, .NET Core, Express, and frontend interceptors for libraries like Axios, ApiSauce, and the Fetch API.
