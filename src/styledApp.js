import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    width: 100%;

    .config{
        width: 90%;
        display: flex;
        padding: 1% 5%;
        justify-content: space-between;
         
        .logo{
            display: flex;
            align-items: center;
            width: 20%;
            justify-content: space-between;

            @media(max-width: 900px){
                width: 30%;  
            }
            @media(max-width: 600px){
                width: 40%;  
            }

            div{
                display: flex;
                width: 100%;
                p{
                    font-family: 'Noto Sans TC', sans-serif;
                    font-size: 1.8rem;
                    font-style: italic;
                    color: #115D8C;
                    font-weight: bold;
                    margin: 0;
                
                    img{
                        width: 20px;
                        height: 20px;
                    }
                    .configseta{
                            margin-right: -6px;
                    }
                }
            }

            .seta{
                width: 35px;
                height: 25px;
                border: solid lightgrey 1px;
                border-radius: 5px;
                align-items: center;
                justify-content: center;           

                img{
                    width: 10px;
                    height: 10px;
                }

                div{
                    width: 10px;
                    height: 2px;
                    background: lightgrey;
                }
            }
        }

        .acesso{
            display: flex;
            width: 50%;
            justify-content: space-between;
            
            p{
                font-size: 1rem;
                font-family: 'Noto Sans TC', sans-serif;
                color: grey;
            }

            div{
                align-items: center;
                width: 30%;
                text-align: center;
                background: #DDE9F0;
                border-radius: 10px;

                    @media(max-width: 800px){
                        width: 45%;
                    }
                    @media(max-width: 550px){
                        width: 55%;
                    }
         
                p{
                    padding:0;   
                    font-size: 1rem;
                    font-family: 'Noto Sans TC', sans-serif;
                    color: #115D8C;
                    font-weight: bold;    
                }
            }
        }
    }
    div{
        img{
            width: 100%;
        }
    }

`

export const Corpo = styled.div`
    background: #F5F8FA;
    display: flex;
    padding: 3% 5%;
    width: 90%;
    justify-content: space-between;

    @media(max-width: 700px){
        flex-direction: column;
    }

    .text{
        display: flex;
        flex-direction: column;
        width:30%; 

        @media(max-width: 700px){
            width: 100%;
        }

          h1{
            font-size: 3rem;
            margin: 0;
            font-family: 'Noto Sans TC', sans-serif;
            color: #123952;
            font-weight: bold;

                @media(max-width: 900px){
                    font-size: 2.5rem;
                }
            } 

        .subText{
            display: flex;
            flex-direction: column;
            width:100%;  

            @media(max-width: 700px){
            width: 100%;

                p{
                    text-align:justify;
                }
            }
        
            p{
                color: #123952;
                font-family: 'Noto Sans TC', sans-serif;
                font-size: 1.2rem;
                line-height: 30px;

                @media(max-width: 900px){
                    font-size: 1rem;
                    line-height: 25px;
                }
            }
            span{
                color: #617480;
                font-family: 'Noto Sans TC', sans-serif;
                line-height: 25px;

                @media(max-width: 900px){
                    font-size: .8rem;
                    line-height: 20px;
                }
            }
        }
    }
    
    .espec{
        width: 40%;
        display: flex;
        justify-content: space-between;
        transition: .2s;

        @media (max-width:1500px){
            width: 60%;
        }
        @media (max-width:700px){
            width: 100%;
            margin-top: 30px;
        }

    .box{
        background: #FFFFFF;
        width: 25%;
        border-radius: 15px;
        border: solid lightgrey 1px;

        @media(max-width: 900px){
            width: 30%;
        } 

        .icons{
            position: relative;
            background: #FFFFFF;
            width: 100%;
            height: 35%;
            border-radius: 15px 15px 0px 0px;
            border-bottom: solid lightgrey 1px;

            @media(max-width: 700px){
            height: 100px;
            } 
            
            img{
                padding-top: 40px;
                margin-left: 36px;
            }
            .bgimg{
                position: absolute;
                padding-top: 30px;
                margin-left: 25px;
            }
        }
        .static{
            width: 42%;
            padding-left: 25px;

                h1{
                    font-family: 'Noto Sans TC', sans-serif;
                    color: #123952;
                    font-weight: bold;

                    @media(max-width: 900px){
                        font-size: 1.5rem;
                    } 
                }
                p{
                    color: #617480;
                    font-family: 'Noto Sans TC', sans-serif;
                    line-height: 25px;

                    @media(max-width: 900px){
                        font-size: .8rem;
                    } 

                }
            }
        }
    }
