document.getElementById(`apuestas`), addEventListener('submit', function (e) {
    e.preventDefault();

    try {
        let monto = parseFloat(document.getElementById('monto').value);
        let cuota = parseFloat(document.getElementById('cuota').value);

        if (isNaN(monto) || monto <= 0) {
            throw new Error("El monto debe ser un número positivo.");
        }

        if (isNaN(cuota) || cuota <= 0 || Number.isInteger(cuota)) {
            throw new Error("La cuota debe ser un número decimal y positivo.");

        }

        let ganancia = monto * cuota;


        if (cuota > 3.0) {
            ganancia += ganancia * 0.05;
        }

        document.getElementById('resultado').innerHTML =
            ` Tu posible ganancia es: <strong style="color:green;">${ganancia.toFixed(2)}</strong>`;

    } catch (error) {
        document.getElementById('resultado').innerHTML =
            ` Error: <span style="color:red;">${error.message}</span>`;
    }


})