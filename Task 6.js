$(document).ready(function() {

  addNewRow = function() {
    var row_count = mp_table.rows.length;
    if (row_count<4){
      $("#tbody").append('<tr id="row"><td id="rowcell1"><select class="DROPDOWN" id="dropdwn" name="dropdown"><option  value="">Select an option</option><option value="Item-1">Item-1</option><option value="Item-2">Item-2</option><option value="Item-3">Item-3</option></select></td><td id="rowcell2"><button type="button" id="remove" class="rem" name="rembtn" onClick="deleteRow(this)">x</button></td></tr>')
    // var newRow = $("#mp_table tbody tr").first().clone()
    // $("#tbody").append(newRow);
  }
  }

  deleteRow = function(element) {
  var row_count = mp_table.rows.length;
    $(element).parent().parent().remove();
    document.getElementById("mp_table").deleteRow(i);
  }}

);

$(document).ready(function() {


  var selectedList = [];

  Array.prototype.equals = function(array) 
  {

    // if the other array is a falsy value, return

    if (!array)
      return false;


    // compare lengths - can save a lot of time 

    if (this.length != array.length)
      return false;



    for (var i = 0, l = this.length; i < l; i++) {

      // Check if we have nested arrays

      if (this[i] instanceof Array && array[i] instanceof Array) {

        // recurse into the nested arrays

        if (!this[i].equals(array[i]))
          return false;

      } else if (this[i] != array[i]) {

        // Warning - two different object instances will never be equal: {x:20} != {x:20}

        return false;

      }

    }

    return true;

  }

  function updateSelectedList() {

    selectedList = [];

    var selectedValue;

    $('.DROPDOWN').each(function() {

      selectedValue = $(this).find('option:selected').text();

      if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1") {

        selectedList.push(selectedValue);

      }

    });

  }



  //disable the dropdown items that have already been selected

  function disableAlreadySelected() {

    $('option').each(function() {

      if ($.inArray(this.value, selectedList) != "-1") {

        $(this).attr("disabled", true);

      } else {

        $(this).attr("disabled", false);

      }

    });
  }

  
  $('#mp_table').on('click', '.DROPDOWN', function() {

    setTimeout(function() {

      updateSelectedList();

      disableAlreadySelected();

    }, 0);

  });



  //when a new table row is added, disable the dropdown options that have already been selected

  $('#mp_table #addbutton').on('click', disableAlreadySelected);
  
});
























// function addrow() {
//   var row_count = mp_table.rows.length;
//   if (row_count<4){
//   $("#tbody").append('<tr id="row"><td id="rowcell1"><select class="DROPDOWN" id="dropdwn" name="dropdown"><option value="Item-1">Item-1</option><option value="Item-2">Item-2</option><option value="Item-3">Item-3</option></select></td><td id="rowcell2"><button type="button" onclick="delrow()" id="remove" class="rem" name="rembtn">x</button></td></tr>')
// }}


// function delrow(){
//   var row_count = mp_table.rows.length;
//   if (row_count>2){
//   var element = document.getElementById("row");
//   element.remove(this);
// }}

// function delrow(d){
//   var row_count = mp_table.rows.length;
//   if (row_count>2){
// var i = d.parentNode.parentNode.rowIndex;
// document.getElementById("mp_table").deleteRow(i);
// }}







// $('select[name*="dropdown"]').change(function(){
//   $('select[name*="dropdown"] option').attr('disabled',false);

//   $('select[name*="dropdown"]').each(function(){
//     var $this = $(this);
//     $('select[name*="dropdown"]').not($this).find('option').each(function(){
//        if($(this).attr('value') == $this.val())
//            $(this).attr('disabled',true);
//     });
// });

// });

// function DisableDropdown(){
//   var elementID;
//   elementID = document.getElementById(dropdwn);
//   elementID.disabled = true;
// }



//   $('#row').change(function(){
//   let value = $(this).val()
//   $(this).children('.DROPDOWN').children('option').attr('disabled', false)

//     $('#row').each(function(){
//         $(this).children('.DROPDOWN').children('option[value='+ $(this).val()+']').attr('disabled', 'disabled') 
//       });

// });
      
//  })

// })
// $('select').on('change', function(){
//   $('select option').prop("disabled", false);
//   $("select").not(this).find("option[value="+ $(this).val() + "]").prop('disabled', true);
// });

