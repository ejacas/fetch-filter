

const loadData = () => {
    return fetch('https://polar-chartreuse-silverfish.glitch.me/').then(resp => resp.json())
}


const printData = (data) => {

    // Span
    const span = document.createElement("span")
    span.innerText = "Show only VIP "
    document.body.append(span)
    
    // Checkbox
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", "checkbox")
    document.body.append(checkbox)


    // Table
    const table = document.createElement("table")
        table.innerHTML =
        `
        <tr>
            <td>ID</td>
            <td>Picture</td>
            <td>First name</td>
            <td>Last name</td>
            <td>City</td>
            <td>Favourite color</td>
        </tr>
        `

        data.forEach(person => {
        const tableRow = table.insertRow(-1)
    
        var c1 = tableRow.insertCell(0)
        var c2 = tableRow.insertCell(1)
        var c3 = tableRow.insertCell(2)
        var c4 = tableRow.insertCell(3)
        var c5 = tableRow.insertCell(4)
        var c6 = tableRow.insertCell(5)
    
        
        const names = person.name.split(' ')
        
        c1.innerText = person.id
        c2.innerHTML = 
        `
        <img class="picture" src= '${person.image}'>
        `
        c3.innerText = names[0]
        c4.innerText = names.slice(1).join(' ')
        c5.innerText = person.city
        c6.innerText = person.fav_color
        });

        document.body.append(table)              
}

loadData().then(printData)