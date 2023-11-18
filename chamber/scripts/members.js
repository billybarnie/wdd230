const linksURL = "data/members.json";
const section = document.querySelector(".member");

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        displayLinks(data);
    } catch (error) {
        console.error(error);
    }
}

function createHTMLElement(tag, className) {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }
    return element;
}

function showList(display, displayImages, show) {
    display.classList.add(show);
    display.classList.remove(show === "grid" ? "list" : "grid");
    
    displayImages.forEach(currimage => {
        currimage.style.display = show === "grid" ? "block" : "none";
    });
}

const displayLinks = (data) => {
    const display = document.querySelector(".member-grid");

    if (data.member.length === 0) {
        const noMembersMessage = createHTMLElement("p");
        noMembersMessage.textContent = "No members available.";
        section.appendChild(noMembersMessage);
        return;
    }

    data.member.forEach(member => {
        if (member.name) {
            const memberCard = createHTMLElement ("div", "member-card");
            const imageElement = document.createElement ("img");

            imageElement.classList.add('image');

            imageElement.src = member.image || "path_to_default_image jpg";
            imageElement.alt = member.name;

            imageElement.style.display = "block";
            imageElement.style.borderRadius = "10px";

            memberCard.appendChild (imageElement);
            const nameElement = document.createElement ("span");

            nameElement.classList.add('member_data', 'member_name');
            nameElement.textContent = member.name;

            memberCard.appendChild(nameElement);

            const addressElement = document.createElement ("span");

            addressElement.classList.add('member_data', 'member_address');
            addressElement.textContent = member.address;

            memberCard.appendChild(addressElement);

            const numberElement = document.createElement ("span");

            numberElement.classList.add('member_data','member_number');
            numberElement.textContent = member.number;

            memberCard.appendChild(numberElement);

            const briefElement = document.createElement ("span");

            briefElement.classList.add('member_data', 'member_brief');
            briefElement.textContent = member.brief;

            memberCard.appendChild(briefElement);

            const linkElement = document.createElement ("span");

            linkElement.classList.add('member_data', 'member_link');
            const aElement = document.createElement ("a");

            aElement.setAttribute("href", member.url || "#");
            aElement.setAttribute("target","_blank");
            aElement.textContent = member.url || "No Website";

            linkElement.appendChild(aElement);
            memberCard.appendChild(linkElement);
            section.appendChild(memberCard);

        } else {
            console.warn("Member name is missing.");
        }
    });

    const gridButton = document.querySelector("#grid");
    const listButton = document.querySelector("#list");
    const displayImages = document.querySelectorAll(".image");

    gridButton.addEventListener("click", () => showList(display, displayImages, "grid"));
    listButton.addEventListener("click", () => showList(display, displayImages, "list"));
};

getLinks();