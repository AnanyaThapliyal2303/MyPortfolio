$(document).ready(function(){
    var imgContainer = [];
    gridInit();
    imgGrid(2);
    
    $("#colNumber").change(function(){
      var val = $(this).children("option:selected").val();
      if(val != "Choose One"){
        imgGrid(val);
      }
    })
    
    function gridInit(){
      $(".img-grid").children("img").each(function(){
        imgContainer.push($(this).attr("src"));
      });
      $(".img-grid").html("");
    }
    
    function imgGrid(col){
      if(col == 1){
        $(".img-grid").html("<div data-col='1' class='grid-1'></div>");
        for(var x = 0; x < imgContainer.length; x++){
          $("[data-col='1']").append("<img src='"+imgContainer[x]+"'>");
        }
  
      }else if(col == 2){
        $(".img-grid").html("<div data-col='1' class='grid-2'></div><div data-col='2' class='grid-2'></div>");
        var n = 1;
        for(var x = 0; x < imgContainer.length; x++){
          if(n == 3){
            n = 1;
          }
          $("[data-col='"+n+"']").append("<img src='"+imgContainer[x]+"'>");
          n++;
        }
      }
    }
  });