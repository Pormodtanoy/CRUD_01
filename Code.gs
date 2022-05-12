// Credit: 

1. Code.gs

function doGet(e){
  return HtmlService
    .createTemplateFromFile('index.html')
    .evaluate()
     addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
};

var ss = SpreadsheetApp.openById("1ewcf6d8WkcPgGUwWcDoOdhGk57zAMhnVl_9TqlSTrD0");
var sheet = ss.getSheetByName("Sheet1");


//newEntry function 
function newEntry(sd){
  var zeroPad = (num, places) => String(num).padStart(places, '0')
  var rnd =Math.floor(Math.random() * 500) + 500;
  var id = "SiTE"+zeroPad(rnd,6); //unique id for each entry
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 1;i <= lr;i++){
  var vid = sheet.getRange(i, 4).getValue();
      if(vid == sd[2]){// checking if Mobile No already exist.
      flag = 0;   
  var  data  ="This Mobile NO is already in our data base.";
      return data;
    }
   }
     if(flag==1){
  sheet.appendRow([id,sd[0],sd[1],sd[2],sd[3],sd[4],sd[5],sd[6]]);
  sheet.getRange(i, 7).setNumberFormat('@STRING@');
  var data = 'Entry successfully entry Id:'+id;
  return data;
    } 
    };


//read function 
function readId(txt){
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 1;i <= lr;i++){
  var vid = sheet.getRange(i, 1).getValue();
      if(vid === "SiTE"+txt){
      flag = 0;
  var b1 = sheet.getRange(i, 2).getValue();      
  var b2 = sheet.getRange(i, 3).getValue();
  var b3 = sheet.getRange(i, 4).getValue();
  var b4 = sheet.getRange(i, 5).getValue();
  var b5 = sheet.getRange(i, 6).getValue();
  var b6 = sheet.getRange(i, 7).getValue();
  var b7 = sheet.getRange(i, 8).getValue();
  var data =["Data Fetched",b1,b2,b3,b4,b5,b6,b7];
  return data;
    }
   }
     if(flag==1){
  var data =["ID not found.",,,,,];
      return data;
    } 
    };





//update function 
function updateId(sd){
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 1;i <= lr;i++){
  var vid = sheet.getRange(i, 1).getValue();
      if(vid == "SiTE"+sd[0]){
      flag = 0;
  sheet.getRange(i, 2).setValue(sd[1]);      
  sheet.getRange(i, 3).setValue(sd[2]);
  sheet.getRange(i, 4).setValue(sd[3]);
  sheet.getRange(i, 5).setValue(sd[4]);
  sheet.getRange(i, 6).setValue(sd[5]);
  sheet.getRange(i, 7).setValue(sd[6]).setNumberFormat('@STRING@');
  sheet.getRange(i, 8).setValue(sd[7]);
  var data ="Update successfully";
  return data;
    }
   }
     if(flag==1){
  var data ="ID not found.";
      return data;
    } 
    };




//Delete ID
function deleteId(obj){
  var  flag  =  1 ;
  var lr = sheet.getLastRow();
      for(var i = 1;i <= lr;i++){
  var vid = sheet.getRange(i, 1).getValue();
      if(vid == "SiTE"+obj){
      flag = 0;
      sheet.deleteRow(i)
  var data ='Id successfully deleted.';
  return data;
    }
   }
     if(flag==1){
  var data ="ID not found.";
      return data;
    } 
    };
    
   ------------------------------
   
   
   
   
   
   
   
   
