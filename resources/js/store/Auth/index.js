import {authUser, registerUser, getUser} from '~/api/Public';

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
                    // todo @Zoya_Ivanova: save token
                    getUser().then(({data}) => commit('SET_USER', data));

                })
                .catch(console.log);
        },
        signUp({commit, state}, payload) {
            if (state.user) return;

            registerUser(payload)
                .then(({data}) => {
                    console.log('signUp', data);
                    commit('SET_USER', data);
                })
                .catch(console.log);
        },
    },
    getters: {
        //
    },
};
