module.exports = function NoLockonYou(dispatch) {
    dispatch.hook('S_LOCKON_YOU', 1, (event) => { 
        return false;
    });   
}
