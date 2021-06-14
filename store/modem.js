export const state = () => ({
    // fileNames: function () {
    //     let fileNames = require.context(`@/static/json/`, false).keys();
    //     return fileNames;
    // }
});

// getters are not functions
export const getters = {
    fileNames: function () {
        let fileNames = require('@/static/json/_modems.json');
        return fileNames;
    }
};