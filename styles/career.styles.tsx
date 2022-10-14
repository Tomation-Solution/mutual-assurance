import styled from 'styled-components';



export const CareerContainer = styled.div`
    padding: 1rem;

    @media screen  and (min-width: 800px){
        /* max-width: 900px; */
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`

export const CareerPane = styled.div`
        display: flex;
        flex-direction: column-reverse;
        /* border: 1px solid red; */
    img{
        width: 100%;
        display: block;
        border-radius: 10px;
    }

    div{
        padding: 1rem;
    }

    .jobs_de{
        overflow: hidden;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    @media screen and (min-width: 500px){
        flex-direction: row;
        width: 90%;
        div{
            width: 50%;
        }
        img{
            width: 50%;
            object-fit: cover;
            border-radius: unset;
        }
        .jobs_de{
            max-width: 500px;
        }
    }
`