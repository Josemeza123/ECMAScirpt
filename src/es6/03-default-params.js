function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'PE';
    console.log(name, age, country);
};

newUser();
newUser('david', 15, 'CO');

function newAdmin(name = 'Oscar', age = 32, country = 'CL') {
    console.log(name, age, country);
};

newAdmin();
