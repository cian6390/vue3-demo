import { createStore } from 'vuex'

export interface RootState {
    msg: string
}

export const store = createStore<RootState>({
    state() {
        return {
            msg: 'Hello Vue 3'
        }
    },
    mutations: {
        SET_MSG(state, msg) {
            state.msg = msg
        }
    },
    actions: {
        changeTitle({ commit }, title) {
            commit('SET_MSG', title)
        }
    }
})

export function useSotre() {
    return store
}