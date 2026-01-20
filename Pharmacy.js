import React, { useState } from 'react';
import './Pharmacy.css';

const Pharmacy = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const medicines = [
    {
      id: 1,
      name: 'Paracetamol 500mg',
      price: 25,
      image: './paracetamol.jpeg',
      alt: 'Paracetamol'
    },
    {
      id: 2,
      name: 'Cough Syrup',
      price: 80,
      image: 'https://i.postimg.cc/8zXSdWB6/cough-syrup.png',
      alt: 'Cough Syrup'
    },
    {
      id: 3,
      name: 'Antibiotic Tablets',
      price: 150,
      image: 'https://i.postimg.cc/8kMBGgqB/antibiotic.png',
      alt: 'Antibiotic'
    },
    {
      id: 4,
      name: 'Vitamin D Capsules',
      price: 199,
      image: 'https://i.postimg.cc/QdxH56Nd/vitamin-d.png',
      alt: 'Vitamin D'
    },
    {
      id: 5,
      name: 'ORS Glucose',
      price: 35,
      image: 'https://i.postimg.cc/VN7ZrL5y/glucose.png',
      alt: 'ORS'
    },
    {
      id: 6,
      name: 'Hand Sanitizer 100ml',
      price: 45,
      image: 'https://i.postimg.cc/8PSyVJqZ/hand-sanitizer.png',
      alt: 'Sanitizer'
    },
    {
      id: 7,
      name: 'First Aid Box',
      price: 299,
      image: 'https://i.postimg.cc/15NWykV4/first-aid.png',
      alt: 'First Aid Kit'
    },
    {
      id: 8,
      name: 'BP Monitor',
      price: 1299,
      image: 'https://i.postimg.cc/N03vCFWm/blood-pressure.png',
      alt: 'BP Monitor'
    }
  ];

  const filteredMedicines = medicines.filter(medicine =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (medicine) => {
    alert(`${medicine.name} added to cart!`);
    // You can integrate cart functionality here
  };

  return (
    <div className="pharmacy-container">
      <div className="hero">
        Online Pharmacy – Medicines at Your Doorstep
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for medicines, brands, health products…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2>Popular Medicines</h2>

      <div className="products">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <div key={medicine.id} className="product-card">
              <img src={medicine.image} alt={medicine.alt} />
              <h3>{medicine.name}</h3>
              <p>₹{medicine.price}</p>
              <button onClick={() => handleAddToCart(medicine)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
            No medicines found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Pharmacy;
