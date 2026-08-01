export const projectsData = [
  {
    id: 1,
    title: "Real-Time Logistics KPI Dashboard",
    description: "Real-time dashboard monitoring OTD rate, wait time, and warehouse throughput with 30-second auto-refresh.",
    dataset: "Logistics shipment data (10K+ records)",
    tools: ["Python", "Streamlit", "PostgreSQL", "Plotly"],
    insight: "Detected wait time spikes >30 minutes within 5 minutes, improving OTD by 12% in 2 months.",
    image: "🚚",
    link: "https://colab.research.google.com/drive/11jrXkFM_dPPssh2IzEn6pyaeqYZqqTig"
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    description: "Churn prediction model with RFM segmentation and Random Forest. Improved customer retention by 9%.",
    dataset: "Customer transaction data (500K+ records)",
    tools: ["Python", "Scikit-learn", "RFM", "SHAP"],
    insight: "Customers with recency >60 days but high past frequency have 68% churn potential.",
    image: "📉",
    link: "https://colab.research.google.com/drive/1brKBaJCqqk5ZKxdZ4BQlVSUMpU0zRmu6"
  },
  {
    id: 3,
    title: "USD/IDR Exchange Rate & Macro Analysis",
    description: "Comprehensive analysis of USD/IDR exchange rate dynamics with macro-financial indicators (2010–2026).",
    dataset: "World Bank & Kaggle financial datasets",
    tools: ["Python", "Pandas", "Plotly", "NumPy"],
    insight: "Identified strong correlation between BI Rate (-0.82), US Rate (0.76), and USD/IDR movements.",
    image: "📈",
    link: "https://colab.research.google.com/drive/1u2oKzzDZTNpJW_JiD9LFI0B0fJ9CH7_c"
  },
  {
    id: 4,
    title: "Global Trade Analytics Dashboard",
    description: "Interactive dashboard for global trade analysis including export trends, trade balance, and COVID-19 impact.",
    dataset: "World Bank API + simulated trade data",
    tools: ["Python", "Pandas", "Plotly", "ETL"],
    insight: "Agricultural products showed highest export growth (18% CAGR). Indonesia's export potential increased 25% post-2022.",
    image: "🌍",
    link: "https://colab.research.google.com/drive/1qWzILZl6ssRAdR2Jzx2NsUhkYx7JboCn"
  },
];
