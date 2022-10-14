import styled from 'styled-components';
import q2 from '../../asset/q2.png'
import q1 from '../../asset/q1.png'

export const TestimonialsContainer = styled.div`
max-width: 360px;
margin: 0 auto;
img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
}

@media screen and (min-width: 800px){
    margin:unset;
}
`
export const TestimonialsContentBox = styled.div`

padding: 1rem 1.4rem;
text-align: center;

.test_content{
    position: relative;
    color:#57576d;
}

.test_content::after,.test_content::before{
    content: '';
    width: 40px;
    height: 40px;
    /* background-color: red; */
    position: absolute;
}
.test_content::before{
    background-image: url(${q2.src});
    background-repeat: no-repeat;
    top: -30px;
    left: -10px;
}

.test_content::after{
    background-image: url(${q1.src});
    background-repeat: no-repeat;
    bottom: -50px;
}
.test_author{
    color: #DC214C;
}
`