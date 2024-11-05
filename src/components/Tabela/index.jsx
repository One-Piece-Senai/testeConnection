import { useState } from 'react'



function Tabela({lista}){
    return(
        <>
         <table class="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">E-mail</th>
                <th scope="col">CPF</th>
                </tr>
            </thead>
            <tbody>
                {lista.map((item, index) =>{
                            return(
                                    <tr>
                                        <th scope="row">{index}</th>
                                        <td>{item.nome}</td>
                                        <td>{item.email}</td>
                                        <td>{item.cpf_cnpj}</td>
                                    </tr>
                                    )
                    })}
            </tbody>
            </table>
       </>
    )
  
}

export default Tabela;