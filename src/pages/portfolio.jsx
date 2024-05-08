import React from 'react';

function Portfolio() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <h1>My Project Portfolio</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h2 className="bg-dark text-light">Expense Tracker</h2>
                    <div>
                        <a href='#'>
                            <img src="src\assets\expense-tracker.jpg" alt="Expense Tracker" className='img-fluid' />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h2 className="bg-dark text-light">Stock Market Dashboard</h2>
                    <div>
                        <a href='#'>
                            <img src="src\assets\stock-market-dashboard.jpg" alt="Stock Market Dashboard" className='img-fluid' />
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h2 className="bg-dark text-light">EFT Ballistics</h2>
                    <div>
                        <a href='#'>
                            <img src="src\assets\eft.png" alt="EFT Ballistics" className='img-fluid' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;



