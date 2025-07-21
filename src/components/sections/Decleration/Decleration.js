import React from "react";

const Decleration=()=>{
   return(
   <>
    <div className="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSheet">
        <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-bottom-0">
            <h2 className="modal-title fs-5">Modal title</h2>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body py-0">
            <p>This is a modal sheet, a variation of the modal that docs itself to the bottom of the viewport like the newer share sheets in iOS.</p>
            </div>
            <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <button type="button" className="btn btn-lg btn-primary" onClick={closeModal}>Save changes</button>
            <button type="button" className="btn btn-lg btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
            </div>
        </div>
        </div>
    </div>
  </>) 
}

export default Decleration;