`
export const Avaliacao = styled.div`

    background: #F5F8FA;
    display: flex;
    flex-direction: column;
    padding: 3% 5%;
    width: 90%;
   
    h1{
        font-family: 'Noto Sans TC', sans-serif;
        color: #123952;
        font-weight: bold;
    }

    .bigbox{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top:5%;
        position: relative;
        
            .smallbox{
                flex-direction: column;
                width: 20%;

                .imgconfig{
                        width: 100%;
                        
                        img{
                            width:100%;
                            border-radius: 15px 15px 0px 0px;
                        }

                        .nota{
                            position: absolute;
                            margin-left: 30px;
                            width: 40px;
                            height: 80px;
                            background: #F25D27;
                            border-radius: 10px;
                            flex-direction: column;
                            top: -15px;

                            @media(max-width: 850px){
                                width: 30px;
                                height: 60px; 
                                margin-left: 25px;      
                                border-radius: 7px;   
                            }
                            @media(max-width: 650px){
                                width: 20px;
                                height: 40px; 
                                margin-left: 20px;      
 
                            }        

                            img{
                                width:20px;
                                height:20px;
                                padding: 10px;  

                                @media(max-width: 850px){
                                    width:15px;
                                    height:15px;
                                    margin-left: -3px;
                                    margin-top: -3px;
                                }    

                                 @media(max-width: 650px){
                                    width:10px;
                                    height:10px;
                                    margin-left: -5px;
                                    margin-top: -5px;
                                }      
                            }    
    
                            p{
                                font-family: 'Noto Sans TC', sans-serif;
                                color: white;
                                font-weight: bold;
                                font-size: 1.2rem;
                                text-align: center;
                                margin: 0;
                                
                                @media(max-width: 850px){
                                    font-size: .9rem;
         
                                }  
                                @media(max-width: 650px){
                                    font-size: .7rem;
                                    margin-top: -8px;
         
                                }    
                            }
                        }
                    }

                .box2{
                background: #FFFFFF;
                width: 99%;
                height: 135px;
                border: solid lightgrey 1px;
                margin-top: -5px;
                border-radius: 0px 0px 15px 15px;
                
                    .title{
                        width: 100%;
                        height: 35%;
                        border-bottom: solid 1px lightgrey;
                        align-items: center;

                        p{
                            font-family: 'Noto Sans TC', sans-serif;
                            color: #123952;
                            font-weight: bold;
                            font-size: 1.2rem;
                            padding-left: 5%;
                                @media(max-width: 1100px){
                                    font-size: 1rem;
                                }
                                @media(max-width: 650px){
                                    font-size: .9rem;
                                }
                        }
                    }

                    .subtilte{
                        width: 90%;
                        height: 45%;
                        align-items: center;
                        display: flex;
                        padding: 0 5%;
                        justify-content: space-between;

                        img{
                            width:20px;
                            height:20px;

                            @media(max-width: 650px){
                                width:15px;
                                height:15px;
                            }
                        }

                        p{
                            font-family: 'Noto Sans TC', sans-serif;
                            color: #617480;
                            font-weight: bold;

                                @media(max-width: 650px){
                                    font-size: .7rem;
                                }     
                        }
                    }  
                }
            }
        }   
`
export const Destaque = styled.div`
    background: #F5F8FA;
    padding: 3% 5%;
    width: 90%;
    display: flex;
    
    .destaque{
        width:100%;
        border: solid 1px lightgrey;
        border-radius: 15px;
        background: #FFFFFF;
        display: flex;
        justify-content: space-between;

        .space{
            padding: 3% 5%;
            width: 100%;

            .atention{
                background: #F25D27;
                width: 60px;
                height: 20px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px;

                p{
                    margin: 0;
                    padding: 0;
                    color: white;
                    font-family: 'Noto Sans TC', sans-serif;
                    font-size: 0.6rem;
                    font-weight: bold;         
                }
            
                .circle{
                    background: #F25D27;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    border: solid 1px white;
                    text-align: center;
                    
                    P{
                        color: white;
                        padding: 0;
                        font-size: 0.4rem;
                        margin: 0;
                    }
                }
            }
            .configtext{
                width: 90%;
                  
                @media(max-width: 700px){
                    width: 100%;
                }

                h1{
                    font-family: 'Noto Sans TC', sans-serif;
                    color: #123952;
                    font-weight: bold;
                        @media(max-width: 700px){
                            font-size: 1rem;
                        }
                }
                p{
                    color: #617480;
                    font-family: 'Noto Sans TC', sans-serif;
                    line-height: 25px;

                    @media(max-width: 700px){
                            font-size: .8rem;
                        }
                        @media(max-width: 700px){
                            line-height: 15px;
                        }
                    }
                }
        }    
        img{
            border-radius: 0px 15px 15px 0px;

            @media(max-width: 900px){
                width: 60%;
            }
        }
    } 
`
export const Footer = styled.div`
    background: #FFFFFF;
    width: 100%;
    display: flex;
    align-items: center;

    p{
        width: 100%;
        color: grey;
        text-align: center;
    }
`