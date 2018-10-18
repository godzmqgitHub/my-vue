import axios from "axios";

export default {
    state: {
        token: '',
        username: ''
    },
    mutations: {
        setToken(state, token) {
          state.token = token
        }
    },
    actions: {
        handleLogin({commit},data) {
            this.state.username = data.username;
            return axios.post("/api/login", data);
        }
    }
}