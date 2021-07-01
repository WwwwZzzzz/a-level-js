let table = document.getElementById('person_table_body');

function addNewPerson (table) {
    fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(luke => {
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = luke.name;
        cell2.innerHTML = luke.birth_year;
        cell3.innerHTML = luke.homeworld;
    })
    
}

// addNewPerson(table); // type it to console