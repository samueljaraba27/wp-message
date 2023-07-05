import './App.css'

function App() {

  const prefijos = [
    {
      name: "Alemania",
      prefijo: "+49"
    },
    {
      name: "Argentina",
      prefijo: "+54"
    },
    {
      name: "Australia",
      prefijo: "+61"
    },
    {
      name: "Austria",
      prefijo: "+43"
    },
    {
      name: "Bélgica",
      prefijo: "+32"
    },
    {
      name: "Bulgaria",
      prefijo: "+359"
    },
    {
      name: "Canadá",
      prefijo: "+1"
    },
    {
      name: "Colombia",
      prefijo: "+57"
    },
    {
      name: "Croacia",
      prefijo: "+385"
    },
    {
      name: "Eslovaquia",
      prefijo: "+421"
    },
    {
      name: "Eslovenia",
      prefijo: "+386"
    },
    {
      name: "España",
      prefijo: "+34"
    },
    {
      name: "EstadosUnidos",
      prefijo: "+1"
    },
    {
      name: "Estonia",
      prefijo: "+372"
    },
    {
      name: "Finlandia",
      prefijo: "+358"
    },
    {
      name: "Francia",
      prefijo: "+33"
    },
    {
      name: "Grecia",
      prefijo: "+30"
    },
    {
      name: "Holanda",
      prefijo: "+31"
    },
    {
      name: "Irlanda",
      prefijo: "+353"
    },
    {
      name: "Islandia",
      prefijo: "+354"
    },
    {
      name: "Italia",
      prefijo: "+39"
    },
    {
      name: "Letonia",
      prefijo: "+371"
    },
    {
      name: "Lituania",
      prefijo: "+370"
    },
    {
      name: "Luxemburgo",
      prefijo: "+352"
    },
    {
      name: "Malta",
      prefijo: "+356"
    },
    {
      name: "Marruecos",
      prefijo: "+212"
    },
    {
      name: "México",
      prefijo: "+52"
    },
    {
      name: "Noruega",
      prefijo: "+47"
    },
    {
      name: "Polonia",
      prefijo: "+48"
    },
    {
      name: "Portugal",
      prefijo: "+351"
    },
    {
      name: "ReinoUnido",
      prefijo: "+44"
    },
    {
      name: "Rusia",
      prefijo: "+7"
    },
    {
      name: "Suecia",
      prefijo: "+46"
    },
    {
      name: "Suiza",
      prefijo: "+41"
    },
    {
      name: "Venezuela",
      prefijo: "+58"
    },
  ]

  const btnEnviar = (e) => {
    let indicator = document.getElementById('indicator');
    let phone = document.getElementById('phone');
    let msg = document.getElementById('msg');
    e.target.setAttribute('href', `https://api.whatsapp.com/send/?phone=${indicator.value}${phone.value}&text=${msg.value}`);
  }

  return (
    <div className='wp-content-card'>
      <article className='wp-card-info'>
        <header className='wp-card-header'>
          <img className='wp-card-avatar' src="https://yt3.googleusercontent.com/vRF8BHREiJ3Y16AbMxEi_oEuoQlnNNqGpgULuZ6zrWSAi24HcxX3Vko42RN8ToctH-G0qlWd=s900-c-k-c0x00ffffff-no-rj" alt="" />
          <div className='wp-card-header-title'>
            <select className='contenedor' name="" id="indicator">
              {
                prefijos.map(({ prefijo, index }) => (<option value={prefijo.replaceAll('+', '')}>{prefijo}</option>))
              }
            </select>
            <input type="text" id='phone' autoComplete='off' />
          </div>
        </header>
        <main>
          <div>
            <strong>Envia mensajes de WhatsApp Sin agregar a tus contactos</strong>
          </div>
        </main>
        <footer className='wp-footer'>
          {/* <input type="text" name="" id="" /> */}
          <textarea name="" id="msg" cols="30" rows="10"></textarea>
          <a href="" onClick={btnEnviar} id='enviar'>Enviar</a>
        </footer>
      </article>
    </div>
  )
}

export default App
