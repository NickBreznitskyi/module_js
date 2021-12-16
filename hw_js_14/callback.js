function wakeUp(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Good morning');
            callback(null, bool);
        } else {
            callback('ZZZZZZZ', null);
        }
    }, 1000)
}

function breakfast(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Nice breakfast');
            callback(null, bool);
        } else {
            callback('ZZZZZZZ', null);
        }
    }, 300)
}

function onlineLearning(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('its so hard');
            callback(null, bool);
        } else {
            callback('Please wake up', null);
        }
    }, 5000)
}

function lunch(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Ham Ham Ham');
            callback(null, bool);
        } else {
            callback('Please wake up!!!!!!!!'.toUpperCase(), null);
        }
    }, 500)
}

function rest(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Relaxxxx');
            callback(null, bool);
        } else {
            callback('You are still asleep', null);
        }
    }, 2000)
}

function dinner(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Yammi Yam!');
            callback(null, bool);
        } else {
            callback('Oh my God, WAKE UP!!!!', null);
        }
    }, 1000)
}

function walk(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Weather is cool');
            callback(null, bool);
        } else {
            callback('ZZZZZZZZZZZZZZ', null);
        }
    }, 500)
}

function practiceTask(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('This task is so hard');
            callback(null, bool);
        } else {
            callback('WAKE UP, You must done this task', null);
        }
    }, 3000)
}

function takeShower(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Watter is cold');
            callback(null, bool);
        } else {
            callback('Ou shit, I was sleep all day', null);
        }
    }, 600)
}

function goSleep(bool, callback) {
    setTimeout(() => {
        if (bool) {
            console.log('Ok go to the bed');
            callback(null, bool);
        } else {
            callback('Ok go sleep again', null)
        }
    }, 1000)
}

wakeUp(false, (err, bool) => {
    if (err) {
        console.error(err)
    }
    breakfast(bool, (err, bool) => {
        if (err) {
            console.error(err)
        }
        onlineLearning(bool, (err, bool) => {
            if (err) {
                console.error(err)
            }
            lunch(bool, (err, bool) => {
                if (err) {
                    console.error(err)
                }
                rest(bool, (err, bool) => {
                    if (err) {
                        console.error(err)
                    }
                    dinner(bool, (err, bool) => {
                        if (err) {
                            console.error(err)
                        }
                        walk(bool, (err, bool) => {
                            if (err) {
                                console.error(err)
                            }
                            practiceTask(bool, (err, bool) => {
                                if (err) {
                                    console.error(err)
                                }
                                takeShower(bool, (err, bool) => {
                                    if (err) {
                                        console.error(err)
                                    }
                                    goSleep(bool, (err, bool) => {
                                        if (err) {
                                            console.error(err)
                                        }
                                    });
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});


