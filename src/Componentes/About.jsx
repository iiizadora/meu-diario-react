import Title from "./Title"
import Text from "./Text"
function About (props){
return(
  <div className="container_about">
<img src={props.image} alt={props.description} className="profile" />
<div className="container_profile">
<Title>Prazer, Izadora </Title> 
<Text>Ex- eng civil que decidiu fazer a migração de carreira depois dos 30 e atualmente trabalha como estagiária de QA na empresa Thomson Reuters. Sou aluna da turma ON17 da Reprograma e uma mulher apaixonada por tecnologia e pela área de front-end!</Text>
</div>
  </div>
)
}

export default About