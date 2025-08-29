---
id: mfa-guide
title: Adding Multi-Factor Authentication (MFA)
sidebar_position: 2
---

# 🔐 Adding Multi-Factor Authentication (MFA)

Multi-Factor Authentication (MFA) adds an extra layer of security by requiring users to provide a second factor (like a code sent to their phone) in addition to their password.  

Protekt makes MFA simple and accessible with **just a few lines of code**.  

---

## Step 1: Enable MFA in Your Dashboard
1. Log in to your [Protekt Dashboard](https://dashboard.protekt.io).  
2. Navigate to **Authentication Settings**.  
3. Toggle **Enable MFA**.  
4. Choose your MFA methods (SMS, Email, Authenticator App).  

---

## Step 2: Add MFA to Your Login Flow

### Example: JavaScript (React)

```javascript
import { ProtektAuth } from "@protekt/auth";

const auth = new ProtektAuth({
  clientId: "YOUR_CLIENT_ID",
  domain: "YOUR_DOMAIN"
});

// Login with MFA
auth.loginWithMFA({
  username: "user@example.com",
  password: "securePassword123"
}).then(user => {
  console.log("User logged in with MFA:", user);
}).catch(error => {
  console.error("Login failed:", error);
});
