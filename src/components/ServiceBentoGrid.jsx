import React from "react";
import "./ServiceBentoGrid.css";

const ServiceBentoGrid = () => {
  return (
    <main className="main">
      <section className="section">
        <div className="container bento-column">
          <div className="bento-item schedule">
            <h2>
              Create and schedule content <em className="text-purple">quicker.</em>
            </h2>
          </div>
          <div className="bento-item social">
            <h2>
              Social Media <span className="text-yellow">10x</span> <em>Faster</em> with AI
            </h2>
            <p>Over 4000 5-star reviews.</p>
          </div>
          <div className="bento-item timing">
            <h2>Schedule to social media</h2>
            <p>
              Optimize post timings to publish content at the perfect time for your audience.
            </p>
          </div>
          <div className="bento-item content">
            <h2>Write your content using <em className="text-purple">AI</em></h2>
          </div>
          <div className="bento-item multiple">
            <h2>Manage multiple accounts</h2>
          </div>
          <div className="bento-item growth">
            <h2>&gt;56%</h2>
            <p>faster audience growth.</p>
          </div>
          <div className="bento-item consistency">
            <h2>Maintain consistent posting</h2>
          </div>
          <div className="bento-item follower">
            <h2>Grow followers with <em className="text-purple">non-stop </em>content</h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceBentoGrid;
