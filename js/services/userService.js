export class User {
  constructor(Nome, Idade, Genero, Email, Senha) {
    this.Nome = Nome;
    this.Idade = Idade;
    this.Genero = Genero;
    this.Email = Email;
    this.Senha = Senha;
  }
}

class UserService {
  getInputData() {
    let Nome = document.getElementById('Nome').value;
    let Idade = document.getElementById('Idade').value;
    let Genero = document.getElementById('Genero').value;
    let Email = document.getElementById('Email').value;
    let Senha = document.getElementById('Senha').value;

    let user = new User(Nome, Idade, Genero, Email, Senha);
    return user;
  }

  validaEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  userValidation(user) {
    if(user.Nome.length < 3) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar usuario',
        text: 'Nome deve conter mais de 3 caracteres',
      })
      return false;
    }
    if(user.Senha.length <= 6) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar usuario',
        text: 'Senha deve conter 6 caracteres ou mais',
      })
      return false;
    }
    if(this.validaEmail(user.Email) == false) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar usuario',
        text: 'Email invalido',
      })
      return false;
    }
    return true;
  }

  registerUser() {
    let user = this.getInputData()
    if(this.userValidation(user)) {
      fetch('https://localhost:44355/register', {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(res => res.json())
      .then(Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario cadastrado com sucesso',
        showConfirmButton: false,
        timer: 2000
      }))
    }
  }

  getUser() {
    fetch('https://localhost:44355/get-user/1')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  deleteUser() {
    fetch("https://localhost:44355/delete-user/1", {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  updateUser() {
    let updatedUser = this.getInputData();
    fetch('https://localhost:44355/update-user/1', {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Informacoes do usuario atualizadas com sucesso',
      showConfirmButton: false,
      timer: 2000
    }))
    .then(res => res.json())
    .then(data => console.log(data))
  }
}

export default UserService;