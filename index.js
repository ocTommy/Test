// console.log("hej")

// let ul = document.querySelector("#myul")

// async function readArr(){
//     let res = await fetch ("index.json");
//     let data = await res.json()
//     console.log(data)

//     data.employees.forEach((e)=>{
//         let li = document.createElement("li");
//         li.innerHTML = `${e.firstName} ${e.lastName}`
//         ul.append(li);
//     })
// }

// readArr()



let ul = document.querySelector("#myul")

async function readApi(){
    let res = await fetch ("https://fakestoreapi.com/products");
    let data = await res.json()

    data.forEach((product)=>{
        let li = document.createElement("li");
        li.innerHTML = `${product.title} ${product.description} ${product.price}`
        ul.append(li)
    })


    console.log(data);
}

readApi()