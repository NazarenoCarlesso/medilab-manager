import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import QuoterContainer from './QuoterContainer'
import PopularUI from './PopularUI'
import ReviewsUI from './ReviewsUI'
import EnterpriseUI from './EnterpriseUI'
import Contact from './Contact'
import Comment from './Comment'





export default function Home() {
    const toke = useSelector((state) => state.token);
    const [mostrarBoton, setMostrarBoton] = useState(false);


    useEffect(() => {
        if (toke) {
            setMostrarBoton(true);
        } else {
            setMostrarBoton(false);
        }
    }, [toke]);

    return (
        <div>
            <QuoterContainer />
            <EnterpriseUI />
            <PopularUI />
            <ReviewsUI />
            <Contact />

            {mostrarBoton && (<button type="button" class="btn btn-primary"
                style={{
                    boxShadow: "2px 1px 80px 1px", fontFamily: "Lato, Arial, sans-serif", borderRadius: "0px 20px 20px 20px",
                    position: "fixed", transform: "rotate(270deg)", bottom: "50%", width: "100px", height: "40px", right: "-10px", alignContent: "center",
                }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Comentar</button>)}

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Comparte tu opinión: Déjanos saber lo que piensas</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {<Comment />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