// $('#dropdwn').on('change', function(){
//   var value =$.trim($(this).val());
// $('select option:contains("'+value+'")').attr('disabled','disabled');
// });

// $('.day1').attr('disabled',true);
//   $('.check2_1 ').change(function(){
//     $('.day1').attr('disabled', !this.checked);
//   });


  
// $(function() {
//     $("#ddl1").change(function() {
//         if ($(this).val() == "<yourValue>") {
//             $("#ddl2").prop("disabled", true);
//         }
//         else
//             $("#ddl2").prop("disabled", false);
//     });
// });







  //when a new table row is added, disable the dropdown options that have already been selected

// $(document).ready(function() {
    
//   var masterList = [];
//   var selectedList = [];
  
//   //this function taken from http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
//   Array.prototype.equals = function (array) {
//     // if the other array is a falsy value, return
//     if (!array)
//         return false;

//     // compare lengths - can save a lot of time 
//     if (this.length != array.length)
//         return false;

//     for (var i = 0, l=this.length; i < l; i++) {
//         // Check if we have nested arrays
//         if (this[i] instanceof Array && array[i] instanceof Array) {
//             // recurse into the nested arrays
//             if (!this[i].equals(array[i]))
//                 return false;       
//         }           
//         else if (this[i] != array[i]) { 
//             // Warning - two different object instances will never be equal: {x:20} != {x:20}
//             return false;   
//         }           
//     }       
//     return true;
//   }  
  
//   function createMasterList() {
//     masterList = [];
//     $('product').children('option').each(function() {
//       masterList.push($(this).val());
//     });
//     masterList.shift(); //remove blank value
//   }
  
//   createMasterList(); //used to check if all dropdown values have been selected
  
//   function updateSelectedList() {
//     selectedList = [];
//     var selectedValue;
//     $('.stockCode').each(function() {
//       selectedValue = $(this).find('option:selected').text();
//       if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1") {
//       	selectedList.push(selectedValue);
//       }
//     });
//   }
  
//   //disable the dropdown items that have already been selected
//   function disableAlreadySelected() {
//     $('option').each(function() {
//       if ($.inArray(this.value, selectedList) != "-1") {
//         $(this).attr("disabled", true);
//       } else {
//         $(this).attr("disabled", false);
//       }
//     });
//   }
  
//   //If all values have been selected, don't let the user add more rows
//   function hideAddButtonIfDone() {
//     masterList.sort();
//     selectedList.sort();
//     if (masterList.equals(selectedList)) {
//       console.log("lists equal, hiding add button");
//       $('myTable .cf-table-add-row').hide();
//     }
//     else {
//       console.log("lists not equal, showing add button");
//       $('myTable .cf-table-add-row').show();
//     }
//   }
  
//   $('myTable').on('change', '.stockCode', function() {
//     setTimeout(function() {
//       updateSelectedList();
//       disableAlreadySelected();
//       hideAddButtonIfDone();
//     }, 0);
//   });
  
//   //when a new table row is added, disable the dropdown options that have already been selected
//   $('myTable .Add').on('click', disableAlreadySelected);
  
//   //when a table row is removed, update all dropdowns (the removed row's dropdown option will be re-enabled
//   //in remaining dropdowns
//   $('myTable').on('DOMNodeRemoved', '.kx-repeatable > tr', function() {
//     updateSelectedList();
//     disableAlreadySelected();
//     hideAddButtonIfDone();
//   });
  
// });
// $(document).ready(function() {

//   addNewRow = function() {
//     var row_count = mp_table.rows.length;
//     if (row_count<4){
//       $("#tbody").append('<tr id="row"><td id="rowcell1"><select class="DROPDOWN" id="dropdwn" name="dropdown"><option  value="">Select an option</option><option value="Item-1">Item-1</option><option value="Item-2">Item-2</option><option value="Item-3">Item-3</option></select></td><td id="rowcell2"><button type="button" id="remove" class="rem" name="rembtn" onClick="deleteRow(this)">x</button></td></tr>')
//     // var newRow = $("#mp_table tbody tr").first().clone()
//     // $("#tbody").append(newRow);
//   }
//   }

//   deleteRow = function(element) {
//   var row_count = mp_table.rows.length;
//     if (row_count>2){
//     $(element).parent().parent().remove();
//   }}

