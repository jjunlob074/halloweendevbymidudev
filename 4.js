function findTheKiller(whisper, suspects) {
    const NORMALIZED_PATTERN = whisper.replace(/\$$/, '').toLowerCase();
    const IS_EXACT_MATCH = whisper.endsWith('$');
    
    const MATCHING_SUSPECTS = suspects.filter(suspect => {
        const NORMALIZED_SUSPECT = suspect.toLowerCase();
        return (
            NORMALIZED_SUSPECT.length >= NORMALIZED_PATTERN.length && 
            [...NORMALIZED_PATTERN].every((char, i) => 
                char === '~' || char === NORMALIZED_SUSPECT[i]) &&
            (!IS_EXACT_MATCH || 
            NORMALIZED_SUSPECT.length === NORMALIZED_PATTERN.length)
        );
    });

    return MATCHING_SUSPECTS.length === 1 
        ? MATCHING_SUSPECTS[0] 
        : MATCHING_SUSPECTS.join(',');
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
