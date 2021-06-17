export const pdfTemplate = ({
  name,
  _id,
  mobilenumber,
  birthdate,
  age,
  photoidproof,
  idproofnumber,
  sideinfo,
  hoslocation,
  dateinfo,
  timeinfo,
}) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="https://www.cowin.gov.in/assets/images/largest-vaccine-banner.jpg"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Booking Date: ${`${today.getDate()}. ${
                                 today.getMonth() + 1
                               }. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Applicant name: ${name}
                            </td>
                            <td>
                               Booking ID: ${_id}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                
              
                <tr class="item">
                   <td>Name:</td>
                   <td>${name}</td>
                </tr>
                <tr class="item">
                   <td>Mobile Number:</td>
                   <td>${mobilenumber}</td>
                </tr>
                <tr class="item">
                   <td>Birth Date:</td>
                   <td>${birthdate}</td>
                </tr>
                <tr class="item">
                   <td>Age:</td>
                   <td>${age}</td>
                </tr>
                <tr class="item">
                   <td>ID Proof:</td>
                   <td>${photoidproof}</td>
                </tr>
                <tr class="item">
                   <td>ID Proof Number:</td>
                   <td>${idproofnumber}</td>
                </tr>
                <tr class="item">
                   <td>Other Diseases:</td>
                   <td>${sideinfo}</td>
                </tr>
                <tr class="item">
                   <td>Hospital Name:</td>
                   <td>${hoslocation}</td>
                </tr>
                <tr class="item">
                   <td>Date:</td>
                   <td>${dateinfo}</td>
                </tr>
                <tr class="item">
                   <td>Vaccination Time:</td>
                   <td>${timeinfo}</td>
                </tr>
             </table>
             <br />
             <p class="justify-center">Please Carry This Document and Photo ID Proof </p>
          </div>
       </body>
    </html>
    `;
};
