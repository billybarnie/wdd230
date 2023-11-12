const linksURL = "data/members.json";

const section = document.querySelector(".member");
const h3 = document.createElement("h3");

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

const displayLinks = (data) => {
    if (data.member.length === 0) {
        const noMembersMessage = document.createElement("p");
        noMembersMessage.textContent = "No members available.";
        section.appendChild(noMembersMessage);
        return;
    }

    data.member.forEach(member => {
        if (member.name) {
            let memberCard = document.createElement("div");
            let p = document.createElement("p");
            let img = document.createElement("img");
            let a = document.createElement("a");

            memberCard.classList.add("member-card"); // Add a class for styling

            img.src = member.image || "path_to_default_image.jpg";
            img.alt = member.name;

            img.style.display = "block";
            img.style.borderRadius = "10px";

            p.innerHTML = `<strong>${member.name}</strong><br>${member.address}<br>${member.number}<br>${member.brief}`;
            
            memberCard.appendChild(img);
            memberCard.appendChild(p);

            a.setAttribute("href", member.url || "#");
            a.setAttribute("target", "_blank");
            a.textContent = member.url || "No Website";

            memberCard.appendChild(a);
            section.appendChild(memberCard);
        } else {
            console.warn("Member name is missing.");
        }
    });
};

getLinks();





