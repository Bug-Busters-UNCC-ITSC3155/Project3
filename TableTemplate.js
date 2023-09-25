class TableTemplate{

    static fillIn(id,dict,columnName = " "){
        var table = document.getElementById(id);
        //number of rows
        var rowCount = table.rows.length;
        console.log(rowCount);
        //number of columns
        var colCount = table.rows[0].cells.length;
        console.log(colCount);
        var innerFill = null;
        
        //first cell[0,0]
        var col1 = table.rows[0].cells[0];
        col1.innerHTML = extractString(String(col1.innerHTML),dict);
        //second cell[0,1]
        var col2 = table.rows[0].cells[1];
        col2.innerHTML = extractString(String(col2.innerHTML),dict);

        if(columnName == " "){
            for(var i = 1; i < rowCount;i++){
                for(var j = 0; j < colCount;j++){
                    var temp = table.rows[i].cells[j];
                    temp.innerHTML = extractString(String(temp.innerHTML),dict);
                }
            }
        
        }else if(col1.innerHTML == columnName){
            for(var i = 0; i < rowCount;i++){
                var temp = table.rows[i].cells[0];
                temp.innerHTML = extractString(String(temp.innerHTML),dict);
            }
        }else if(col2.innerHTML == columnName){
            for(var i = 0; i < rowCount;i++){
                var temp = table.rows[i].cells[1];
                temp.innerHTML = extractString(String(temp.innerHTML),dict);
            }
        }
        
        function extractString(template,dictionary){
            var str = template;
            const matches = str.match(/{{.*?}}/g);
    
            for (const i in matches){
                if (matches[i] != null){
                    const match = matches[i];
                    const value = dictionary[match.substring(2, match.indexOf("}}"))] || " ";
                    str = str.replace(match, value);
                }
            }
            
            
            return str;
    
                
        }

    } 
    
    

}