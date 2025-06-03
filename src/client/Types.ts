export enum AmzTarget {
  InitiateAuth = 'AWSCognitoIdentityProviderService.InitiateAuth',
  AuthChallenge = 'AWSCognitoIdentityProviderService.RespondToAuthChallenge',
  ChangePassword = 'AWSCognitoIdentityProviderService.ChangePassword',
  ForgotPassword = 'AWSCognitoIdentityProviderService.ForgotPassword',
  ConfirmForgotPassword = 'AWSCognitoIdentityProviderService.ConfirmForgotPassword',
}

export enum AuthFlow {
  UserSrpAuth = 'USER_SRP_AUTH',
  RefreshTokenAuth = 'REFRESH_TOKEN',
}

export const ChallengeNameType = {
  SMS_MFA: 'SMS_MFA',
  EMAIL_OTP: 'EMAIL_OTP',
  SOFTWARE_TOKEN_MFA: 'SOFTWARE_TOKEN_MFA',
  SELECT_MFA_TYPE: 'SELECT_MFA_TYPE',
  MFA_SETUP: 'MFA_SETUP',
  PASSWORD_VERIFIER: 'PASSWORD_VERIFIER',
  CUSTOM_CHALLENGE: 'CUSTOM_CHALLENGE',
  SELECT_CHALLENGE: 'SELECT_CHALLENGE',
  DEVICE_SRP_AUTH: 'DEVICE_SRP_AUTH',
  DEVICE_PASSWORD_VERIFIER: 'DEVICE_PASSWORD_VERIFIER',
  ADMIN_NO_SRP_AUTH: 'ADMIN_NO_SRP_AUTH',
  NEW_PASSWORD_REQUIRED: 'NEW_PASSWORD_REQUIRED',
  SMS_OTP: 'SMS_OTP',
  PASSWORD: 'PASSWORD',
  WEB_AUTHN: 'WEB_AUTHN',
  PASSWORD_SRP: 'PASSWORD_SRP',
} as const;

export type ChallengeNameType = (typeof ChallengeNameType)[keyof typeof ChallengeNameType];

export interface InitiateAuthParams {
  USERNAME: string;
  SRP_A: string;
}

export interface RefreshTokenParams {
  REFRESH_TOKEN: string;
  SECRET_HASH?: string;
}

export interface InitiateAuthRequest {
  AuthParameters: InitiateAuthParams | RefreshTokenParams;
  AuthFlow: AuthFlow;
  ClientId: string;
}

export interface PasswordVerifierChallengeParams {
  SALT: string;
  SECRET_BLOCK: string;
  USER_ID_FOR_SRP: string;
  USERNAME: string;
  SRP_B: string;
}

export interface InitiateAuthResponse {
  ChallengeName: string;
  ChallengeParameters: PasswordVerifierChallengeParams;
}

export interface ChallengeResponse {
  USERNAME: string;
}

export interface PasswordVerifierChallengeResponse extends ChallengeResponse {
  TIMESTAMP?: string;
  PASSWORD_CLAIM_SECRET_BLOCK?: string;
  PASSWORD_CLAIM_SIGNATURE?: string;
}

export interface NewPasswordChallengeReponse extends ChallengeResponse {
  NEW_PASSWORD: string;
  SECRET_HASH?: string;
}
export interface MfaChallengeResponse extends ChallengeResponse {
  SMS_MFA_CODE?: string;
  SOFTWARE_TOKEN_MFA_CODE?: string;
}
export interface RespondToAuthChallengeRequest {
  ClientId: string;
  ChallengeName: string;
  ChallengeResponses: ChallengeResponse;
  Session?: string;
}

export interface PasswordVerifierResult {
  Success: boolean;
  NewPasswordRequired: boolean;
  Session?: string;
  AuthenticationResult?: AuthenticationResult;
  MfaSetup?: boolean;
  MfaType?: 'TOTP' | 'SMS';
  ChallengeName?: ChallengeNameType;
  ChallengeParameters?: any;
  Error?: any;
}
export interface AuthenticationResult {
  AccessToken: string;
  IdToken: string;
  RefreshToken: string;
  ExpiresIn: number;
  TokenType: string;
}

export interface ChangePasswordParams {
  AccessToken: string;
  PreviousPassword: string;
  ProposedPassword: string;
}

export interface ChangePasswordResponse {
  StatusCode: number;
  Error?: string;
}

export interface ForgotPasswordParams {
  ClientId: string;
  SecretHash?: string;
  Username: string;
  ClientMetadata?: Record<string, string>;
}

export interface ForgotPasswordResponse {
  CodeDeliveryDetails?: {
    AttributeName: string;
    DeliveryMedium: string;
    Destination: string;
  };
  Error?: {
    __type: string;
    message: string;
  };
}

export interface ConfirmForgotPasswordParams {
  ClientId: string;
  SecretHash?: string;
  Username: string;
  ConfirmationCode: string;
  Password: string;
}

export interface ConfirmForgotPasswordResponse {
  Success: boolean;
  Error?: any;
}
