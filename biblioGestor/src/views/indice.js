fetch('http://localhost:8080/api/lectores').then(result=>result.json()).then(json=>{
    const fragment = document.createDocumentFragment();
    json.result.forEach(lector=>{
        const div = document.createElement('p')
        const nombre = document.createElement('p')
        const email = document.createElement('p')
        const rol = document.createElement('p')
        const alta = document.createElement('p')
        nombre.innerHTML = `Nombre: ${lector.nombre}`;
        email.innerHTML = `Email: ${lector.email}`;
        rol.innerHTML = `Rol: ${lector.rol}`;
        alta.innerHTML = `Alta: ${lector.alta}`;
        div.appendChild(nombre);
        div.appendChild(email);
        div.appendChild(rol);
        div.appendChild(alta);
        fragment.append(div);
    }) 
    const ordersContainer = document.getElementById('orders');
    ordersContainer.appendChild(fragment);
})