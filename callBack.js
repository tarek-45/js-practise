function welcomeGuest(name, greetHandler){
    greetHandler(name)
    
}
const actorName = 'shahruk khan';

function greetUserMorning(name){
    console.log('good morning ',name);
}

welcomeGuest(actorName, greetUserMorning);