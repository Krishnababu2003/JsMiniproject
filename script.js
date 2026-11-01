//<=============== MINI PROJECT ==================>

let api = "https://fakestoreapi.com/products"

fetch(api).then((successData)=>{

    return successData.json()

})

.then((jsData)=>{

    jsData.forEach((c,i,t)=>{

        let div = document.createElement("div")

        div.innerHTML = `<h1>${c.id}. ${c.title.slice(0,50)}...</h1>

        <h2>Price: $${c.price}</h2>

        <p>${c.description.slice(0,100)}...</p>

        <img src="${c.image}" alt="${c.title}"/>`

        let apiTag = document.querySelector(".api")

        apiTag.append(div)

    })
})

.catch((error)=>{

    let apiTag = document.querySelector(".api")

    apiTag.innerHTML = error

    apiTag.style.color = "red"

})

.finally(()=>{

    console.log("API request completed");

})