import request from '@/utils/request'

export function loginAPI(data) {
  return request({
    url: '/authorizations',
    method: 'get',
    params: data
  })
}

export function getInfoAPI() {
  return request({
    url: '/me',
    method: 'get'
  })
}
