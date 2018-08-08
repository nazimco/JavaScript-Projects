let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only Vegan Dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make some vegan options')
} else {
    console.log('Offer up anything on the menu')
}