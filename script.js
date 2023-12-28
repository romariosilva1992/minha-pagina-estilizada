document.addEventListener('DOMContentLoaded', function () {
    // Obtém todos os elementos com a classe 'project'
    const projects = document.querySelectorAll('.project');

    // Adiciona um ouvinte de clique a cada projeto
    projects.forEach(project => {
        project.addEventListener('click', () => {
            // Remove a classe 'active' de todos os projetos
            projects.forEach(p => p.classList.remove('active'));

            // Adiciona a classe 'active' ao projeto clicado
            project.classList.add('active');
        });
    });
});
