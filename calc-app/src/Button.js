import ButtonBS from 'react-bootstrap/Button';





export const Button = ({propriedades = []}) => {

    

return(
    
    
    propriedades.map((propriedade, propIndex) => (

        <ButtonBS  key={propIndex} onClick={propriedade.onClick} value = {propriedade.value} className = {propriedade.className}  variant="light">{propriedade.label}</ButtonBS>

    ))

    

    
)

}




