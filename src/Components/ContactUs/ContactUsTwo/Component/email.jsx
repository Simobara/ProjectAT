import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const destinatari = [   //LOGIC BEHIND THE PROJECT 
    { id: 1, nome: 'Destinatario 1', email: 'destinatario1@example.com' },
    { id: 2, nome: 'Destinatario 2', email: 'destinatario2@example.com' },
    { id: 3, nome: 'Destinatario 3', email: 'destinatario3@example.com' }
];

const InviaEmail = (destinatario) => {
    emailjs.send('nome_del_servizio', 'nome_del_modello', {
        to_name: destinatario.nome,
        message: 'Contenuto dell\'email'
    }, 'user_id_di_emailjs')
        .then((response) => {
            console.log('Email inviata con successo a', destinatario.nome, response.text);
        })
        .catch((error) => {
            console.error('Si è verificato un errore durante l\'invio dell\'email:', error);
        });
}


//<<!------------------------PRINCIPALE--------------------------->


const EmailApp = () => {
    const [destinatarioSelezionato, setDestinatarioSelezionato] = useState(null);

    const handleSelezioneDestinatario = (destinatario) => {
        setDestinatarioSelezionato(destinatario);
    };

    const handleInviaEmail = () => {
        if (destinatarioSelezionato) {
            InviaEmail(destinatarioSelezionato); // send email -> calling function InviaEmail
        }
    };

    return (
        <div>
            <h2>Seleziona un destinatario:</h2>
            <ul>
                {destinatari.map((destinatario) => (
                    <li key={destinatario.id} onClick={() => handleSelezioneDestinatario(destinatario)}>
                        {destinatario.nome}
                    </li>
                ))}
            </ul>

            {destinatarioSelezionato && (
                <div>
                    <h3>Destinatario selezionato: {destinatarioSelezionato.nome}</h3>
                    <button onClick={handleInviaEmail}>Invia Email</button>
                </div>
            )}
        </div>
    );
}

export default EmailApp;
