import styled from 'styled-components';
import hero_ecplie from '../../asset/hero_ecplie.png'






export const HeroSectionContainer = styled.div`
color: white;
/* border: 1px solid yellow; */
background-color: #f1f1f1;
overflow: hidden;
`
export const HeroSectionHalfPink = styled.div`
height: 70vh;
background-color:#e65778;
display: flex;
align-items: center;
border-bottom-right-radius: 100px;
position: relative;
background-image: url(${hero_ecplie.src});
background-repeat: no-repeat;
background-position-y: 200px;

.human_image,.gren_blob{
    display: none;
    position: absolute;
}
@media screen and (min-width: 800px){
    width: 70%;
    .human_image,.gren_blob{
    display: block;
}
.human_image{
    transform: translateX(700px);
    width: 400px;
}
.gren_blob{
    transform: translateX(650px);

}
}
`
export const HeroSecionContent = styled.div`


padding: 1rem;
text-align: center;
max-width: 500px;
margin: 0 auto;
h1{
    font-size: 1.2rem;
    color: #FFFFFF;
}p{
    font-size: .9rem;
    color: #FFFFFF;
    padding: .8rem 0;
}
button{
    width: 150px;
    border-radius: 10px;
    margin: 0 auto;
}

@media screen and (min-width: 900px){
text-align: left;
/* border: 1px solid red; */
transform: translateX(-100px);
    h1{
        font-size: 3rem;
    }
    button{
        margin: unset;
    }
}
`