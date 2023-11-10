const baseURL = "https://billybarnie.github.io/wdd230/";
const linksURL = "https://billybarnie.github.io/wdd230/data/links.json";

const section = document.querySelector(".card");
const ul = document.querySelector("ul");
const h3 = document.querySelector("h3");

h3.textContent = "Learning activities";

section.appendChild(h3);

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
}
  
getLinks();

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (data) => {
    data.lessons.forEach(lesson => {
        lesson.links.forEach(link => {

            let li = document.createElement("li");
            let a = document.createElement("a");

            a.setAttribute("href", link.url);
            a.setAttribute("target", "_blank");
            a.textContent = `${lessons.lesson} : ${link.title}`

            li.appendChild(a);
            ul.appendChild(li);
        });
        
    });
    section.appendChild(ul);
}