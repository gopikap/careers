import React from 'react';
import { Modal } from "../../../_shared/Modal"
import { InputForm } from "../InputForm"

export const AddItemModal = (props) => {
    const { show, onClose, title, formFields, onChange, data, onAdd, hasEmptyFields } = props;
    return(
        <Modal
                className   ='modal'
                show        ={show}
                onClose     ={onClose}
                title       ={title}>
                <InputForm
                    formFields      ={formFields}
                    onChange        ={onChange}
                    sectionData     ={data}
                    onAdd           ={onAdd}
                    hasEmptyFields  ={hasEmptyFields}
                />
        </Modal>
    )
}