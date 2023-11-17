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
            const memberCard = createHTMLElement("div", "member-card");
            const directMember = createHTMLElement("div", "direct_member");
            const image = createHTMLElement("img", "image");
            const nameElement = createHTMLElement("strong");
            const addressElement = createHTMLElement("div");
            const numberElement = createHTMLElement("div");
            const briefElement = createHTMLElement("div");
            const a = createHTMLElement("a");

            image.src = member.image || "path_to_default_image.jpg";
            image.alt = member.name;
            image.style.display = "block";
            image.style.borderRadius = "10px";

            nameElement.textContent = member.name;
            addressElement.textContent = member.address;
            numberElement.textContent = member.number;
            briefElement.textContent = member.brief;

            directMember.appendChild(image);
            directMember.appendChild(nameElement);
            directMember.appendChild(addressElement);
            directMember.appendChild(numberElement);
            directMember.appendChild(briefElement);
            memberCard.appendChild(directMember);

            a.setAttribute("href", member.url || "#");
            a.setAttribute("target", "_blank");
            a.textContent = member.url || "No Website";

            directMember.appendChild(a);
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