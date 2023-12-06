const calculaIdade = (req, res) => {
    const hoje = new Date(Date.now());
    const dataNasc = new Date('2003-04-14');
    const idade = hoje.getFullYear() - dataNasc.getFullYear()
    res.json({
        "nome": "Bruno",
        "cidade": "Monte Mor",
        "profissão": "programador",
        "nascimento": dataNasc.getFullYear(),
        "idade": idade,
    })
}


module.exports = {
    calculaIdade
}