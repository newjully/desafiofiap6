import React from 'react';
import styled from '@emotion/styled';

const HeaderStyle = styled.div`
    width: 100%;
    height: 40vh;
    margin: 0%;
    text-align: center;
    h1{
        font-size: 5rem;
        color: #f80174;
    }
    p{
        font-size: 1.5rem;
        color: #c4037a;
    }
`

export default function Header() {
  return (
    <HeaderStyle>
        <h1>Bem vindo ao projeto em grupo!</h1>
        <p>Agora analisem o arquivo index.tsx na pasta pages</p>
    </HeaderStyle>

  )
}
