const ExampleComponent = () => {
  return <p>Teste</p>
}

export default function App() {
  return (
    <TypeAnimation 
      sequence={[ 
        // A mesma substring no início será digitada apenas uma vez, inicialmente 
        'Estágiario de T.I', 
        1000,  // aguarde 1s antes de substituir
        'Suporte de T.I', 
        1000, 
        'Desenvolvedor Web', 
        1000, 
        'Recreador', 
        1000 
      ]} 
      wrapper="span" 
      speed={50} 
      style={{ fontSize: '2em', display: 'inline-block' }} 
      repeat={Infinity} 
    /> 
  ); 
}