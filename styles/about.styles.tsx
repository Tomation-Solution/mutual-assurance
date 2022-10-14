import styled from 'styled-components';




export const AboutContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
`
export const AboutInfoContainer = styled.div`


@media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`
export const AboutPane = styled.div`
    padding: 1rem;
    text-align: center;
    p{
        max-width: 400px;
        margin:.4rem auto;
    }
    img{
        width: 70%;
        margin: 0 auto;
        display: block;
    }
`
export const AboutBenefitPane = styled.div`
text-align: center;
`

export const TeamContainer= styled.div`

    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: center;
    align-items: center;


    &>div{
        padding: 1rem;
        text-align: center;
        img{    
            width: 50%;
            margin: 0 auto;
            display: block;
        }
        h3{
            font-size: 1rem;
        }
        p{
            margin:unset;
        }
    }

    @media screen and (min-width: 800px){
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 900px;
            margin: 0 auto;

            &>div{
                img{
                    width: 90%;
                }
            }
    }
`