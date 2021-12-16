function wakeUp(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Good morning');
                resolve(bool);
            } else {
                reject();
            }
        }, 1000)
    })
}

function breakfast(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Nice breakfast');
                resolve(bool);
            } else {
                reject();
            }
        }, 300)
    })
}

function onlineLearning(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('its so hard');
                resolve(bool);
            } else {
                reject();
            }
        }, 5000)
    })
}

function lunch(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Ham Ham Ham');
                resolve(bool);
            } else {
                reject();
            }
        }, 500)
    })
}

function rest(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Relaxxxx');
                resolve(bool);
            } else {
                reject();
            }
        }, 2000)
    })
}

function dinner(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Yammi Yam!');
                resolve(bool);
            } else {
                reject();
            }
        }, 1000)
    })
}

function walk(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Weather is cool');
                resolve(bool);
            } else {
                reject();
            }
        }, 500)
    })
}

function practiceTask(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('This task is so hard');
                resolve(bool);
            } else {
                reject();
            }
        }, 3000)
    })
}

function takeShower(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Watter is cold');
                resolve(bool);
            } else {
                reject();
            }
        }, 600)
    })
}

function goSleep(bool) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bool) {
                console.log('Ok go to the bed');
                resolve(bool);
            } else {
                reject();
            }
        }, 1000)
    })
}


wakeUp(true)
    .then(bool => {
        return breakfast(bool);
    })
    .then(bool => {
        return onlineLearning(bool);
    })
    .then(bool => {
        return lunch(bool);
    })
    .then(bool => {
        return rest(bool);
    })
    .then(bool => {
        return dinner(bool);
    })
    .then(bool => {
        return walk(bool);
    })
    .then(bool => {
        return practiceTask(bool);
    })
    .then(bool => {
        return takeShower(bool);
    })
    .then(bool => {
        return goSleep(bool);
    }).catch(e => {
    console.error('I will slip all day');
})