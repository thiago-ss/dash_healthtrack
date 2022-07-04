class Pressao {
  constructor(valorPressao) {
    this.valorPressao = valorPressao;
  }
}

class PressureService {
  getInputData() {
    let valorPressao = document.getElementById('Pressao').value;

    let pressao = new Pressao(valorPressao);
    return pressao; 
  }

  registerPressure() {
    let pressao = this.getInputData()
    fetch('https://localhost:44355/registerPressure/1', {
      method: "POST",
      body: JSON.stringify(pressao),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pressao cadastrada com sucesso',
      showConfirmButton: false,
      timer: 2000
    }))
  }

  getPressure() {
    fetch('https://localhost:44355/get-pressure/1')
    .then(res => res.json())
    .then(data => console.log(data))
  }
}

export default PressureService;