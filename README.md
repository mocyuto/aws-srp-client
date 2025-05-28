# AWS SRP Client

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
