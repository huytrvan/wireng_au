export const state = ({
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
        console.log(`${field}: ${state.storageData[field]}`)
    }
};

export const actions = {
    updateData: function ({ commit }, [event, field]) {
        let value = event.target.value;
        commit('setData', [value, field]);
    }
}