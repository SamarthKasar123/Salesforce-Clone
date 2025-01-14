<?php
// Example of a simple PHP backend returning JSON data
$articles = [
    ["title" => "Salesforce Will Hire No More Software Engineers in 2025", "author" => "Marc Benioff"],
    ["title" => "10 New Salesforce Flow Features to Boost Productivity", "author" => "Admin"],
    ["title" => "5 Tips for Salesforce Administrators in 2025", "author" => "Tech Team"],
    ["title" => "The Future of CRM Automation", "author" => "Salesforce News"]
];

// Set the header for JSON response
header('Content-Type: application/json');
echo json_encode($articles);
?>
