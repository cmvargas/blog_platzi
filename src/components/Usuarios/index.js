import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
class Usuarios extends Component{
  
  componentDidMount(){
    this.props.traerTodos();
  }
  componentWillMount(){
    console.log('componentWillMount');
  }
 ponerFilas = ()=>(
   
  this.props.usuarios.map((usuario)=>(
    <tr key={usuario.id}>
      <td>
        {usuario.name}
      </td>
      <td>
        {usuario.email}
      </td>
      <td>
        {usuario.website}
      </td>
    </tr>
 ))
 );
  render(){
    return (
      <div>
        <table className="tabla">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Correo
            </th>
            <th>
              enlace
            </th>
          </tr>
        </thead>
        <tbody>
          {this.ponerFilas()}
        </tbody>
      </table>
      </div>  
    );
  }
}
const mapStateToProps = (reducers)=>{
  return reducers.usuariosReducer;
};
export default connect(mapStateToProps, usuariosActions)(Usuarios);