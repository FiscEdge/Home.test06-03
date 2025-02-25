import React from 'react';
import '../styles/globals.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to FiscEdge Dashboard</h1>
        <nav>
          <button className="nav-button">Overview</button>
          <button className="nav-button">Documents</button>
          <button className="nav-button">Analytics</button>
          <button className="nav-button">Settings</button>
        </nav>
      </header>
      <main className="dashboard-content">
        <section className="dashboard-summary">
          <h2>Business Overview</h2>
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Revenue</h3>
              <p>€25,000</p>
            </div>
            <div className="summary-card">
              <h3>Expenses</h3>
              <p>€15,000</p>
            </div>
            <div className="summary-card">
              <h3>Profit</h3>
              <p>€10,000</p>
            </div>
          </div>
        </section>
        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-date">22 Feb 2025</span>
              <span className="activity-description">New invoice created</span>
            </div>
            <div className="activity-item">
              <span className="activity-date">21 Feb 2025</span>
              <span className="activity-description">Tax report generated</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
