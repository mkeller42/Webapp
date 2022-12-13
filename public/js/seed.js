import fakeFlights from './flights.js'

window.Seed = (function () {

  const products = [
    {
      id: 1,
      title: 'STL-AUSdatetime SOUTHWEST',
      dates: 'December 10, 9:00 PM',
      url: '#',
      locations: 'St. Louis to Austin',
      airline: 'Southwest',
      hasCheckedIn: false,
    },
    {
      id: 2,
      title: 'CHI-NYCdatetime SOUTHWEST',
      dates: 'December 15, 5:00 AM',
      url: '#',
      locations: 'Chicago to New York City',
      airline: 'Southwest',
      hasCheckedIn: true,
    },
    {
      id: 3,
      title: 'ALB-HOUdatetime SOUTHWEST',
      dates: 'December 18, 12:30 PM',
      url: '#',
      locations: 'Albequerque to Houston',
      airline: 'Southwest',
      hasCheckedIn: false,
    },
    {
      id: 4,
      title: 'KC-TULdatetime SOUTHWEST',
      dates: 'December 28, 3:00 PM',
      url: '#',
      locations: 'Kansas City to Tulsa',
      airline: 'Southwest',
      hasCheckedIn: false,
    },
  ];

  return { products: products };
}());


// window.Seed = (function () {

//   const products = [];
//   //let flightsList = '';

//   for (let i in fakeFlights) {
//     products.push ( 
//       {
//         id: 1,
//         title: i.title,
//         dates: i.dates,
//         url: i.url,
//         locations: i.locations,
//         airline: i.airline
//       }
//     )
//   }


//   return { products: products };
// }());