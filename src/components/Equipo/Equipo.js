import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like } = props

    return <>
        {colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <input type="color" 
        className="input-color" 
        value={colorSecundario}
        onChange={(evento) => {
            actualizarColor (evento.target.value, id)
        }}
        />    
        <h3 style={{borderColor: colorPrimario}} >{titulo}</h3>
        <div className="colaboradores">
        {
            colaboradores.map 
                ((colaborador, index)=> <Colaborador 
                datos={colaborador} 
                key={index}
                colorPrimario = {colorPrimario}
                eliminarColaborador = {eliminarColaborador}
                like = {like}
            />)
        }
        </div>
        </section>
    }
    </>
}
export default Equipo