function pluralize(noun, number) {
    if (number != 1 && noun != 'goats' && noun != 'ducks') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('goat', 1));
console.log('I have ' + pluralize('duck', 2));
