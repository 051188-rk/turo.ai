import React from "react";
import Navbar from "./Navbar"; // Adjust the path if necessary

const cardData = [
  {
    price: "$19",
    features: [
      "Connect 20 websites",
      "Connect up to 2 bank accounts",
      "Track up to 10 credit cards",
      "Basic analytics support",
      "Export up to 3 months data",
      "Cloud service 12/5"
    ],
    popular: false,
  },
  {
    price: "$29",
    features: [
      "Connect 80 websites",
      "Connect up to 5 bank accounts",
      "Track up to 50 credit cards",
      "Analytics support",
      "Export up to 12 months data",
      "Cloud service 24/7"
    ],
    popular: true,
  },
  {
    price: "$49",
    features: [
      "Unlimited websites",
      "Unlimited bank accounts",
      "Unlimited credit cards",
      "Advanced analytics",
      "Export all-time data",
      "Priority cloud support"
    ],
    popular: false,
  },
  {
    price: "$10",
    features: [
      "Connect 5 websites",
      "1 bank account",
      "Track 3 credit cards",
      "Basic insights",
      "Export 1 month data",
      "Limited support"
    ],
    popular: false,
  },
  {
    price: "$79",
    features: [
      "White-label access",
      "Multi-user support",
      "Full analytics + reports",
      "Export everything",
      "AI forecasting",
      "Dedicated engineer"
    ],
    popular: false,
  },
  {
    price: "$5",
    features: [
      "2 websites",
      "No bank sync",
      "No card tracking",
      "Manual export",
      "Community support",
      "Limited updates"
    ],
    popular: false,
  }
];

const PricingPlans = () => {
  return (
    <div style={styles.pageWrapper}>
      {/* Include Navbar */}
      <Navbar />

      {/* Anchor target */}
      <div style={styles.wrapper} id="pricing">
        <div style={styles.headerSection}>
          <h2 style={styles.heading}>Choose a plan</h2>
          <img
            src="/plan-image.png"
            alt="plans"
            style={styles.image}
          />
        </div>

        <div style={styles.cardContainer}>
          {cardData.map((card, idx) => (
            <div key={idx} style={styles.card}>
              {card.popular && <div style={styles.badge}>Most Popular</div>}
              <p style={styles.price}>{card.price}</p>
              <a href="#" style={styles.action}>Get Started</a>
              <ul style={styles.lists}>
                {card.features.map((feat, i) => (
                  <li key={i} style={styles.list}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      style={styles.icon}
                    >
                      <path
                        fill="#ffffff"
                        d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                      />
                    </svg>
                    <span style={{ marginLeft: "1rem" }}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: "#0d0d0d",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "sans-serif",
  },
  wrapper: {
    padding: "2rem",
  },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
  image: {
    maxWidth: "200px",
    borderRadius: "1rem",
  },
  cardContainer: {
    display: "flex",
    overflowX: "auto",
    gap: "1.5rem",
    paddingBottom: "1rem",
    scrollbarWidth: "none",
  },
  card: {
    flex: "0 0 auto",
    minWidth: "300px",
    backgroundColor: "#1a1a1a",
    padding: "1.5rem",
    borderRadius: "1.5rem",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    background: "#4dff29",
    color: "#000",
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem",
    borderRadius: "9999px",
    fontWeight: "bold",
  },
  price: {
    fontSize: "2.5rem",
    fontWeight: "300",
    margin: 0,
  },
  action: {
    marginTop: "1.5rem",
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    padding: "0.625rem 1.5rem",
    borderRadius: "9999px",
    backgroundColor: "#fff",
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s all ease-in-out",
  },
  lists: {
    listStyle: "none",
    marginTop: "1.5rem",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    fontSize: "0.875rem",
  },
  list: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    width: "1rem",
    height: "1rem",
    flexShrink: 0,
  }
};

export default PricingPlans;
