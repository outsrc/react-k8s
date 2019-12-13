import { assoc } from 'ramda'

export interface ILabel {
  key: string
  value: string
}

export interface ILiteralEnvironmentSetting {
  from: 'literal'
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

export const toK8sEnv = (setting: IEnvironmentSetting): object => {
  switch (setting.from) {
    case 'literal':
      return { name: setting.key, value: setting.value }
    case 'configMapKeyRef':
    case 'secretKeyRef':
      return {
        name: setting.key,
        valueFrom: {
          [setting.from]: {
            key: setting.key,
            name: setting.value
          }
        }
      }
  }
}

export const toK8sLabels = (labels: ILabel[]) =>
  labels.reduce((acc, label) => assoc(label.key, label.value, acc), {})

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
