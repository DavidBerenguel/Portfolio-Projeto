export default function Contacts() {

    return (
        <div id="contactForm">
            <div className="contactImage">
                <img src="Images/img_contact.png" alt="" />
            </div>
            <form>
                <h2>Contacte-me</h2>
                <div className="inputsForm">
                    <div>
                        <input type="text" placeholder="Primeiro nome" aria-label="Primeiro nome" name="firstName" />
                        <input type="email" placeholder="Email" aria-label="Email" name="email" />
                    </div>
                    <div>
                        <input type="text" placeholder="Segundo nome" aria-label="Segundo nome" name="secondName" />
                        <input type="tel" placeholder="Número telemóvel" aria-label="Número telemóvel" name="phone" />
                    </div>
                </div>
                <textarea placeholder="Menssagem" aria-label="Menssagem" name="menssagem" />
                <button className="btnForm" type="submit">Enviar</button>
            </form>
        </div>
    );
}

