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
var source = "F7";
var destination = "F5";
var to = "umr55766@gmail.com";
var cc = "umr55766@gmail.com";
var subject = "ALERT : Your Is Over Budget!";
var body = "Your Is Over Budget, Please have a look!";

function send_alert() {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  source = String(sheet.getRange(source).getDisplayValue()).replace("$", "").replace(",", "")
  destination = String(sheet.getRange(destination).getDisplayValue()).replace("$", "").replace(",", "")
  var difference = Number(destination) - Number(source);
  if (difference < 0) {
    MailApp.sendEmail({
      "to": to,
      "cc": cc,
      "subject": subject,
      "body": body
    });
  }
}
