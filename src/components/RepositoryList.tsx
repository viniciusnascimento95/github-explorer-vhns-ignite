import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

// Estatico dados
// const repository = {
//     name: 'unform',
//     description: 'Forms in React',
//     link: 'https://github.com/unform/unform'
// }

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[]);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios | <a href="https://github.com/Rocketseat" target="_blank" rel="noopener noreferrer">Rocketseat</a></h1>
            
            <ul>                
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}               
            </ul>
        </section>
    );
}