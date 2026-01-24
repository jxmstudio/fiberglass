import { NextRequest, NextResponse } from "next/server";

// Google Sheets API endpoint for appending data
const GOOGLE_SHEETS_ID = "1FQgHP2A0ur-omZa2nq55_TwXrjP04JfEw7eBRT5aNIo";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, location, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !location || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create the row data with timestamp
    const timestamp = new Date().toLocaleString("en-NZ", {
      timeZone: "Pacific/Auckland",
      dateStyle: "full",
      timeStyle: "short",
    });

    const rowData = [timestamp, name, email, phone, location, message];

    // Use Google Apps Script Web App approach (publicly accessible)
    // This requires setting up a Google Apps Script to handle the data
    // For now, we'll use the Google Sheets API v4 with a service account or API key
    
    // Option: Use a Google Apps Script Web App URL
    // You'll need to deploy a Google Apps Script as a web app and paste the URL here
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (GOOGLE_SCRIPT_URL) {
      // If Google Script URL is configured, send data there
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sheetId: GOOGLE_SHEETS_ID,
          data: rowData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit to Google Sheets");
      }
    } else {
      // Fallback: Log the submission (you can also save to a local file or database)
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log("Timestamp:", timestamp);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Location:", location);
      console.log("Message:", message);
      console.log("Google Sheet ID:", GOOGLE_SHEETS_ID);
      console.log("=====================================");
      
      // For direct Google Sheets integration without Apps Script,
      // you would need a service account. Here's the approach:
      // 1. Create a Google Cloud project
      // 2. Enable Google Sheets API
      // 3. Create a service account and download the JSON key
      // 4. Share the spreadsheet with the service account email
      // 5. Use the googleapis npm package
      
      // For simplicity, we'll provide instructions to set up Google Apps Script
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Form submitted successfully",
        // Include sheet URL for reference
        sheetUrl: `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_ID}/edit`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
