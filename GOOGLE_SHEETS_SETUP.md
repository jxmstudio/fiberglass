# Google Sheets Integration Setup

This guide explains how to connect your contact form to Google Sheets.

## Your Google Sheet
- **Sheet URL**: https://docs.google.com/spreadsheets/d/1FQgHP2A0ur-omZa2nq55_TwXrjP04JfEw7eBRT5aNIo/edit

## Step 1: Prepare Your Google Sheet

1. Open your Google Sheet
2. Make sure Row 1 has these headers (in order):
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Phone`
   - E1: `Location`
   - F1: `Message`

## Step 2: Create a Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Copy and paste the following code:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Open the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the row data
    sheet.appendRow(data.data);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testAppend() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date().toLocaleString(),
    "Test Name",
    "test@example.com",
    "021 123 4567",
    "Auckland",
    "This is a test message"
  ]);
}
```

4. Click **Save** (disk icon) and name your project "Contact Form Handler"

## Step 3: Deploy as Web App

1. Click **Deploy → New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Configure the settings:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Click **Authorize access** and follow the prompts to allow permissions
6. **Copy the Web App URL** - it will look like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## Step 4: Add the URL to Your Project

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add this line with your Web App URL:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Restart your development server

## Step 5: Test the Integration

1. Go to your contact page
2. Submit a test form
3. Check your Google Sheet - you should see the new entry!

## Troubleshooting

### "Authorization required" error
- Make sure you authorized the script in Step 3
- Try redeploying the web app

### No data appearing in sheet
- Check the browser console for errors
- Make sure the Web App URL is correct in `.env.local`
- Verify the script is deployed as "Anyone" can access

### CORS errors
- Google Apps Script should handle CORS automatically
- Make sure you're using the `/exec` URL, not `/dev`

## Alternative: Direct API Integration

For production use, consider using the Google Sheets API directly with a service account:

1. Create a Google Cloud project
2. Enable the Google Sheets API
3. Create a service account
4. Share your spreadsheet with the service account email
5. Use the `googleapis` npm package

This provides better security and reliability for production applications.
