async function search() {
    const input = document.getElementById('search-input').value;

    const feedRes = await fetch("/people/search/" + input);
    const feedDat = await feedRes.json();
    if (!feedRes.ok) {
        console.log(feedRes.error);
        return;
    }

    const searchResults = document.getElementById('search-results');

    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }

    for(const item of feedDat) {
        addPerson(searchResults, item);
    }

}

function addPerson(searchResults, data) {
    const card = document.createElement("div");
    card.classList.add("card", "mx-auto", "mt-3");
    card.style.width = "18rem";

    const img = document.createElement("img");
    img.src = data.profile_pic;
    img.alt = "profile pic";
    img.style.height = "20rem";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const h5 = document.createElement("h5");
    h5.classList.add("card-title");
    h5.innerHTML = data.username;

    const p = document.createElement("p");
    p.classList.add("card-text");
    p.innerHTML = data.bio;

    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    
    card.appendChild(img);
    card.appendChild(cardBody);

    searchResults.appendChild(card);
}

document.getElementById('search').addEventListener('click', search);
