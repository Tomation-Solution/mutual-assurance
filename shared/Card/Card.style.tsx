import styled from 'styled-components';



export const CardContainer= styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    /* border: 1px solid red; */
    max-width: 360px;
    margin: 10px auto;
    text-align: left;

    h3{
        color: #DC214C;
    }
    div{
        padding: 1rem;
    }

    img{
        width: 100%;
        height: 100%;
    }
    p{
        color: #a09999;
        padding: .9rem 0;
    }
    button{
        width: 150px;
        margin-left: auto;
    }

    @media screen  and (min-width: 800px){
        margin: unset;
        max-width: unset;
        width: 24%;
    }
`



export const CardGrid = styled.div`
    

    @media screen  and (min-width: 500px){
        display: flex;
        flex-wrap: wrap;
    }

    @media screen  and (min-width: 800px){
        display: flex;
        justify-content: space-between;
        max-width: 1300px;
        margin: 0 auto;
    }

`