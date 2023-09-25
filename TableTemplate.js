class TableTemplate{

    static fillIn(id,dict,columnName = " "){
        var table = document.getElementById(id);
        var rowCount = table.rows.length;
        var colCount = table.rows[0].cells.length;
        console.log(rowCount);
        console.log(colCount);
        var storage = "";
        var indices = table.rows.item(0).cells;

        var indexFill = null;
        //replaces strings in first row
        for(var j = 0; j < colCount;j++){
            
            storage = String(indices.item(j).innerHTML);
            indices[j].innerHTML = this.extractString(storage,dict);
            if(indices[j].innerHTML == columnName){
                indexFill = j;
            }
        }
        
        columnName = " ";
        //change whole table since not specified
        if(columnName == " "){
            for(var i = 1; i < rowCount;i++){
                var indices = table.rows.item(i).cells;
                for(var j = 0; j < colCount;j++){
                    storage = String(indices.item(j).innerHTML);
                    indices[j].innerHTML = this.extractString(storage,dict);
                }
            }
        //if is specified
        } else if( indexFill != null){
            for(var i = 1; i < rowCount;i++){
                var indices = table.rows.item(i).cells;
                storage = String(indices.item(indexFill).innerHTML);
                indices[indexFill].innerHTML = this.extractString(storage,dict);
            }
        } 


    } 
    extractString(text, dictionary){
        let returnString = text;
        for (const property in dictionary){
            if (Object.prototype.hasOwnProperty.call(dictionary, property)) {
                returnString = returnString.replaceAll("{{" + property + "}}",dictionary[property]);
            }
        }
        const regex = /{{.*}}/g;
        returnString = returnString.replaceAll(regex,"");
        return returnString;
    }
    

}