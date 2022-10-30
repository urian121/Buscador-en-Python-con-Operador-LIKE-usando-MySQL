window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#buscar').focus();
});


/*
function busqueda(inputValorBuscar) {
    console.log(inputValorBuscar);

const valorBusq = {
    buscar: inputValorBuscar
  };

  axios({
    method: "POST",
    url: "{{ BuscarEmpleado }}",
    data: {
      buscar: valorBusq
    },
    headers: {
      "Content-Type": "multipart/form-data"
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      throw err;
    })
    .finally(function () {
      console.log('Operacion terminada');
    });
  return false;
}
*/