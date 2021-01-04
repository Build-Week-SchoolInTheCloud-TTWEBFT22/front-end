import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Home () {

    const LinkChange = styled.div `
    display: flex;
    justify-content: space-around;
    color: ${(props) => props.theme.black};
    border: 2px solid ${(props) => props.theme.tertiaryColor};
    margin: 5%;
    padding: 5% 5%;
    font-size: 2em;
    `;

return(
<LinkChange>
<Link>Teacher</Link>
<Link>Student</Link>
<Link>Voluneteer</Link>
</LinkChange>
)
}

export default Home;