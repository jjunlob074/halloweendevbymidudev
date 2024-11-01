function findTheKiller(whisper, suspects) {
    
    const REGEX_PATTERN = whisper
        .replace(/~/g, '[a-zA-Z]')    
        .replace(/\$/g, '$');          
    
    const REGEX = new RegExp(`^${REGEX_PATTERN}`, 'i');
    return suspects.filter(suspect => REGEX.test(suspect)).join(',');
}

// Ejemplos de uso
const whisper1 = 'd~~~~~a';
const suspects1 = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];
console.log(findTheKiller(whisper1, suspects1)); // -> 'Dracula'

const whisper2 = '~r~dd~';
const suspects2 = ['Freddy', 'Freddier', 'Fredderic'];
console.log(findTheKiller(whisper2, suspects2)); // -> 'Freddy,Freddier,Fredderic'

const whisper3 = '~r~dd$';
const suspects3 = ['Freddy', 'Freddier', 'Fredderic'];
console.log(findTheKiller(whisper3, suspects3)); // -> ''

const whisper4 = 'mi~~def';
const suspects4 = ['Midudev', 'Midu', 'Madeval'];
console.log(findTheKiller(whisper4, suspects4)); // -> ''

// Ejemplos de uso
console.log(findTheKiller('~~~~~~$', ['Pennywise', 'Leatherface', 'Agatha']));
