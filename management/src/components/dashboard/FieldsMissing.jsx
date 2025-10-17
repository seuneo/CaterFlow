
function FieldsMissing({yesButton, noButton, closeButton}){

    return <div class="order-confirm-delete-bg">
    <div class="order-confirm-delete-box">

    <button  class="order-confirm-delete-box-close" onClick={closeButton}>x</button>
        <div class="order-confirm-delete-box-message">
            Fields missing
        </div>
        
        <div class="order-confirm-delete-box-buttons">
            <button class="order-confirm-delete-box-yes" onClick={yesButton}>Yes</button>
            <button class="order-confirm-delete-box-no" onClick={noButton}>No</button>
        </div>
        </div>
        
    </div>

}

export default FieldsMissing