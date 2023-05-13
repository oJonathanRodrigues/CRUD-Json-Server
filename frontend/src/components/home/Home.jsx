import React from "react";
import Main from "../template/Main";

export default props =>
    <Main icon="home" title="Início"
        subtitle="Segundo Projeto com React">
        <div className='display-4'>Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para desmonstração de um CRUD com Json-Server!</p>
    </Main>