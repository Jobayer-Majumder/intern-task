import React from 'react';
import SingleBreed from '../SingleBreed/SingleBreed';

const Breeds = () => {
    const [breeds, setBreeds] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => {
                const twentyBreeds = data.slice(20, 40);
                setBreeds(twentyBreeds)
            })
    }, [])

    return (
        <section>
            <div className="container pt-5">
            <h3>Available Dogs <span className="badge brandBg mb-4">{breeds.length}</span></h3>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {
                        breeds.map((breed, index) =>
                            <SingleBreed key={index++} breed={breed} />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Breeds;