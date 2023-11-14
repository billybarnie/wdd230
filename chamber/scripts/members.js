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
            let image = document.createElement("img");
            let a = document.createElement("a");

            memberCard.classList.add("member-card");

            image.src = member.image || "path_to_default_image.jpg";
            image.alt = member.name;

            image.style.display = "block";
            image.style.borderRadius = "10px";

            p.innerHTML = `<strong>${member.name}</strong><br>${member.address}<br>${member.number}<br>${member.brief}`;
            
            memberCard.appendChild(image);
            memberCard.appendChild(p);

            a.setAttribute("href", member.url || "#");
            a.setAttribute("target", "_blank");
            a.textContent = member.url || "No Website";

            memberCard.appendChild(a);
            section.appendChild(memberCard);
        } else {
            console.warn("Member name is missing.");
        }

        const gridbutton = document.querySelector("#grid");
        const listbutton = document.querySelector("#list");
        const display = document.querySelector(".member-grid");
    
    
    
        gridbutton.addEventListener("click", () => {
    
            display.classList.add("grid");
            display.classList.remove("list");
    
            image.style.visibility = "visible";
        });
    
        listbutton.addEventListener("click", showList);
    
        function showList() {
            display.classList.add("list");
            display.classList.remove("grid");
    
        image.style.visibility = "hidden";
        };
    });
};



getLinks();





