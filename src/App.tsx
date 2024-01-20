import './App.css'
import { Card, Header, Main, Imagem, Container, Input, TextArea, Button, Feed, H3, P } from './styles/globalStyles'
import logo from '../public/img/bx-logo.png'
import trash from '../public/img/trash.png'
import deleted from '../public/img/delete.png'
import { useEffect, useState } from 'react'


interface Post {
  id: number;
  nome: string;
  mensagem: string;
  imagem: number;
}


function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [random, setRandom] = useState<number>(1);

  const [inputNome, setInputNome] = useState<string>('');
  const [inputMensagem, setInputMensagem] = useState<string>('');

  useEffect(() => {
    //Realiza o carregamento de todos os dados vindo do localStorage
    const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]') as Post[];

    //É realizado uma verificação para se caso não haja nenhum dado ele crie ao menos um post
    if(storedPosts.length == 0) {
      const postBase = {
        id: Date.now(),
        nome: 'Kaynan Wallen',
        mensagem: 'Olá, esta é uma aplicação feita em React utilizando styled components e também typescript, ela também é totalmente responsiva',
        imagem: 1,
      };
      setPosts([...posts, postBase]);
      localStorage.setItem('posts', JSON.stringify([...posts, postBase]));
    }


    setPosts(storedPosts);
  }, []);


  //Função para realizar a alteração das imagem randomicamente
  function handleRandomImage() {
    setRandom(Math.floor(Math.random() * 3) + 1);
    console.log(random)
  }


  //Função para adicionar um novo post no storage
  function adicionarPost(){
    if(!inputNome && inputMensagem) {
      alert('Deve haver dados nos campos de "nome" e "Mensagem"')
    }

    const novoPost = {
      id: Date.now(),
      nome: inputNome,
      mensagem: inputMensagem,
      imagem: random,
    };

    setPosts([...posts, novoPost]);
    localStorage.setItem('posts', JSON.stringify([...posts, novoPost]));

    setInputNome('')
    setInputMensagem('')
  };


  //Função para remover um post no storage
  function excluirPost(id: number) {
    const novosPosts = posts.filter((post) => post.id !== id);

    setPosts(novosPosts);

    localStorage.setItem('posts', JSON.stringify(novosPosts));
  };

  return (
    <>
      <Header>
        <img src={logo} alt='logo buildbox' />
      </Header>

      <Main>
        <Card cardSize='md'>
          <Container flexdirection='row' gap={15} alignItems='center' justifyContent='center'>
            <Container flexdirection='col' gap={15} alignItems='center' justifyContent='center'>
              <Imagem imageSize='lg' imageRadius='lg' src={`../public/img/photo-base${random}.png`} alt='Foto de perfil 1' />
              <Button buttonBackground='color' onClick={() => handleRandomImage()}>Alterar Imagem</Button>
            </Container>
            <Imagem imageSize='md' imageRadius='none' cursor='pointer' src={trash} alt='Icon lixeira' />
          </Container>

          <Container flexdirection='col' gap={15} alignItems='center' justifyContent='center'>
            <Input type='text' placeholder='Nome' id='usuario' value={inputNome} onChange={(e) => setInputNome(e.target.value)} />
            <TextArea placeholder='Mensagem' id='mensagem' value={inputMensagem} onChange={(e) => setInputMensagem(e.target.value)} />
          </Container>

          <Container flexdirection='row' gap={15} alignItems='center' justifyContent='end'>
            <Button buttonBackground='transparent' onClick={() => {
                  setInputNome('')
                  setInputMensagem('')
            }}>Descartar</Button>
            <Button buttonBackground='color' onClick={() => adicionarPost()}>Publicar</Button>
          </Container>
        </Card>


        <Feed>
          <H3>Feed</H3>

          {posts.length > 0 ? (
            <>
              {posts.map((post) => (
                <Card cardSize='lg' key={post.id}>
                  <Container flexdirection='col' gap={15} alignItems='end' justifyContent='center'>
                    <Imagem src={deleted} imageSize='sm' imageRadius='none' cursor='pointer' onClick={() => excluirPost(post.id)}/>
                  </Container>

                  <Container flexdirection='row' gap={25} alignItems='center' justifyContent='start'>
                    <Imagem src={`../public/img/photo-base${post.imagem}.png`} imageSize='lg' imageRadius='lg' />
                    <Container flexdirection='col' gap={15} alignItems='start' justifyContent='center'>
                      <P fontSize='lg'>{post.mensagem}</P>

                      <Container flexdirection='col' gap={5} alignItems='center' justifyContent='center'>
                        <P fontSize='sm' color='#5f5f5f'>Enviado Por</P>
                        <P fontSize='md' color='#7a7a7a' fontweight='400'>{post.nome}</P>
                      </Container>
                    </Container>
                  </Container>
                </Card>
              ))}
            </>
          ) : (
            <P> Sem posts </P>
          )}
        </Feed>
      </Main>

    </>
  )
}

export default App
