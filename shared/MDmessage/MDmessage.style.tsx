import styled from 'styled-components';





export const MDmessageContainer= styled.div`
    

    background-color: #ef96aa;
border-bottom-right-radius: 100px;
padding: 1.2rem .9rem;
text-align: center;
/* display: flex; */
h2,p{
    color: white;
}

p{
    padding: .8rem 0;
}
img{
    width: 60%;
    /* height: 100%; */
}

@media screen and (min-width: 800px){
  
    height: 70vh;
    padding: 1.5rem;
    display: flex;
    align-items: center;

    img{
        width: 30%;
    }
    div{
        width: 60%;
        text-align: left;
    }
    .MDmessageContainer_sec_div{
        max-width: 900px;
        display: flex;
   flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    }
}
`