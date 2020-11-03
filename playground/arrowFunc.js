//const sq = (x) => x*x
//console.log(sq(2));



const event = {
    name: 'Birthday party',
    guestList: ['Andrew','Ron','Andy'],
    printGuest() {
        console.log('Guest list for ' + event.name )

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + event.name)
        })
    }
}



event.printGuest();
