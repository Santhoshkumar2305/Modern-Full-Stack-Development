const container = document.getElementById("container");

const fetchData = async() => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(res);
        if(res.ok){
            const data=await res.json();
            console.log(data);
            
            for(let i=0;i<data.length;i++){
                const card = document.createElement("div");
                card.classList.add("cards");

                const name = document.createElement("h2");
                name.classList.add("detail");
                name.textContent = `Name: ${data[i].name}`;

                const id = document.createElement("p");
                id.classList.add("detail");
                id.textContent=`ID: ${data[i].id}`;

                const username = document.createElement("p");
                username.classList.add("detail");
                username.textContent = `User name: ${data[i].username}`;

                const phone = document.createElement("p");
                phone.classList.add("detail");
                phone.textContent = `Phone: ${data[i].phone}`;

                const email = document.createElement("p");
                email.classList.add("detail");
                email.textContent=`Email: ${data[i].email}`;

                const website=document.createElement("p");
                website.classList.add("detail");
                website.textContent=`Website: ${data[i].website}`;

                card.appendChild(name);
                card.appendChild(id);
                card.appendChild(username);
                card.appendChild(phone);
                card.appendChild(email);
                card.appendChild(website);

                container.appendChild(card);
            }
        }
    }
    catch(err){
        console.log(err);
    }
}
fetchData();