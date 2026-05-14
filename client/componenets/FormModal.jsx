
import ReactModal from "react-modal";


const FormModal = (props) => {
    // eslint-disable-next-line react/prop-types
    const { show, handleClose } = props;

    return (
        <ReactModal
            isOpen={show}
            onRequestClose={handleClose}
            contentLabel="Form Modal"
            className="custom-modal"
            overlayClassName="custom-overlay"
             bodyOpenClassName="modal-open" 
        >
            <div>
                <h2 className="modal-h2">Request Sent</h2>
              
                <p className="modal-p">
                    Your request was sent, and I&apos;ll get back to you as soon as
                    possible. Thanks!
                </p>
                <div className="modal-div">
                    <button className="modal-btn" onClick={handleClose}>
                        OK
                    </button>
                </div>
            </div>
        </ReactModal>
    );
};

export default FormModal;
