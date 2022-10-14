import styled from 'styled-components';
import { ListedInfoProp } from './ListedInfo';


export const ListedInfoContainer= styled.div`


.listedInfoMainImage{
    width: 100%;
    height: 100%;

}
`
export const ListedInfoContainerContent= styled.div<ListedInfoProp>`
    padding: 1rem;
    max-width: 1200px;
    margin: 0 auto;
    h3{
        font-size: 1rem;
        display: block;
        margin: 0 auto;
        width: 200px;
        /* border: 1px solid red; */
        img{
            /* width: 10%; */
            margin-right: 5px;
        }
    }

    ul{
        padding: 1rem 1.2rem;
        font-size: .9rem;
        text-align: center;
        img{
            margin-right:5px ;
        }
        li{
            margin: .5rem 0;
        }
    }

    
    @media screen and (min-width:900px ){
        display: flex;
flex-direction:  ${(props)=>props.variant=='var1'?'row-reverse':'row'};

align-items: center;
justify-content: space-between;

    }

    @media screen and (min-width:900px ){
        .listedInfoMainImage{
            width:45%;
        }
        &>div{
            width: 45%;

            /* border: 1px solid red; */
        }
        ul{
            text-align: left;
        }
        h3{
            /* margin: unset; */
        }
    }
`