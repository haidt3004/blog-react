import http from './http'

export function find() {
    return http.get('posts').then(response => response.data)
}

export function get(id) {
    return http.get(`posts/${id}`)
}

export function save(data) {
    return data._id ?
        http.put(`posts/${data._id}`, data) :
        http.post(`posts`, data)
}

export function remove(id) {
    return http.delete(`posts/${id}`)
}

