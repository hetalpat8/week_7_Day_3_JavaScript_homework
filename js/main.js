function getJson() {
    let season = document.querySelector('#season').value;
    let round = document.querySelector('#round').value;

    fetch(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)


        // Get First 7 Constructors for F1 Name
        for (let i=0; i<7; i++) {
            let constructors_name = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].name;
            let display_constructors = document.createElement('#name')
            display_constructors.innerHTML = constructors_name
            document.body.append(display_constructors)

        // Get First 7 Constructors for F1 Nationality
        for (let i=0; i<7; i++) {
            let constructors_nationality = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].nationality;
            let display_constructors = document.createElement('#nationality')
            display_constructors.innerHTML = constructors_nationality
            document.body.append(display_constructors)

        // Get First 7 Constructors for F1 Sponser
        for (let i=0; i<7; i++) {
            let constructors_sponser = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].sponser;
            let display_constructors = document.createElement('sponser')
            display_constructors.innerHTML = constructors_sponser
            document.body.append(display_constructors)

        // Get First 7 Constructors for F1 Position
        for (let i=0; i<7; i++) {
            let constructors_position = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Constructors[0].position;
            let display_constructors = document.createElement('#position')
            display_constructors.innerHTML = constructors_position
            document.body.append(display_constructors)
    }
    }}}})
}

