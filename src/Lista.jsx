import './Lista.css'
function Lista(){
    const readmore =[
        {n:"1",value:"Funcinária que dencuniou procurador diz que agressor 'despresava mulheres' e teme  sair na rua:'Muito medo'"},

        {n:"2",value:"Imposto de Renda 2022: Receita abre consultas ao 2º lote de restituição nesta  quinta; veja se você está no grupo"},

        {n:"3",value:"Governo opera pra evitar CPI do MEC, que ganhou força após prisão prisão de Milton Ribeiro"},

        {n:"4",value:"Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal;ficam feridos"},

        {n:"4",value:"Em Itajubá, assaltantes armados atacam agência da Caixa Econômica Federal;7 ficam feridos"},

        {n:"5",value:"Almir Sater é 'parado em blitz' e policiais tietam cantor: 'o senhor é dono dessa chalana?'"}
      ]

      const news = readmore.map(
        (r)=>
        <p className='titulo'>
           <div className='nu'>
            {r.nu}
            </div>
            {r.titulo}
        </p>
      )
      return(
        <div className='container'>
            
            {news}
            
        </div>
    );
    }
      export default Lista;