// });

// $(document).ready(function() {


//   var selectedList = [];

//   Array.prototype.equals = function(array) 
//   {

//     // if the other array is a falsy value, return

//     if (!array)
//       return false;


//     // compare lengths - can save a lot of time 

//     if (this.length != array.length)
//       return false;



//     for (var i = 0, l = this.length; i < l; i++) {

//       // Check if we have nested arrays

//       if (this[i] instanceof Array && array[i] instanceof Array) {

//         // recurse into the nested arrays

//         if (!this[i].equals(array[i]))
//           return false;

//       } else if (this[i] != array[i]) {

//         // Warning - two different object instances will never be equal: {x:20} != {x:20}

//         return false;

//       }

//     }

//     return true;

//   }

//   function updateSelectedList() {

//     selectedList = [];

//     var selectedValue;

//     $('.DROPDOWN').each(function() {

//       selectedValue = $(this).find('option:selected').text();

//       if (selectedValue != "" && $.inArray(selectedValue, selectedList) == "-1") {

//         selectedList.push(selectedValue);

//       }

//     });

//   }



//   //disable the dropdown items that have already been selected

//   function disableAlreadySelected() {

//     $('option').each(function() {

//       if ($.inArray(this.value, selectedList) != "-1") {

//         $(this).attr("disabled", true);

//       } else {

//         $(this).attr("disabled", false);

//       }

//     });
//   }

  
//   $('#mp_table').on('click', '.DROPDOWN', function() {

//     setTimeout(function() {

//       updateSelectedList();

//       disableAlreadySelected();

//     }, 0);

//   });



//   //when a new table row is added, disable the dropdown options that have already been selected

//   $('#mp_table #addbutton').on('click', disableAlreadySelected);
  
// });
























// function addrow() {
//   var row_count = mp_table.rows.length;
//   if (row_count<4){
//   $("#tbody").append('<tr id="row"><td id="rowcell1"><select class="DROPDOWN" id="dropdwn" name="dropdown"><option value="Item-1">Item-1</option><option value="Item-2">Item-2</option><option value="Item-3">Item-3</option></select></td><td id="rowcell2"><button type="button" onclick="delrow()" id="remove" class="rem" name="rembtn">x</button></td></tr>')
// }}


// function delrow(){
//   var row_count = mp_table.rows.length;
//   if (row_count>2){
//   var element = document.getElementById("row");
//   element.remove(this);
// }}

// function delrow(d){
//   var row_count = mp_table.rows.length;
//   if (row_count>2){
// var i = d.parentNode.parentNode.rowIndex;
// document.getElementById("mp_table").deleteRow(i);
// }}







// $('select[name*="dropdown"]').change(function(){
//   $('select[name*="dropdown"] option').attr('disabled',false);

//   $('select[name*="dropdown"]').each(function(){
//     var $this = $(this);
//     $('select[name*="dropdown"]').not($this).find('option').each(function(){
//        if($(this).attr('value') == $this.val())
//            $(this).attr('disabled',true);
//     });
// });

// });

// function DisableDropdown(){
//   var elementID;
//   elementID = document.getElementById(dropdwn);
//   elementID.disabled = true;
// }



//   $('#row').change(function(){
//   let value = $(this).val()
//   $(this).children('.DROPDOWN').children('option').attr('disabled', false)

//     $('#row').each(function(){
//         $(this).children('.DROPDOWN').children('option[value='+ $(this).val()+']').attr('disabled', 'disabled') 
//       });

// });
      
//  })

// })
// $('select').on('change', function(){
//   $('select option').prop("disabled", false);
//   $("select").not(this).find("option[value="+ $(this).val() + "]").prop('disabled', true);
// });

// $('#dropdwn').on('change', function(){
//   var value =$.trim($(this).val());
// $('select option:contains("'+value+'")').attr('disabled','disabled');
// });

// $('.day1').attr('disabled',true);
//   $('.check2_1 ').change(function(){
//     $('.day1').attr('disabled', !this.checked);
//   });


  
// $(function() {
//     $("#ddl1").change(function() {
//         if ($(this).val() == "<yourValue>") {
//             $("#ddl2").prop("disabled", true);
//         }
//         else
//             $("#ddl2").prop("disabled", false);
//     });
// });

