export interface ILabel {
  key: string
  value: string
}

export interface ILiteralEnvironmentSetting {
  key: string
  value: string
}

export interface IConfigMapEnvironmentSetting {
  from: 'configMapKeyRef'
  key: string
  value: string
}

export interface ISecretEnvironmentSetting {
  from: 'secretKeyRef'
  key: string
  value: string
}

export type IEnvironmentSetting =
  | ILiteralEnvironmentSetting
  | IConfigMapEnvironmentSetting
  | ISecretEnvironmentSetting

export interface IDeployment {
  name: string
  labels: ILabel[]
  replicas: number
  image: string
  port: number
  env: IEnvironmentSetting[]
}

export interface INamespace {
  name: string
}

export interface IService {
  name: string
  deployment: IDeployment
  port: number
  protocol: 'TCP'
}

export interface IAnnotation {
  key: string
  value: string
}

export interface IIngressPath {
  path: string
  backend: IService
  port: number
}

export interface IIngress {
  name: string
  annotations: IAnnotation[]
  hosts: string[]
  paths: IIngressPath[]
}
