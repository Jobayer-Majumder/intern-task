import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        bottom: 'auto',
        width: '90%',
        height: '80vh',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

Modal.setAppElement('#root')

const BreedDetails = ({ modalIsOpen, setIsOpen, breed }) => {
    const {
        image,
        name,
        bred_for,
        breed_group,
        country_code,
        height,
        weight,
        life_span,
        temperament
    } = breed;

    return (
        <>
            <div className='bg-dark'>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setIsOpen(false)}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    
                    <div className="container bg-light p-3 rounded">
                        <div className='text-end mb-3'>
                            <button className='btn btn-outline-danger' onClick={() => setIsOpen(false)}>close</button>
                        </div>
                        <div className="row row-cols-md-2">
                            <div className="col-md-4 p-3 d-flex flex-column justify-content-center align-items-center">
                                <img src={image?.url} style={{ height: '150px', width: '200px', borderRadius: '8px', marginBottom: '8px' }} alt="" />
                                <h6>{name}</h6>
                            </div>
                            <div className="col-md-8 p-3">
                                <table className="table caption-top table-hover">
                                    <caption>Details</caption>
                                    <tbody>
                                        <tr>
                                            <th><small>Country</small></th>
                                            <td><small>{country_code}</small></td>
                                        </tr>
                                        <tr>
                                            <th><small>Breed For</small></th>
                                            <td><small>{bred_for}</small></td>
                                        </tr>
                                        <tr>
                                            <th><small>Height</small></th>
                                            <td><small>(Imperial {height?.imperial}) (Metric {height?.metric})</small></td>
                                        </tr>
                                        <tr>
                                            <th>Weight</th>
                                            <td><small>(Imperial {weight?.imperial}) (Metric {weight?.metric})</small></td>
                                        </tr>
                                        <tr>
                                            <th><small>Life span</small></th>
                                            <td><small>{life_span}</small></td>
                                        </tr>
                                        <tr>
                                            <th><small>Breed group</small></th>
                                            <td><small>{breed_group}</small></td>
                                        </tr>
                                        <tr>
                                            <th><small>Temperament</small></th>
                                            <td><small>{temperament}</small></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
};

export default BreedDetails;