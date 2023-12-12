fetch('data/rentalprices.json')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(rentalsData => {
    function createRentalSection(rental) {
        const section = document.createElement('section');
        const image = document.createElement('img');
        const rentalInfo = document.createElement('div');

        image.src = rental.imageURL;
        image.alt = rental['Rental Type'];
        image.width = 100;
        image.loading = 'eager';

        for (const key in rental) {
            if (key !== 'imageURL') {
                const p = document.createElement('p');
                p.textContent = `${key}: ${rental[key]}`;
                rentalInfo.appendChild(p);
            }
        }

        section.appendChild(image);
        section.appendChild(rentalInfo);

        document.getElementById('maindiv').appendChild(section);
    }

    rentalsData.rentals.forEach(createRentalSection);
})
.catch(error => console.error('Error fetching or parsing JSON:', error));