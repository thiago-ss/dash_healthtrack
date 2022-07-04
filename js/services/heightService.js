export class Altura {
  constructor(valorAltura) {
    this.valorAltura = valorAltura;
  }
}

class HeightService {
  getInputData() {
    let valorAltura = document.getElementById('Altura').value;

    let altura = new Altura(valorAltura);
    return altura; 
  }

  registerHeight() {
    let altura = this.getInputData()
    fetch('https://localhost:44355/registerHeight/1', {
      method: "POST",
      body: JSON.stringify(altura),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Altura cadastrado com sucesso',
      showConfirmButton: false,
      timer: 2000
    }))
  }
}

export default HeightService;