import { V1PodList } from '@kubernetes/client-node/dist/gen/model/v1PodList'
import * as http from 'http'

const k8s = require('@kubernetes/client-node')

const kc = new k8s.KubeConfig()
kc.loadFromDefault()

const k8sApi = kc.makeApiClient(k8s.CoreV1Api)

interface Res {
  response: http.IncomingMessage
  body: V1PodList
}

k8sApi.('cert-manager').then((res: Res) => {
  console.log(JSON.stringify(res.body, null, 2))
})
