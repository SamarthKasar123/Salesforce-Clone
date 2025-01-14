document.addEventListener("DOMContentLoaded", () => {
    const trendingList = document.getElementById("trending-list");

    // Sample data fetched dynamically (can be replaced with API calls)
    const trendingArticles = [
        "Salesforce Will Hire No More Software Engineers in 2025, Says Marc Benioff",
        "10 New Salesforce Flow Features to Boost Productivity",
        "5 Tips for Salesforce Administrators in 2025",
        "The Future of CRM Automation"
    ];

    trendingArticles.forEach((article) => {
        const listItem = document.createElement("li");
        listItem.textContent = article;
        trendingList.appendChild(listItem);
    });
});
