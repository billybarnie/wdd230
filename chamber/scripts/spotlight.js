document.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch('data/members.json');
    const data = await response.json();

    const spotlightList = document.querySelector('.spotlight ul');

    for (let i = 0; i < 7; i++) {
        const member = data.member[i];

        if (member.membershipType === 'gold' || member.membershipType === 'silver') {
            const listItem = document.createElement('li');
            listItem.classList.add('light');

            listItem.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.brief}</p>
                <p>Membership Level: ${member.membershipType}</p>
                <a href="#">${member.url}</a>
                <div class="numbers"><a href="#">${member.number}</a></div>
                <div class="website"><a href="#">${member.url}</a></div>
            `;

            spotlightList.appendChild(listItem);
        }
    }
});