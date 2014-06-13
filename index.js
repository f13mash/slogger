/**
 * Created by f13 on 12/6/14.
 */
exports = module.exports = init;
exports.log = log;
exports.warn = warn;
exports.error = error;
exports.all = all;

function init(tag) {
    var method = "log";
    var splts = tag.split(":");
    if(splts.length > 1 && (splts[splts.length - 1] === "warn" || splts[splts.length - 1] === "error")) {
        method = splts[splts.length - 1];
        splts.pop();
        tag = splts.join(":");
    }
    switch (method) {
        case "log":
            return log(tag);
            break;
        case "warn":
            return warn(tag);
            break;
        case "error":
            return warn(tag);
            break;
        default :
            return null;
    }
}
function all(tag) {
    return {
        log: log(tag),
        warn: warn(tag),
        error: error(tag)
    }
}
function log(tag) {
    return console.log.bind(undefined, formTag(tag));
}
function warn(tag) {
    return console.warn.bind(undefined, formTag(tag));
}
function error(tag) {
    return console.error.bind(undefined, formTag(tag));
}

function formTag(tag) {
    return "["+tag.split("/").join("][")+"]";
}