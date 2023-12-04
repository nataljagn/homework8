

const Contact = () => {


    const kontaktid = [
        {
            'title': 'Eraklienditeenindus',
            'content': 'Kirjuta või helista meie klienditoele, kui Sul on küsimusi oma tellimuse osas või vajad abi meie teenuste/toodete kasutamisel. ',
            'phone': '+372 680 4444',
            'email': 'klienditugi@delfi.ee'
        },
        {
            'title': 'Äriklienditeenindus',
            'content': 'Ärikliendid saavad oma tellimuse osas abi äriklienditeeninduselt.',
            'phone': '+372 680 4567',
            'email': 'ariklient@delfi.ee'
        },

    ]

    return (
        <div className="App-header"  >
            <div style={{ display: 'flex', flexDirection: 'column', padding: 40 }}>
                {kontaktid.map((kontakt) => (
                    <div >
                        <div><b>{kontakt.title}</b></div>
                        <div className="App-italic-text" >{kontakt.content}</div>
                        <div><b>Telefon:</b>  {kontakt.phone}</div>
                        <div><b>Meil:</b>  {kontakt.email}</div>
                        <br />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Contact;

