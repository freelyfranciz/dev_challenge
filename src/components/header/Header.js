import React from 'react'
import styled from 'styled-components';

const NavHeader = styled.div`position: fixed;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    z-index: 100;
    left: 0;
    right: 0;
    background-color: white;
    background-image: url('/images/bg-header.png');
`;

export default function Header() {
    return (
        <NavHeader>
            <h1>Top 20 topics for "/r/ProgrammerHumor"</h1>
        </NavHeader>
    );
}

