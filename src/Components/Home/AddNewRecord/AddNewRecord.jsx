import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import "./styles.css"
import ProButton from "../../common/ProButton/ProButton";
// import car from "../../../Assets/Images/car.jpg";

const AddNewRecordForm = ({ rowsLength, onClosePopup, onCancel, onSubmitForm }) => {
    const [autoGeneratedId, setAutoGeneratedId] = useState(-1)
    const [imageSrc, setImageSrc] = useState(null)

    useEffect(() => {
        resetButton()
    }, [])

    useEffect(() => {
        setAutoGeneratedId(rowsLength || -1)
    }, [rowsLength])

    const [formData, setFormData] = useState({
        immagine: null,
        classeWaste: "",
        Quantita: "",
        address: "",
        descrizione: "",
    });
    const handleChange = (e) => {
        const name = e.target.name;
        if (name === "immagine") {
            const file = e.target.files[0]
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImageSrc(reader.result)
            };
        }
        let val = e.target.value;
        setFormData({ ...formData, [name]: val });
    }
    const resetButton = () => {
        setFormData({
            immagine: null,
            classeWaste: "",
            Quantita: "",
            address: "",
            descrizione: "",
        });
        setImageSrc(null)
    }
    const SubmitForm = (e) => {
        e.preventDefault();
        onSubmitForm({ ...formData, id: autoGeneratedId + 1, immagine: imageSrc })
        resetButton()
    }
    return (
        <div className="form-wrapper">
            <span className="form-heading">ADD NEW RECORD</span>
            <span className="close-btn" onClick={onClosePopup}>X</span>
            <form className="container mt-3 mb-3">
                <Row className="mb-3">
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Id Annuncio</Form.Label>
                        <Form.Control className="form-control" type="text" name="id" value={autoGeneratedId + 1} disabled title="Locked! Id is auto generated" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Classe Waste</Form.Label>
                        <Form.Control className="form-control" type="text" name="classeWaste" value={formData.classeWaste} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control className="form-control" type="text" name="address" value={formData.address} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className=" col col-sm-6" controlId="formGridAddress1">
                        <Form.Label>Quantita</Form.Label>
                        <Form.Control className="form-control" type="text" name="Quantita" value={formData.Quantita} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                        <Form.Label>Immagine</Form.Label>
                        <Form.Control className="form-control" type="file" name="immagine" value={formData.immagine} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGridlabel" className="col col-sm-6">
                        <Form.Label>Descrizione</Form.Label>
                        <Form.Control as="textarea" rows="{3}" className="form-control" name="descrizione" value={formData.descrizione} onChange={handleChange} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group controlId="formGridCheckbox" className="d-flex w-100 col col-sm-6">
                        <ProButton text="Submit" customStyleClass="submit-btn" clicked={SubmitForm} />
                        <ProButton text="Cancel" customStyleClass="cancel-btn" clicked={onCancel} />
                    </Form.Group>
                </Row>
            </form>
        </div>
    );
}

export default AddNewRecordForm;