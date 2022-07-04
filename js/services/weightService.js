class Peso {
  constructor(valorPeso) {
    this.valorPeso = valorPeso;
  }
}

class WeightService {
  getInputData() {
    let valorPeso = document.getElementById('Peso').value;

    let peso = new Peso(valorPeso);
    return peso; 
  }

  registerWeight() {
    let peso = this.getInputData()
    fetch('https://localhost:44355/registerweight/1', {
      method: "POST",
      body: JSON.stringify(peso),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Peso cadastrado com sucesso',
      showConfirmButton: false,
      timer: 2000
    }))
  }

  getWeight() {
    fetch('https://localhost:44355/get-weight/1')
    .then(res => res.json())
    .then(data => console.log(data))
  } 
}

export default WeightService;