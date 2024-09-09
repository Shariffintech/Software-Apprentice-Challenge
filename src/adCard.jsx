import React from "react";
import "./AdCard.css";

const AdCard = ({ ad }) => {
  const { campaign, adset, creative, spend, impressions, clicks, results } = ad;

  return (
    <div className="ad-card">
      <h3>Campaign: {campaign}</h3>
      <p>Adset: {adset}</p>
      <p>Creative: {creative}</p>
      <p>Spend: ${spend}</p>
      <p>Impressions: {impressions}</p>
      <p>Clicks: {clicks}</p>
      <p>Results: {results}</p>
    </div>
  );
};

const adData = [
  {
    campaign: "Campaign 1",
    adset: "Adset 1",
    creative: "Creative 1",
    spend: 100,
    impressions: 5000,
    clicks: 150,
    results: 25,
  },
  {
    campaign: "Campaign 2",
    adset: "Adset 2",
    creative: "Creative 2",
    spend: 200,
    impressions: 10000,
    clicks: 350,
    results: 50,
  },
];
export const AdList = () => {
  return (
    <div className="ad-list">
      {adData.map((ad, index) => (
        <AdCard key={index} ad={ad} />
      ))}
    </div>
  );
};
