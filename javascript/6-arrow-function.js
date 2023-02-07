const names = ['pallavi','poojitha'];
const fullname = names.map(function(names) {
    return `${names} nakirekanti`;

});
console.log(fullname);
const fullname2=names.map(names=> {
    return `${names} nakirekanti`;
});
console.log(fullname2);
const fullname3=names.map((names)=> {
    return `${names} nakirekanti`;
});
console.log(fullname3);
const fullname4=names.map(names=>  `${names} nakirekanti`);
console.log(fullname4);

const fullname5=names.map(() => `cool bar`);
console.log(fullname5);

/*anonimas*/
const sayMayName=(name) => {
    alert( `hello ${name}! `)}
sayMayName('wes');
