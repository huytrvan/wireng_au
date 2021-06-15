export const state = () => ({
    currentPage: 1,
    modemPerPage: 20,
});

// getters are not functions
export const getters = {
    modems: function () {
        return require('@/static/json/_modems.json');
    },
    totalPage: function (state, getters) {
        let totalModem = getters.modems.length;
        let totalPage =
            Math.ceil(totalModem / state.modemPerPage);
        return totalPage;
    },
    modemsToShow: function (state, getters) {
        let pageIndex = state.currentPage;
        let modems = getters.modems;

        let start = state.modemPerPage * (pageIndex - 1);
        let end = state.modemPerPage * pageIndex;

        return modems.slice(start, end);
    }
};

export const mutations = {
    setCurrentPage(state, { pageIndex, totalPage }) {
        if (pageIndex > 0 && pageIndex <= totalPage) {
            state.currentPage = pageIndex;
            console.log(state.currentPage);
        }
    }
};

export const actions = {
    updateCurrentPage({ commit, getters }, pageIndex) {
        let totalPage = getters.totalPage;
        commit('setCurrentPage', { pageIndex, totalPage })
    }
}