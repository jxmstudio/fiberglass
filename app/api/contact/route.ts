import { NextRequest, NextResponse } from "next/server";

const GOOGLE_SHEETS_ID = "1FQgHP2A0ur-omZa2nq55_TwXrjP04JfEw7eBRT5aNIo";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
  honeypot?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  first_visit_source?: string;
  landing_page?: string;
  referrer?: string;
  submitted_at?: string;
  page_url?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { 
      name, 
      email, 
      phone, 
      location, 
      message,
      honeypot,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      first_visit_source,
      landing_page,
      referrer,
      page_url,
    } = body;

    if (honeypot) {
      console.log("Bot submission detected and blocked");
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    if (!name || !email || !phone || !location || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-NZ", {
      timeZone: "Pacific/Auckland",
      dateStyle: "full",
      timeStyle: "short",
    });

    const rowData = [
      timestamp,
      name,
      email,
      phone,
      location,
      message,
    ];

    const source = utm_source || first_visit_source || 'direct';
    console.log("--- Attribution Data (not sent to sheet) ---");
    console.log("Source:", source);
    console.log("Medium:", utm_medium || 'N/A');
    console.log("Campaign:", utm_campaign || 'N/A');
    console.log("Landing Page:", landing_page || 'N/A');
    console.log("Referrer:", referrer || 'N/A');

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
        redirect: "follow",
      });

      const responseText = await response.text();
      console.log("Google Script response status:", response.status);
      console.log("Google Script response:", responseText);

      if (!response.ok) {
        if (response.status === 403) {
          console.error("Google Apps Script access denied - check deployment settings");
          throw new Error("Google Sheets integration not configured correctly");
        }
        throw new Error(`Failed to submit to Google Sheets: ${response.status}`);
      }
    } else {
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log("Timestamp:", timestamp);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Location:", location);
      console.log("Message:", message);
      console.log("=====================================");
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
