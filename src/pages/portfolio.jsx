import React from 'react';
import expensetracker from '../assets/expense-tracker.jpg';
import stockmarketdashboard from '../assets/stock-market-dashboard.jpg';
import eftballistics from '../assets/eft.png';

const projects = [
    {
        name: 'Expense Tracker',
        image: expensetracker,
        description: 'A simple expense tracker to keep track of your expenses',
        link: 'https://tracker-of-expenses-5d12b9bcba5b.herokuapp.com/'
    },
    {
        name: 'Stock Market Dashboard',
        image: stockmarketdashboard,
        description: 'A dashboard to keep track of stock market prices',
        link: 'https://logan-fullerton.github.io/Stock-Market-Dashboard/'
    },
    {
        name: 'EFT Ballistics',
        image: eftballistics,
        description: 'A ballistics calculator for Escape from Tarkov',
        link: 'https://eft-ballistics.onrender.com/'
    }
];

function Portfolio() {
    return (
        <div className="container">
            <h1>Portfolio</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                            >
                                <img
                                    src={project.image}
                                    className="card-img-top"
                                    alt={project.name}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;




