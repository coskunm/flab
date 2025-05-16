import React from 'react';
import brokerData from '../data/brokerData';
import BrokerCard from './BrokerCard';
import './BrokerList.css';

const BrokerList: React.FC = () => {
  return (
    <section className="broker-list" id="brokerlar">
      <div className="container">
        {brokerData.map((broker, index) => (
          <BrokerCard 
            key={broker.id} 
            broker={broker} 
            position={index + 1} 
            isTopRated={index === 0}
          />
        ))}

        
      </div>
    </section>
  );
};

export default BrokerList;