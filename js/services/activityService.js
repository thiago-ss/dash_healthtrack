class Atividade {
  constructor(nomeAtividade) {
    this.nomeAtividade = nomeAtividade;
  }
}

class ActivityService {
  getInputData() {
    let NomeAtividade = document.getElementById('Atividade').value;

    let atividade = new Atividade(NomeAtividade);
    return atividade;
  }

  registerActivity() {
    let atividade = this.getInputData()
    console.log('teste pre-fetch');
    fetch('https://localhost:44355/registerworkout/1', {
      method: "POST",
      body: JSON.stringify(atividade),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Atividade cadastrada com sucesso',
      showConfirmButton: false,
      timer: 2000
    }))
    console.log('teste fetch');
  }
}

export default ActivityService;