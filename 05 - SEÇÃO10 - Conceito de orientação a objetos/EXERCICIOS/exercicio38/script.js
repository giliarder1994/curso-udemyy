class Endereco {
  constructor(rua, bairro, cidade, estado){
    this.rua = rua
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
  }

  set novaRua(novaRua){
    this.rua = novaRua
  }

  set novoBairro(novoBairro){
    this.bairro = novoBairro
  }

  set novaCidade(novaCidade){
    this.cidade = novaCidade
  }

  set novoEstado(novoEstado){
    this.estado = novoEstado
  }

}

let endereco = new Endereco("Rua Coronel Carlos Matos", "Saracuruna", "Duque de Caxias", "Rio de Janeiro")

console.log(endereco)

endereco.novaRua = "Rua Belarmino Gondim"

console.log(endereco)

endereco.novaCidade = "São Paulo"

console.log(endereco)