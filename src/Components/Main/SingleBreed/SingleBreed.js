import React from 'react';
import BreedDetails from '../BreedDetails/BreedDetails';

const SingleBreed = ({ breed }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const { name, image } = breed;

return (
    <>
        <div className="col mb-3">
            <div className="card h-100 border-0 shadow-sm">
                <img src={image?.url} className="card-img-top" style={{ height: '200px' }} alt="Dog" />
                <div className="card-body px-3">
                    <h6 
                        onClick={() => setIsOpen(true)}
                        style={{cursor: 'pointer'}} 
                        className="card-title text-center text-secondary" 
                        title='Show Details'
                    >
                        {name}
                    </h6>              
                    <BreedDetails breed={breed} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
                </div>
            </div>
        </div>
    </>
    );
};

export default SingleBreed;