function wakeDog(name, breed) {
    const wake = `Wake ${name} the ${breed}`
    console.log(wake)
    return wake
}

function leashDog(name, breed) {
    const leash = `Leash ${name} the ${breed}`
    console.log(leash)
    return leash
}

function walkToPark(name, breed) {
    const walk = `Walk to the park with ${name} the ${breed}`
    console.log(walk)
    return walk
}

function throwFrisbee(name, breed) {
    const frisbee = `Throw the frisbee for ${name} the ${breed}`
    console.log(frisbee)
    return frisbee
}

function walkHome(name, breed) {
    const home = `Walk home with ${name} the ${breed}`
    console.log(home)
    return home
}

function unleashDog(name, breed) {
    const unleash = `Unleash ${name} the ${breed}`
    console.log(unleash)
    return unleash
}

let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    let routineArray = []
    for (let i = 0; i < routine.length; i++) {
        let result = routine[i](dogName, dogBreed)
        routineArray.push(result)
    }
    return routineArray
}


exerciseDog('Byron', 'Poodle')

