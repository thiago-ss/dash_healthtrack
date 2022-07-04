class Alimento {
  constructor(tipoComida) {
    this.tipoComida = tipoComida;
  }
}

class FoodService {
  getInputData() {
    let tipoComida = document.getElementById('Alimento').value;

    let alimento = new Alimento(tipoComida);
    return alimento;
  }

  registerFood() {
    let alimento = this.getInputData()
    fetch('https://localhost:44355/registerfood/1', {
      method: "POST",
      body: JSON.stringify(alimento),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Alimento cadastrado com sucesso',
      showConfirmButton: false,
      timer: 2000
    }))
  }
}

export default FoodService;