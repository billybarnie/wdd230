document.addEventListener('DOMContentLoaded', function () {

  fetch('data/rentalprices.json')
    .then(response => response.json())
    .then(data => {

      const rentals = data.rentals;

      const tableBody = document.querySelector('#rentalTable tbody');

      rentals.forEach(rental => {
        const row = document.createElement('tr');

        const imageCell = document.createElement('td');
        const rentalImage = document.createElement('img');
        rentalImage.src = rental.imageURL;
        rentalImage.alt = rental['Rental Type'];
        rentalImage.loading = 'eager';
        imageCell.appendChild(rentalImage);
        row.appendChild(imageCell);

        const rentalTypeCell = document.createElement('td');
        rentalTypeCell.textContent = rental['Rental Type'];
        row.appendChild(rentalTypeCell);

        const maxPersonsCell = document.createElement('td');
        maxPersonsCell.textContent = rental['Max. Persons'];
        row.appendChild(maxPersonsCell);

        const reservationHalfDayCell = document.createElement('td');
        reservationHalfDayCell.textContent = `$${rental['Reservation - Half Day']}`;
        row.appendChild(reservationHalfDayCell);

        const reservationFullDayCell = document.createElement('td');
        reservationFullDayCell.textContent = `$${rental['Reservation - Full Day']}`;
        row.appendChild(reservationFullDayCell);

        const walkInHalfDayCell = document.createElement('td');
        walkInHalfDayCell.textContent = `$${rental['Walk-In - Half Day']}`;
        row.appendChild(walkInHalfDayCell);

        const walkInFullDayCell = document.createElement('td');
        walkInFullDayCell.textContent = `$${rental['Walk-In - Full Day']}`;
        row.appendChild(walkInFullDayCell);

        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});