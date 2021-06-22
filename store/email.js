export const state = () => ({
    storageData: {
        topic: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }
});

export const mutations = {
    setData: function (state, [value, field]) {
        state.storageData[field] = value;
    },

    clearData: function (state) {
        let data = state.storageData;
        Object.keys(data).forEach((key) => data[key] = "");
    }
};

export const actions = {
    updateData: function ({ commit }, [event, field]) {
        let value = event.target.value;
        commit('setData', [value, field]);
    },
    deleteData: function ({ commit }) {
        commit('clearData');
    }
}