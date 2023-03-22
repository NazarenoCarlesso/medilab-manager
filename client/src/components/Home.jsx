import React from 'react'
import QuoterContainer from './QuoterContainer'
import PopularUI from './PopularUI'
import ReviewsUI from './ReviewsUI'
import EnterpriseUI from './EnterpriseUI'
import Contact from './Contact'
import Comment from './Comment'




export default function Home() {


    return (
        <div>
            <QuoterContainer />
            <EnterpriseUI />
            <PopularUI />
            <ReviewsUI />
            <Contact />

            <button type="button" class="btn btn-primary" 
            style={{position: "fixed",transform: "rotate(270deg)", bottom: "70%", right: "-10px",alignContent: "center",
            }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Comentar</button>
        
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




