/*

Have a custom requirement ? which is not covered in this. I do freelancing also and would love to help you,
feel free to ping me at umr55766@gmail.com

You can have a look at my portfolio here
Upwork : https://www.upwork.com/freelancers/~0158f05dd449d147c2
LinkedIn : https://www.linkedin.com/in/umr55766/

For any query/help contact me at umr55766@gmail.com

*/


var SHEET_ID = "***************************";
var SHEET_NAME = "Sheet1";
var source_cell = "F7";
var destination_cell = "F5";
var to = "umr55766@gmail.com";
var cc = "umr55766@gmail.com";
var subject = "ALERT : Your Is Over Budget!";
var body = "Your Is Over Budget, Please have a look!";

function send_alert() {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  source_cell = String(sheet.getRange(source_cell).getDisplayValue()).replace("$", "").replace(",", "")
  destination_cell = String(sheet.getRange(destination_cell).getDisplayValue()).replace("$", "").replace(",", "")
  var difference = Number(destination_cell) - Number(source_cell);
  if (difference < 0) {
    MailApp.sendEmail({
      "to": to,
      "cc": cc,
      "subject": subject,
      "body": body
    });
  }
}
