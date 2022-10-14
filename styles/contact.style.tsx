import styled from 'styled-components';


export const ContactContainer =styled.div`



form{
    padding: 1rem;
    max-width: 500px;
    margin: 0 auto;
@media screen and (min-width: 800px){
    
    button{
        width: 150px;
    }
}

}
`
export const ContactContentContainer =styled.div`

@media screen and (min-width: 800px){ 
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* border: 1px solid red; */
        max-width: 1200px;
        margin: 0 auto;
}
`


export const ContactPane =styled.div`
    padding: 1rem;

    max-width: 300px;
    margin:0 auto;

    h3{
        font-size: 1rem;
        padding: .3rem 0;
    }
    span{
        display: block;
    }
`