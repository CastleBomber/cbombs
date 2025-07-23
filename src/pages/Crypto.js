import crypto1 from "../images/crypto-page/crypto-1.jpg";
import crypto2 from "../images/crypto-page/crypto-2.jpg";
import mongoDB from "../images/crypto-page/mongo-db.jpg";

export default function Crypto() {
    return (
        <div className="page-crypto">
            <header>
                <h1>Crypto Stuff</h1>
            </header>
            <main>
                    <img src={crypto1} alt="Web3 Crypto App" className="crypto-project-image" />
                    <h2>  [Home Page]  </h2>
                    <p>Web3 crypto app that allows users to send and log crypto transactions.</p>

                    <img src={crypto2} alt="Dashboard" className="crypto-project-image" />
                    <h2>  [Dashboard]   </h2>
                    <p>Pulls logged-in user's transactions from the MERN database.</p>

                    <img src={mongoDB} alt="MongoDB" className="crypto-project-image" />
                    <h2>    [MongoDB]   </h2>
                    <p>Users, transactions, and goals are stored and accessible with MongoDB.</p>
            </main>
            <footer>
                <p>*Footer*</p>
            </footer>
        </div>
    );
}
