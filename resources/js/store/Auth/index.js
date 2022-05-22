import {authUser} from '~/api/Public';

export const auth = {
    namespaced: true,
    state: () => ({
        user: null,
        test: null,
    }),
    mutations: {
        SET_USER(state, data) {
            state.user = {...data};
        },
    },
    actions: {
        signIn({commit, state}, payload) {
            if (state.user) return;

            authUser(payload)
                .then(({data}) => {
                    console.log('signIn', data);
                    commit('SET_USER', data);
                })
                .catch(console.log);
        },
    },
    getters: {
        //
    },
};
