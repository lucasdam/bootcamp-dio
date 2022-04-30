class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    get saldo() {
        return this._saldo
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return console.log('Operação negada. Saldo insuficiente.')
        }

        this._saldo = this._saldo - valor
        return this._saldo
    }

    depositar(valor) {
        this._saldo = this._saldo + valor
        return this._saldo
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero)
        this.tipo = 'corrente'
        this._cartaoCredito = cartaoCredito
    }

    get cartaoCredito() {
        return this._cartaoCredito
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor
    } 
}


class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'poupanca'
    }
}


class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero)
        this.tipo = 'universitaria'
    }

    sacar(valor) {
        if (valor > 500) {
            return console.log('Operação negada. Não é permitido sacar mais que 500 reais na conta universitária.')
        } else {
            this._saldo = this._saldo - valor
        }
    }
}

/* Testando Conta Corrente */
const minhaConta = new ContaCorrente(1, 234, true)

console.log('1', minhaConta.saldo)

minhaConta.depositar(1000)

console.log('2', minhaConta.saldo)

minhaConta.sacar(500)

console.log('3', minhaConta.saldo)

minhaConta.sacar(600)

/* Testando Conta Poupança e Conta Universitária */
const contaPoup = new ContaPoupanca(1, 22)

const contaUni = new ContaUniversitaria(1, 22)

contaUni.depositar(1000)

console.log('4', contaUni.saldo)

contaUni.sacar(550)