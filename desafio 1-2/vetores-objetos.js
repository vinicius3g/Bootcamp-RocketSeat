const programadores = {
    nome: "josé",
    idade: 25,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
};

console.log(`${programadores.nome} tem ${programadores.idade}  e usa a tecnologia ${programadores.tecnologias[0].nome} e com especialidade em ${programadores.tecnologias[0].especialidade}`);