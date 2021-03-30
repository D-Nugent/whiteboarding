let companies = [
    {
        id: 0,
        name: 'Amazon',
        locations: {
            northAmerica: {
                usa: ['Seattle, WA', 'Austin, TX', 'New York, NY', 'Cambridge, MA', 'San Francisco, CA', 'Irvine, CA'],
                canada: ['Toronto, ON', 'Vancouver, BC']
            },
            centralAmerica: {
                costaRica: ['San Jose']
            },
            europe: {
                unitedKingdom: ['Cambridge', 'Edinburgh', 'London'],
                ireland: ['Dublin'],
                austria: ['Graz'],
            }
        },
        products: [
            {
                id: 0,
                name: 'Amazon Online Store',
                description: 'An online retail store'
            },
            {
                id: 1,
                name: 'Amazon Web Services',
                description: 'A scalable, reliable, inexpensive cloud computing service.'
            },
            {
                id: 2,
                name: 'Amazon Prime',
                description: 'A subscription based service that gives users access to free shipping through the online store, as well as Prime video for streaming, Prime Music for listening, and exclusive shopping deals and selections.'
            }
        ]
    },
    {
        id: 1,
        name: 'Google',
        locations: {
            northAmerica: {
                usa: ['Ann Arbor, MI', 'Boulder, CO', 'Austin, TX', 'San Diego, CA', 'Seattle, WA'],
                canada: ['Toronto, ON', 'Montreal, QC', 'Kitchener, ON', ]
            },
            southAmerica: {
                colombia: ['Bogota'],
                brazil: ['Belo Horizonte', 'Sao Paulo']
            },
            europe: {
                denmark: ['Aarhus', 'Copenhagen'],
                germany: ['Berlin', 'Hamburg']
            }
        },
        products: [
            {
                id: 0,
                name: 'Google Search',
                description: 'An internet search engine.' 
            },
            {
                id: 1,
                name: 'Gmail',
                description: 'A web mail client.'
            },
            {
                id: 2,
                name: 'Google Drive',
                description: 'Cloud storage for businesses and consumers.'
            },
            {
                id: 3,
                name: 'GSuite',
                description: 'A suite of productivity applications, including spreadsheet, word-processing, and photo-editing software.'
            }
        ]
    }
]

// Use your knowledge of accessings values within objects & arrays to get answers to the following questions:

// How many companies are there? (Return a Number)
let companiesCount = companies.length;
// console.log(companiesCount);

// find the company object that has the name 'Amazon'. (Return an Object)
let amazon = companies.find(company => company.name === 'Amazon');
// console.log(amazon);

//find all of amazon's locations. (Return an Object)
let amazonLocations = amazon.locations
// console.log(amazonLocations)

// find all the locations amazon has in the usa. (Return an Array of Strings)
let amazonUSALocations = amazon.locations.northAmerica.usa
// let amazonUSALocations = amazonLocations.northAmerica.usa
// console.log(amazonUSALocations)

// find the name of amazon's first product in their lineup. (Return a String)
let amazonFirstProduct = amazon.products[0].name
// console.log(amazonFirstProduct)

// find the companies that have locations in South America. (Return an Array of Objects)
let southAmericanCompanies = companies.filter(company => company.locations.southAmerica !== undefined)
// console.log(southAmericanCompanies)

// find the companies that have locations in North America. (Return an Array of Objects)
let northAmericanCompanies = companies.filter(company => company.locations.northAmerica !== undefined)
// console.log(northAmericanCompanies)

// find the companies that have a north american location in Toronto, ON. (Return an Array of Objects)
let torontoCompanies = companies.filter(company => company.locations.northAmerica.canada.includes('Toronto, ON'))
// console.log(torontoCompanies)

//find the company that has more products, and console.log the name of the company. (Return an Object, log a String to the console)
let companyWithMoreProducts = companies[0]
companies.forEach(company => {
    if (company.products.length > companyWithMoreProducts.products.length) {
        companyWithMoreProducts = company
    }
})
// console.log(companyWithMoreProducts.name)

    //using the variables below to complete the next 4 questions
    let na = 'northAmerica';
    let sa = 'southAmerica';
    let eu = 'europe';
    let uk = 'unitedKingdom'
    let ca = 'canada';
    let us = 'usa';
    let ba = 'brazil';

    // 1. find all the amazon locations within canada. (Return an Array of Strings)
    let amazonCanada = companies[0].locations[na][ca];
    // console.log(amazonCanada);

    // 2. find all the google locations within brazil. (Return an Array of Strings)
    let googleBrazil = companies[1].locations[sa][ba];
    // console.log(googleBrazil);

    // 3. find all the amazon locations in the uk. (Return an Array of Strings)
    let amazonUK = companies[0].locations[eu][uk];
    // console.log(amazonUK);

    // 4. find all the google locations in the usa. (Return an Array of Strings)
    let googleUSA = companies[1].locations[na][us];
    // console.log(googleUSA);

//==== Diving Deeper ====
//modify the function below in order to compile a list of all the location for each company. (Return an Array of Strings)
//Hint: Look up Object.keys and see how that may be useful to you
let compileLocations = (company) => {
    //get continent keys
    let continents = Object.keys(company.locations)
    // console.log(keys)
    let allLocations = []

    //loop through the continents and access the countries within that continent
    continents.forEach(continent => {
        // get all country keys within the continent
        let countries = Object.keys(company.locations[continent])

        //loop through the countries and access their locations, destructure the values and add to the existing array
        countries.forEach(country => {
            // allLocations = [ ...company.locations[continent][country], ...allLocations]
            allLocations = allLocations.concat(company.locations[continent][country])
        })
    })
    return allLocations
}
let allAmazonLocations = compileLocations(amazon);
let allGoogleLocations = compileLocations(companies[1])
// console.log(allAmazonLocations)
// console.log(allGoogleLocations)
