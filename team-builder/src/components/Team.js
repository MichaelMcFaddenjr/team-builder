import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    font-size: 4rem;
`

export default function Team ({ details }) {
    if (!details){
        return <h3>Working on Fetching Details</h3>
    }

    return (
        <Container className='team-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
        </Container>
    )
}