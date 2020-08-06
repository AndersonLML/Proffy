import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4" alt="Max Dickinson"/>
                <div>
                    <strong>Max Dickinson</strong>
                        <span>React</span>
                    </div>    
                </header>

                <p>
                    Apaixonado por tecnologia.
                    <br />
                    Procuro estudar mais e mais a cada dia para resolver problemas e programar soluções nas tecnologias mais atuais do mercado.
                </p>
                
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
                </footer>
        </article>    
    );
}