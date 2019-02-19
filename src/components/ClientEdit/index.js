import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import Arrow from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import './index.css';



class ClientEdit extends Component {

    constructor(props){
        super(props);

        this.state = {
            id : null,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        console.log(target, value, name);
        console.log(this.state);

        let data = {...this.state.data};
        data[name] = value;

        this.setState({data});

    }

    async componentDidMount(){
        if (this.props.match.params.id !== 'new'){
            try{
                console.log("Doing get");
                const {id} = this.props.match.params;
                this.setState({ id : this.props.match.params.id});
                this.getClient(id);
            }catch(error){
                this.props.history.push('/');
            }
        }else{
            this.setState({ id : 'new',
                data : {
                    nombre: '',
                    apellido : '',
                    email : ''
                }
            });
        }
           

       
    }


    getClient = id =>{
        //fetch
        const URL = `/api/clientes/${id}`;
        fetch(URL).then( (prom) =>{
          return prom.json();
        }).then( data => {
          this.setState({data});
        }).catch( error => {
          console.log (error);
        });


    }


    async handleSubmit(event) {
        event.preventDefault();
        const {id, data} = this.state;

        let URL = null;
        let METHOD = null;

        if (id !=='new'){
            URL = `/api/clientes/${id}`;
            METHOD = 'PUT'
        }else{
             URL = `/api/clientes/`;
             METHOD = 'POST'
        }
        
        let data2 = {
            nombre: data.nombre,
            apellido: data.apellido,
            createAt: "2017-01-01 01:01:01",
            email: data.email
        }
        
        console.log(URL, METHOD);

        await fetch(URL, {
          method: METHOD,
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data2),
        });
        this.props.history.push('/');

    }



    render(){
        const { id, data }  =  this.state;
        let tituloForm = null;
        if (id === 'new') {
            tituloForm = "Nuevo cliente";
        } else{
            tituloForm = "Editar cliente id : " + id;
        }

       

        const renderForm = (data) =>{
            return (
            
            <form  autoComplete="off" className="form" onSubmit={this.handleSubmit}>
            <h1 className="tituloForm">{tituloForm}</h1>
                <div id="textField">
                <TextField
                    required
                    id="standard-required"
                    label="Nombre"
                    margin="normal"
                    name="nombre"
                    value={data.nombre}
                    onChange={this.handleChange}
                />
                </div>
                <div id="textField">
                <TextField
                    required
                    id="standard-required"
                    label="Apellido"
                    margin="normal"
                    name="apellido"
                    value={data.apellido} 
                    onChange={this.handleChange}/>
                </div> 
                <div id="textField">
                <TextField
                    required
                    id="standard-required"
                    label="Email"
                    margin="normal"
                    name="email"
                    value={data.email}
                    onChange={this.handleChange} />
                </div>
                <div className="buttonSubmit">
                <Fab variant="extended" aria-label="Delete"  type="submit" >
                        <SaveIcon/>
                        Save
                </Fab>
                <Fab variant="extended" aria-label="Delete" href="/">
                    <Arrow />
                     Back
                </Fab>
                </div>

            </form>
    
            );
        }

        return (
            <div>
                {
                    id && data || id === 'new' ? 
                    renderForm(data) :
                    <LinearProgress id="linearProgress"/>
                    
                    
                }
                                   
            </div>
        );
    }

}


export default ClientEdit;

