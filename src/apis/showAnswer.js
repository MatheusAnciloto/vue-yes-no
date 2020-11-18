import { http } from './answer'

export default {
    showAnswer:() => {
        return http.get('/')
    }
}