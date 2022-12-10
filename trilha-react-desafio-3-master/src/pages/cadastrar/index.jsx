import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ContaText } from '../../components/ContaText'

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, Row, Wrapper } from './styles';

const Cadastrar = () => {


    const { control, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Cria sua conta login e make the change._</SubtitleLogin>
                <form>
                    <Input placeholder="Nome" leftIcon={<MdEmail />} name="nome"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form> 
                <br />
                <SubtitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as politicas de Uso da DIO.</SubtitleLogin>
                <Row>
                    <ContaText />
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastrar }