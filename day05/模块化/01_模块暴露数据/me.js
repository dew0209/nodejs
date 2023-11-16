function tiemo() {
    console.log('贴膜...')
}

function niejiao() {
    console.log('捏脚...')
}


//暴露数据
// module.exports = {
//     tiemo,
//     niejiao
// };

exports.tiemo = tiemo;
exports.niejiao = niejiao;

console.log(module.exports === exports);
// exports = { tiemo, niejiao }; error
//exports.key = value;相当于往module.exports塞key和value