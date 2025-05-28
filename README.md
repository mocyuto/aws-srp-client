# AWS SRP Client

A lightweight TypeScript/JavaScript client library for AWS Cognito Secure Remote Password (SRP) authentication. This package provides a simple interface to authenticate users with AWS Cognito User Pools using the SRP protocol.

## Installation

```bash
npm install @mocyuto/aws-srp-client
```

## Usage

```js
import { AwsSrpClient } from '@mocyuto/aws-srp-client';

const client = new AwsSrpClient('region', 'poolId', 'clientId');
const result = await client.AuthenticateUser('username', 'password');
if (result.Success) {
    const tokens = result.AuthenticationResult;
    //
} else {
    //
}
```
